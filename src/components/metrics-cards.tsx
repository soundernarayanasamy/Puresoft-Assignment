'use client'
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { Line, LineChart, ResponsiveContainer } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import data from '@/json-data/task-data.json'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

const sparklineData = Array(10)
  .fill(0)
  .map((_, i) => ({ value: Math.random() * 100 }))

export function MetricsCards() {

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 h-full">
      <div className="col-span-1 flex flex-col h-full">
        <div className="flex flex-grow  mb-4">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 w-full">
            <Card className="bg-card flex-grow" >
              <CardContent className="p-6 flex flex-col">
                <div className="space-y-2 flex-grow">
                  <p className="text-sm text-muted-foreground mb-11">
                    Active Users
                  </p>
                  <h3 className="text-3xl font-bold">
                    {data.metrics.active_users.current}
                    <span className="text-base font-normal text-muted-foreground">
                      /{data.metrics.active_users.total}
                    </span>
                  </h3>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card flex-grow" >
              <CardContent className="p-6 flex flex-col">
                <div className="space-y-2 flex-grow">
                  <p className="text-sm text-muted-foreground mb-11">
                    Question Answered
                  </p>
                  <h3 className="text-3xl font-bold">
                    {data.metrics.questions_answered.toLocaleString()}
                  </h3>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card flex-grow" >
              <CardContent className="p-6 flex flex-col">
                <div className="space-y-2 flex-grow">
                  <p className="text-sm text-muted-foreground mb-11">
                    Av. Session Length
                  </p>

                  <h3 className="text-3xl font-bold">
                    {Math.floor(data.metrics.average_session_length_seconds / 60)}m {data.metrics.average_session_length_seconds % 60}s
                  </h3>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

        <div className="flex flex-grow  mt-4">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 w-full">
            <Card className="bg-card flex-grow">
              <CardContent className="p-6 flex flex-col">
                <div className="space-y-2 flex-grow">
                  <p className="text-sm text-muted-foreground">Starting Knowledge</p>
                  <h3 className="text-3xl font-bold">{`${data.metrics.starting_knowledge_percentage}%`}</h3>
                  <div className="h-[40px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={sparklineData}>
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#2563eb"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card flex-grow">
              <CardContent className="p-6 flex flex-col">
                <div className="space-y-2 flex-grow">
                  <p className="text-sm text-muted-foreground">Current Knowledge</p>
                  <h3 className="text-3xl font-bold">{`${data.metrics.current_knowledge_percentage}%`}</h3>

                  <div className="h-[40px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={sparklineData}>
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#2563eb"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card flex-grow">
              <CardContent className="p-6 flex flex-col">
                <div className="space-y-2 flex-grow">
                  <p className="text-sm text-muted-foreground">Knowledge Gain</p>
                  <h3 className="text-3xl font-bold">+34%</h3>
                  <div className="h-[40px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={sparklineData}>
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#2563eb"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>


      <div className="col-span-1 h-full">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
            <CardTitle className="text-base font-normal">Activity</CardTitle>
            <Select defaultValue="month">
              <SelectTrigger className="w-[110px] text-base">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="month">Month</SelectItem>
                <SelectItem value="week">Week</SelectItem>
                <SelectItem value="year">Year</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data.activity.monthly}

                >
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#666' }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#666' }}
                    dx={-10}
                    domain={[0, 'dataMax + 100']}
                    ticks={[0, 200, 400, 600, 800]}
                  />
                  <Bar
                    dataKey="value"
                    fill="rgb(59, 130, 246)"
                    radius={[4, 4, 4, 4]}
                    barSize={30}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
