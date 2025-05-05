"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CheckCircle2, Clock, ClipboardList, ListTodo, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Mock data for the dashboard
const taskCompletionData = [
  { day: "Mon", completed: 5, pending: 3 },
  { day: "Tue", completed: 7, pending: 4 },
  { day: "Wed", completed: 4, pending: 6 },
  { day: "Thu", completed: 8, pending: 2 },
  { day: "Fri", completed: 6, pending: 3 },
  { day: "Sat", completed: 3, pending: 1 },
  { day: "Sun", completed: 2, pending: 2 },
]

const taskCategoryData = [
  { name: "Work", value: 12, fill: "#f97316" },
  { name: "Personal", value: 8, fill: "#fb923c" },
  { name: "Study", value: 5, fill: "#fdba74" },
  { name: "Health", value: 3, fill: "#ffedd5" },
]

export default function TaskDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-white">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <ClipboardList className="h-6 w-6 text-orange-500" />
            <h1 className="text-lg font-semibold">Enhanced Todo List</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <ListTodo className="mr-2 h-4 w-4" />
              New Task
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 p-4 sm:p-6">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Stats cards */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
                    <ClipboardList className="h-4 w-4 text-orange-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">28</div>
                    <p className="text-xs text-muted-foreground">+4 from last week</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Completed</CardTitle>
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">17</div>
                    <p className="text-xs text-muted-foreground">61% completion rate</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Pending</CardTitle>
                    <Clock className="h-4 w-4 text-orange-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8</div>
                    <p className="text-xs text-muted-foreground">3 due today</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Overdue</CardTitle>
                    <Clock className="h-4 w-4 text-red-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3</div>
                    <p className="text-xs text-muted-foreground">Action required</p>
                  </CardContent>
                </Card>
              </div>

              {/* Charts */}
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Task Completion</CardTitle>
                    <CardDescription>Tasks completed vs pending this week</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <ChartContainer
                      config={{
                        completed: {
                          label: "Completed",
                          color: "hsl(24, 94%, 53%)",
                        },
                        pending: {
                          label: "Pending",
                          color: "hsl(220, 13%, 91%)",
                        },
                      }}
                      className="aspect-[4/3]"
                    >
                      <BarChart
                        data={taskCompletionData}
                        margin={{
                          top: 16,
                          right: 16,
                          bottom: 16,
                          left: 16,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} cursor={{ fill: "var(--chart-grid)" }} />
                        <Bar dataKey="completed" stackId="a" fill="var(--color-completed)" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="pending" stackId="a" fill="var(--color-pending)" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ChartContainer>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Task Categories</CardTitle>
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
                          />
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Task Completion Trend</CardTitle>
                  <CardDescription>Task completion rate over the past week</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <ChartContainer
                    config={{
                      completed: {
                        label: "Completed",
                        color: "hsl(24, 94%, 53%)",
                      },
                      pending: {
                        label: "Pending",
                        color: "hsl(220, 13%, 91%)",
                      },
                    }}
                    className="aspect-[3/2]"
                  >
                    <LineChart
                      data={taskCompletionData}
                      margin={{
                        top: 16,
                        right: 16,
                        bottom: 16,
                        left: 16,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="completed"
                        stroke="var(--color-completed)"
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                      <Line type="monotone" dataKey="pending" stroke="var(--color-pending)" strokeWidth={2} />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
