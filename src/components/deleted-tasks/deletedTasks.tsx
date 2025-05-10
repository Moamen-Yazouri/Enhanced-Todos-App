"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircle, Filter, Search, X } from "lucide-react"
import { Link } from "react-router-dom"
import TodoItem from "../todoItem/todoItem"
import { StateContext } from "@/providers/state/stateContext"
import { useContext, useMemo, useState } from "react"
import { ScrollableContainer } from "../scroll-container/scrollContainer"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { categories, statuses } from "@/constants/constants"
import Loader from "../ui/loader"
import useFilter from "@/hooks/useFilter"
import useFilterActions from "@/hooks/useFilterActions"
import UnauthorizedPage from "../unAuthorized/unAuthorized"
import { AuthContext } from "@/providers/auth/authContext"

export default function DeletedTodos() {
  const { user } = useContext(AuthContext);
  const { state, loadingData } = useContext(StateContext)
  const deletedTodos = state?.deletedTodos || [];
  const [showFilters, setShowFilters] = useState(false);
  const {
        catsFilter,
        statesFilter,
        params,
        handleClearFilters,
        handleSearch,
        handleCategory,
        handleResetSearch
    } = useFilterActions()

  const filterTodos = useFilter({todos: deletedTodos, catsFilter, statesFilter, params});
  
  const activeFilterCount = useMemo(() => {
    return catsFilter.length + (params.get("query") ? 1 : 0);
  }, [filterTodos]);
  if(!user) return <UnauthorizedPage/>
  return (
    <div className="max-w-3xl mx-auto p-6 rounded-2xl glass shadow-lg my-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent drop-shadow-sm">
          Deleted Tasks
        </h1>
        <div className="flex gap-2">
          <Popover open={showFilters} onOpenChange={setShowFilters}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-1 bg-white/20 border-white/20 hover:bg-white/30 relative"
              >
                <Filter className="h-4 w-4" />
                Filter
                {activeFilterCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-gradient-to-r from-orange-500 to-rose-500 text-white">
                      {activeFilterCount}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0 glass border-white/20">
              <div className="p-4 border-b border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Filter Tasks</h3>
                  {activeFilterCount > 0 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 px-2 text-xs text-rose-500 hover:text-rose-600 hover:bg-rose-500/10"
                      onClick={handleClearFilters}
                    >
                      Clear All
                    </Button>
                  )}
                </div>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by task name..."
                    className="pl-8 bg-white/30 border-white/20 focus-visible:ring-orange-300"
                    value={params.get("search") || ""}
                    onChange={ handleSearch}
                  />
                  {params.get("search") && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1 h-7 w-7 p-0 text-muted-foreground"
                      onClick={handleResetSearch}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              <div className="p-4 border-b border-white/10">
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2 max-h-40 overflow-y-auto custom-scrollbar pr-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category.id}`}
                        className="border-white bg-white/50 data-[state=checked]:bg-orange-500"
                        defaultChecked={false}
                        onCheckedChange={ (checked) => handleCategory(checked, category.id)}
                      />
                      <Label htmlFor={`category-${category.id}`} className="text-sm">
                        {category.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border-t border-white/10">
                <div className="text-sm text-muted-foreground">
                  {activeFilterCount == 0
                    ? "No filters applied"
                    : `${activeFilterCount} filter${activeFilterCount !== 1 ? "s" : ""} applied`}
                </div>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white border-none"
                  onClick={() => setShowFilters(false)}
                >
                  Apply Filters
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          <Link to="/add-task">
            <Button className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white border-none shadow-md">
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Task
            </Button>
          </Link>
        </div>
      </div>

      {activeFilterCount > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {params.get("search") && (
            <Badge
              variant="outline"
              className="bg-white/20 border-white/20 text-foreground flex items-center gap-1 pl-2 pr-1 py-1"
            >
              <span className="text-xs">Search: {params.get("search")}</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-4 w-4 p-0 ml-1 text-foreground hover:bg-white/20 rounded-full"
                onClick={handleResetSearch}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}

          {catsFilter.map((categoryId) => {
            const category = categories.find((c) => c.id === categoryId)
            return category ? (
              <Badge
                key={`cat-${categoryId}`}
                variant="outline"
                className="bg-white/20 border-white/20 text-foreground flex items-center gap-1 pl-2 pr-1 py-1"
              >
                <span className="text-xs">Category: {category.label}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-4 w-4 p-0 ml-1 text-foreground hover:bg-white/20 rounded-full"
                  // In a real implementation, you'd remove this category from filters
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ) : null
          })}

          <Button
            variant="ghost"
            size="sm"
            className="h-6 px-2 text-xs text-rose-500 hover:text-rose-600 hover:bg-rose-500/10"
            onClick={handleClearFilters}
          >
            Clear All
          </Button>
        </div>
      )}

      <ScrollableContainer maxHeight="70vh">
        {
          loadingData && (
              <div className="flex items-center justify-center">
                <Loader/>
              </div> 
          )
        }
        {deletedTodos.length === 0  && !loadingData && (
            <div className="text-center py-10 bg-white/70 backdrop-blur-sm rounded-xl border border-orange-200/50 shadow-sm">
              <p className="text-gray-500">No tasks yet. Add your first task!</p>
            </div>
          ) 
        }

        {
          deletedTodos.length > 0 && !loadingData &&(
            <div className="space-y-4">
                {filterTodos.map((todo) => (
                  <TodoItem
                    key={todo.id + todo.status}
                    id={todo.id}
                    category={todo.category}
                    title={todo.title}
                    description={todo.description}
                    status={todo.status}
                    createdAt={todo.createdAt}
                    expiresAt={todo.expiresAt}
                    priority={todo.priority}
                  />
                ))}
              </div>
          )
        }
      </ScrollableContainer>
    </div>
  )
}
