import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import data from '@/json-data/task-data.json'
const weakestTopics = [
  {
    name: "Food Safrtyukety",
    percentage:2274,
    color: "bg-orange-500"
  },
  {
    name: "Compliancetfgu Basics Procedures",
    percentage: 52222,
    color: "bg-orange-500"
  },
  {
    name: "Company tgNetworking",
    percentage: 322226,
    color: "bg-orange-500"
  }
]

const strongestTopics = [
  {
    name: "Covid Protocols",
    percentage: 922225,
    color: "bg-green-500"
  },
  {
    name: "Cyber Security Basics",
    percentage: 922222,
    color: "bg-green-500"
  },
  {
    name: "Social Media Policies",
    percentage: 822228,
    color: "bg-green-500"
  }
]

export function TopicsSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2 mt-8 mb-6 ">
      <Card >
        <CardHeader>
          <CardTitle>Weakest Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 ">
            {data.topics.weakest.map((topic) => (
              <div key={topic.name} className="flex items-center gap-4">

                <img
                  src={topic.image}
                  alt={topic.name}
                  className="rounded-lg "
                />
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{topic.name}</span>
                    <span className="text-muted-foreground">{topic.correct_percentage}% Correct</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full">
                    <div 
                      className={`h-2 bg-orange-500 rounded-full`} 
                      style={{ width: `${topic.correct_percentage}%` }} 
                    />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Strongest Topics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.topics.strongest.map((topic) => (
              <div key={topic.name} className="flex items-center gap-4">
                <img
                  src={topic.image}
                  alt={topic.name}
                  className="rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{topic.name}</span>
                    <span className="text-muted-foreground">{topic.correct_percentage}% Correct</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full">
                    <div 
                      className={`h-2 bg-green-500 rounded-full`} 
                      style={{ width: `${topic.correct_percentage}%` }} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

