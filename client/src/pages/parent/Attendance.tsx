import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  const [selectedChild, setSelectedChild] = useState("Emma Thompson");

  const attendanceStats = {
    totalDays: 120,
    presentDays: 110,
    absentDays: 6,
    lateDays: 4,
    attendanceRate: 92,
  };

  const recentAttendance = [
    { date: "Oct 24, 2025", status: "present" as const, arrivalTime: "8:00 AM" },
    { date: "Oct 23, 2025", status: "present" as const, arrivalTime: "7:58 AM" },
    { date: "Oct 22, 2025", status: "late" as const, arrivalTime: "8:25 AM" },
    { date: "Oct 21, 2025", status: "present" as const, arrivalTime: "8:02 AM" },
    { date: "Oct 20, 2025", status: "absent" as const, arrivalTime: "-" },
    { date: "Oct 19, 2025", status: "present" as const, arrivalTime: "7:55 AM" },
  ];

  const statusConfig = {
    present: { label: "Present", variant: "outline" as const, color: "text-green-600" },
    absent: { label: "Absent", variant: "destructive" as const, color: "text-red-600" },
    late: { label: "Late", variant: "secondary" as const, color: "text-yellow-600" },
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">Attendance</h1>
          <p className="text-muted-foreground">Track your child's school attendance</p>
        </div>
        <Select value={selectedChild} onValueChange={setSelectedChild}>
          <SelectTrigger className="w-48" data-testid="select-child">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Emma Thompson">Emma Thompson</SelectItem>
            <SelectItem value="James Thompson">James Thompson</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Days</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{attendanceStats.totalDays}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Present</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{attendanceStats.presentDays}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Absent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{attendanceStats.absentDays}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Late</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{attendanceStats.lateDays}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{attendanceStats.attendanceRate}%</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Recent Attendance History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {recentAttendance.map((record) => {
              const config = statusConfig[record.status];
              return (
                <div
                  key={record.date}
                  className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
                  data-testid={`attendance-${record.date.replace(/,?\s+/g, "-").toLowerCase()}`}
                >
                  <div className="flex-1">
                    <h4 className="font-semibold">{record.date}</h4>
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
