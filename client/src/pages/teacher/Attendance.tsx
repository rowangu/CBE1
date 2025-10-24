import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function Attendance() {
  //todo: remove mock functionality
  const [selectedClass, setSelectedClass] = useState("Grade 10A");
  const [selectedDate, setSelectedDate] = useState("Today");

  const attendanceRecords = [
    { name: "Alice Johnson", status: "present" as const, arrivalTime: "8:00 AM" },
    { name: "Bob Smith", status: "present" as const, arrivalTime: "8:05 AM" },
    { name: "Carol Williams", status: "absent" as const, arrivalTime: "-" },
    { name: "David Chen", status: "present" as const, arrivalTime: "7:55 AM" },
    { name: "Emily Rodriguez", status: "present" as const, arrivalTime: "8:02 AM" },
    { name: "Frank Miller", status: "late" as const, arrivalTime: "8:30 AM" },
  ];

  const statusConfig = {
    present: { label: "Present", variant: "outline" as const, color: "text-green-600" },
    absent: { label: "Absent", variant: "destructive" as const, color: "text-red-600" },
    late: { label: "Late", variant: "secondary" as const, color: "text-yellow-600" },
  };

  const presentCount = attendanceRecords.filter(r => r.status === "present").length;
  const absentCount = attendanceRecords.filter(r => r.status === "absent").length;
  const lateCount = attendanceRecords.filter(r => r.status === "late").length;
  const attendanceRate = Math.round((presentCount / attendanceRecords.length) * 100);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">Attendance</h1>
          <p className="text-muted-foreground">Track and manage student attendance</p>
        </div>
        <Button data-testid="button-take-attendance">
          <Calendar className="h-4 w-4 mr-2" />
          Take Attendance
        </Button>
      </div>

      <div className="flex items-center gap-4">
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
        <Select value={selectedDate} onValueChange={setSelectedDate}>
          <SelectTrigger className="w-48" data-testid="select-date">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Today">Today</SelectItem>
            <SelectItem value="Yesterday">Yesterday</SelectItem>
            <SelectItem value="This Week">This Week</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{attendanceRecords.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Present</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{presentCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Absent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{absentCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{attendanceRate}%</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Today's Attendance - {selectedClass}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {attendanceRecords.map((record) => {
              const config = statusConfig[record.status];
              return (
                <div
                  key={record.name}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
                  data-testid={`attendance-${record.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="flex-1">
                    <h4 className="font-semibold">{record.name}</h4>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground w-24">{record.arrivalTime}</span>
                    <Badge variant={config.variant} className="w-20 justify-center">
                      {config.label}
                    </Badge>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
