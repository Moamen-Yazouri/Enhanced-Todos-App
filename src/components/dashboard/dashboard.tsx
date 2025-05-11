"use client"

import { useContext, useMemo, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bar, BarChart, CartesianGrid, Cell, PieChart, Pie, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CheckCircle2, Clock, ClipboardList, ListTodo, User, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { getCategorydata, getPriorityData, getStatusData, todosStatistics } from "@/utils/dashboard"
import { StateContext } from "@/providers/state/stateContext"
import type { IDashboardData } from "./types"
import { ScrollableContainer } from "../scroll-container/scrollContainer"
import DashboardLoader from "./loader"


export default function TaskDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const { state, loadingData } = useContext(StateContext)
  const taskStatusData: IDashboardData[] = useMemo(() => {
    return getStatusData([...state.todos || [], ...state.deletedTodos || []])
  }, [state])

  const priorityDistributionData: IDashboardData[] = useMemo(() => {
    return getPriorityData(state.todos || [])
  }, [state])

  const taskCategoryData: IDashboardData[] = useMemo(() => {
    return getCategorydata([...state.todos || [], ...state.deletedTodos || []])
  }, [state])

  const totalTasks = taskStatusData.reduce((sum, item) => sum + item.value, 0)

  const { completedTasks, pendingTasks, deletedTasks, delayedTasks } = useMemo(() => {
    return todosStatistics(state.todos || [])
  }, [state])

  // Calculate completion rate
  const completionRate = Math.round((completedTasks / totalTasks) * 100)

  return (
    <div className="flex min-h-screen flex-col">


      {/* Main content */}
      <ScrollableContainer className="flex-1 p-4 sm:p-6" maxHeight="calc(100vh - 4rem)">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent drop-shadow-sm">
              Dashboard
            </h2>
          </div>
          {
            loadingData ? (
              <DashboardLoader  />
            ) : (
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="mb-4 bg-white/20 border border-white/10">
                  <TabsTrigger
                    value="overview"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-rose-500 data-[state=active]:text-white"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="analytics"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-rose-500 data-[state=active]:text-white"
                  >
                    Analytics
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  {/* Stats cards */}
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <Card className="glass border-white/20">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
                        <ClipboardList className="h-4 w-4 text-orange-500" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{totalTasks}</div>
                        <p className="text-xs text-muted-foreground">+4 from last week</p>
                      </CardContent>
                    </Card>
                    <Card className="glass border-white/20">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Completed</CardTitle>
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{completedTasks}</div>
                        <p className="text-xs text-muted-foreground">{completionRate}% completion rate</p>
                      </CardContent>
                    </Card>
                    <Card className="glass border-white/20">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Pending</CardTitle>
                        <Clock className="h-4 w-4 text-amber-500" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{pendingTasks}</div>
                        <p className="text-xs text-muted-foreground">5 due today</p>
                      </CardContent>
                    </Card>
                    <Card className="glass border-white/20">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Delayed</CardTitle>
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{delayedTasks}</div>
                        <p className="text-xs text-muted-foreground">Action required</p>
                      </CardContent>
                    </Card>
                    <Card className="glass border-white/20">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-medium">Deleted</CardTitle>
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">{deletedTasks}</div>
                        <p className="text-xs text-muted-foreground">Action required</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Charts */}
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="glass border-white/20">
                      <CardHeader>
                        <CardTitle className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                          Priority Distribution
                        </CardTitle>
                        <CardDescription>Tasks by priority level</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <div className="aspect-[4/3] w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={priorityDistributionData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={2}
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                labelLine={false}
                              >
                                {priorityDistributionData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                              </Pie>
                              <Tooltip formatter={(value, name) => [`${value} tasks`, `${name} Priority`]} />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="glass border-white/20">
                      <CardHeader>
                        <CardTitle className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                          Task Categories
                        </CardTitle>
                        <CardDescription>Distribution of tasks by category</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <div className="aspect-[4/3] w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={taskCategoryData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={2}
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                labelLine={false}
                              >
                                {taskCategoryData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                              </Pie>
                              <Tooltip />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="analytics" className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card className="glass border-white/20">
                      <CardHeader>
                        <CardTitle className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                          Priority Breakdown
                        </CardTitle>
                        <CardDescription>Detailed view of task priorities</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <ChartContainer
                          config={{
                            value: {
                              label: "Tasks",
                              color: "hsl(24, 94%, 53%)",
                            },
                          }}
                          className="aspect-[3/2]"
                        >
                          <BarChart
                            data={priorityDistributionData}
                            margin={{
                              top: 16,
                              right: 16,
                              bottom: 16,
                              left: 16,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.2)" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                            <Bar dataKey="value" radius={[4, 4, 0, 0]} fill="var(--color-value)">
                              {priorityDistributionData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ChartContainer>
                      </CardContent>
                    </Card>
                    <Card className="glass border-white/20">
                      <CardHeader>
                        <CardTitle className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                          Task Status Distribution
                        </CardTitle>
                        <CardDescription>Overview of all task statuses</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-2">
                        <div className="aspect-[3/2] w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={taskStatusData}
                                cx="50%"
                                cy="50%"
                                innerRadius={70}
                                outerRadius={90}
                                paddingAngle={2}
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                labelLine={false}
                              >
                                {taskStatusData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                              </Pie>
                              <Tooltip formatter={(value, name) => [`${value} tasks`, name]} />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            )
          }
        </div>
      </ScrollableContainer>
    </div>
  )
}
