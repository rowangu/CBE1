import { StatCard } from "@/components/StatCard";
import { ProgressChart } from "@/components/ProgressChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, TrendingUp, CreditCard, AlertCircle, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  //todo: remove mock functionality
  const enrollmentData = [
    { month: "Jan", score: 1180 },
    { month: "Feb", score: 1195 },
    { month: "Mar", score: 1210 },
    { month: "Apr", score: 1225 },
    { month: "May", score: 1240 },
    { month: "Jun", score: 1245 },
  ];

  const recentActivities = [
    {
      id: "1",
      title: "New Student Enrollment",
      description: "15 new students enrolled for Term 3",
      timestamp: "2 hours ago",
      status: "success" as const,
    },
    {
      id: "2",
      title: "Fee Collection Alert",
      description: "Outstanding fees: $45,000",
      timestamp: "5 hours ago",
      status: "warning" as const,
    },
    {
      id: "3",
      title: "Assessment Completion",
      description: "Unit 3 assessments completed across all grades",
      timestamp: "1 day ago",
      status: "success" as const,
    },
  ];

  const classPerformance = [
    { className: "Grade 10A", students: 32, avgCompetency: 85, teacher: "Ms. Anderson" },
    { className: "Grade 10B", students: 30, avgCompetency: 78, teacher: "Mr. Johnson" },
    { className: "Grade 10C", students: 28, avgCompetency: 82, teacher: "Dr. Smith" },
    { className: "Grade 10D", students: 31, avgCompetency: 76, teacher: "Ms. Williams" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">Administrator Dashboard</h1>
        <p className="text-muted-foreground">School-wide analytics and management overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Students"
          value="1,245"
          icon={Users}
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="Teachers"
          value="48"
          icon={GraduationCap}
          subtitle="32 classes"
        />
        <StatCard
          title="Avg. School Competency"
          value="78%"
          icon={TrendingUp}
          trend={{ value: 4, isPositive: true }}
        />
        <StatCard
          title="Monthly Revenue"
          value="$285K"
          icon={CreditCard}
          trend={{ value: 12, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProgressChart title="Student Enrollment Trend" data={enrollmentData} />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex gap-3 p-3 rounded-lg hover-elevate"
                data-testid={`activity-${activity.id}`}
              >
                <div className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  activity.status === "success" ? "bg-green-100 dark:bg-green-900/20" : "bg-yellow-100 dark:bg-yellow-900/20"
                }`}>
                  {activity.status === "success" ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-yellow-600" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm">{activity.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {activity.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {activity.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Class Performance Overview</CardTitle>
            <Button variant="outline" size="sm" data-testid="button-view-all-classes">
              View All Classes
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {classPerformance.map((classInfo) => (
              <div
                key={classInfo.className}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover-elevate"
                data-testid={`class-${classInfo.className.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="flex-1">
                  <h4 className="font-semibold">{classInfo.className}</h4>
                  <p className="text-sm text-muted-foreground">Teacher: {classInfo.teacher}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Students</p>
                    <p className="text-lg font-semibold">{classInfo.students}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Avg. Competency</p>
                    <p className={`text-lg font-semibold ${
                      classInfo.avgCompetency >= 80 ? "text-green-600" : 
                      classInfo.avgCompetency >= 70 ? "text-blue-600" : "text-yellow-600"
                    }`}>
                      {classInfo.avgCompetency}%
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" data-testid={`button-view-class-${classInfo.className.toLowerCase().replace(/\s+/g, "-")}`}>
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
