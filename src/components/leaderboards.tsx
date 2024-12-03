import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp } from 'lucide-react'

import data from "@/json-data/task-data.json"

export function Leaderboards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 mt-4">
      <Card>
        <CardHeader>
          <CardTitle>User Leaderboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.user_leaderboard.map((user) => (
              <div key={user.name} className="flex items-center gap-4">
                <img
                  src={user.image}
                  alt={user.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {user.points} Points - {user.accuracy_percentage}% Correct
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>{user.previous_accuracy_percentage}</span>
                      {user.previous_accuracy_percentage >= user.accuracy_percentage ? (
                        <ArrowUp className="h-4 w-4 text-green-500" />
                      ) : (
                        <ArrowDown className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Groups Leaderboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.groups_leaderboard.map((group) => (
              <div key={group.group_name} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">{group.group_name}</p>
                      <p className="text-sm text-muted-foreground">
                        {group.points_per_user} Points / User - {group.accuracy_percentage}% Correct
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>{group.previous_accuracy_percentage}</span>
                      {group.previous_accuracy_percentage >= group.accuracy_percentage ? (
                        <ArrowUp className="h-4 w-4 text-green-500" />
                      ) : (
                        <ArrowDown className="h-4 w-4 text-red-500" />
                      )}
                    </div>
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

