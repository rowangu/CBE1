import { ProgressChart } from "@/components/ProgressChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function Analytics() {
  //todo: remove mock functionality
  const [selectedClass, setSelectedClass] = useState("Grade 10A");

  const performanceData = [
    { month: "Jan", score: 72 },
    { month: "Feb", score: 74 },
    { month: "Mar", score: 76 },
    { month: "Apr", score: 78 },
    { month: "May", score: 81 },
    { month: "Jun", score: 85 },
  ];

  const attendanceData = [
    { month: "Jan", score: 88 },
    { month: "Feb", score: 90 },
    { month: "Mar", score: 89 },
    { month: "Apr", score: 92 },
    { month: "May", score: 91 },
    { month: "Jun", score: 93 },
  ];

  const topPerformers = [
    { name: "Alice Johnson", score: 95, improvement: 8 },
    { name: "David Chen", score: 92, improvement: 12 },
    { name: "Emily Rodriguez", score: 91, improvement: 6 },
  ];

  const needsAttention = [
    { name: "Carol Williams", score: 58, decline: -5 },
    { name: "Frank Miller", score: 62, decline: -3 },
  ];

  const subjectAnalysis = [
    { subject: "Algebra", avgScore: 85, studentsExcelling: 12, studentsStruggling: 2 },
    { subject: "Geometry", avgScore: 78, studentsExcelling: 8, studentsStruggling: 5 },
    { subject: "Statistics", avgScore: 82, studentsExcelling: 10, studentsStruggling: 3 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">Analytics</h1>
          <p className="text-muted-foreground">Detailed insights into class performance and trends</p>
        </div>
        <Select value={selectedClass} onValueChange={setSelectedClass}>
          <SelectTrigger className="w-48" data-testid="select-class">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Grade 10A">Grade 10A</SelectItem>
            <SelectItem value="Grade 10B">Grade 10B</SelectItem>
            <SelectItem value="Grade 10C">Grade 10C</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProgressChart title="Class Performance Trend" data={performanceData} />
        <ProgressChart title="Attendance Trend" data={attendanceData} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Performers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {topPerformers.map((student) => (
              <div
                key={student.name}
                className="flex items-center justify-between p-3 rounded-lg bg-green-50 dark:bg-green-900/20"
                data-testid={`top-performer-${student.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <span className="font-semibold">{student.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-green-600 font-bold">{student.score}%</span>
                  <Badge variant="outline" className="text-green-600">+{student.improvement}%</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Needs Attention</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {needsAttention.map((student) => (
              <div
                key={student.name}
                className="flex items-center justify-between p-3 rounded-lg bg-red-50 dark:bg-red-900/20"
                data-testid={`needs-attention-${student.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <span className="font-semibold">{student.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-red-600 font-bold">{student.score}%</span>
                  <Badge variant="destructive">{student.decline}%</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Subject Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {subjectAnalysis.map((subject) => (
              <div
                key={subject.subject}
                className="p-4 rounded-lg bg-muted/50"
                data-testid={`subject-${subject.subject.toLowerCase()}`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-lg">{subject.subject}</h4>
                  <span className="text-2xl font-bold text-blue-600">{subject.avgScore}%</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Excelling</p>
                    <p className="text-lg font-semibold text-green-600">{subject.studentsExcelling} students</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Struggling</p>
                    <p className="text-lg font-semibold text-red-600">{subject.studentsStruggling} students</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
