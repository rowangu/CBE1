import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, MessageSquare } from "lucide-react";

export default function Children() {
  //todo: remove mock functionality
  const children = [
    {
      name: "Emma Thompson",
      grade: "Grade 10A",
      overallProgress: 85,
      attendance: 92,
      competencies: { excelling: 12, achieving: 15, developing: 3 },
      recentActivity: "Submitted Math Assignment",
      timestamp: "2 hours ago",
    },
    {
      name: "James Thompson",
      grade: "Grade 8B",
      overallProgress: 78,
      attendance: 88,
      competencies: { excelling: 8, achieving: 18, developing: 6 },
      recentActivity: "Completed Science Quiz",
      timestamp: "1 day ago",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">My Children</h1>
        <p className="text-muted-foreground">Overview of your children's progress and activities</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {children.map((child) => (
          <Card key={child.name}>
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="bg-primary/10 text-primary text-xl font-semibold">
                    {child.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="mb-1">{child.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{child.grade}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Overall Progress</p>
                  <p className="text-2xl font-bold text-green-600">{child.overallProgress}%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Attendance</p>
                  <p className="text-2xl font-bold text-blue-600">{child.attendance}%</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Competency Distribution</p>
                <div className="flex gap-2">
                  <Badge variant="outline" className="bg-green-50 dark:bg-green-900/20">
                    Ex: {child.competencies.excelling}
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/20">
                    A: {child.competencies.achieving}
                  </Badge>
                  <Badge variant="outline" className="bg-yellow-50 dark:bg-yellow-900/20">
                    D: {child.competencies.developing}
                  </Badge>
                </div>
              </div>

              <div className="pt-2 border-t">
                <p className="text-sm font-medium">Recent Activity</p>
                <p className="text-sm text-muted-foreground">{child.recentActivity}</p>
                <p className="text-xs text-muted-foreground mt-1">{child.timestamp}</p>
              </div>

              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  data-testid={`button-view-${child.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Full Report
                </Button>
                <Button 
                  variant="outline"
                  data-testid={`button-message-${child.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
