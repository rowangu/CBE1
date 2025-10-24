import { StatCard } from "@/components/StatCard";
import { CompetencyHeatmap } from "@/components/CompetencyHeatmap";
import { StudentCard } from "@/components/StudentCard";
import { NotificationList } from "@/components/NotificationList";
import { Users, GraduationCap, TrendingUp, Calendar } from "lucide-react";
import { useState } from "react";

export default function TeacherDashboard() {
  //todo: remove mock functionality
  const [selectedView, setSelectedView] = useState<string>("dashboard");

  const competencyNames = ["Reading", "Writing", "Math", "Science", "Arts"];
  const heatmapData = [
    {
      studentName: "Alice Johnson",
      competencies: [
        { name: "Reading", level: "Ex" as const },
        { name: "Writing", level: "A" as const },
        { name: "Math", level: "A" as const },
        { name: "Science", level: "D" as const },
        { name: "Arts", level: "Ex" as const },
      ],
    },
    {
      studentName: "Bob Smith",
      competencies: [
        { name: "Reading", level: "A" as const },
        { name: "Writing", level: "D" as const },
        { name: "Math", level: "Ex" as const },
        { name: "Science", level: "A" as const },
        { name: "Arts", level: "D" as const },
      ],
    },
    {
      studentName: "Carol Williams",
      competencies: [
        { name: "Reading", level: "D" as const },
        { name: "Writing", level: "E" as const },
        { name: "Math", level: "D" as const },
        { name: "Science", level: "A" as const },
        { name: "Arts", level: "A" as const },
      ],
    },
  ];

  const notifications = [
    {
      id: "1",
      type: "alert" as const,
      title: "Low Competency Alert",
      message: "3 students in Class 10A need attention in Mathematics",
      timestamp: "2 hours ago",
      isRead: false,
    },
    {
      id: "2",
      type: "info" as const,
      title: "Assessment Reminder",
      message: "Grade Unit 3 Math tests by Friday",
      timestamp: "5 hours ago",
      isRead: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">Teacher Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your classes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Students"
          value="142"
          icon={Users}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Active Classes"
          value="5"
          icon={GraduationCap}
          subtitle="Grade 10 A-E"
        />
        <StatCard
          title="Avg. Competency"
          value="76%"
          icon={TrendingUp}
          trend={{ value: 4, isPositive: true }}
        />
        <StatCard
          title="Attendance Rate"
          value="92.5%"
          icon={Calendar}
          trend={{ value: 1.5, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CompetencyHeatmap data={heatmapData} competencyNames={competencyNames} />
        </div>
        <NotificationList notifications={notifications} />
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Students Needing Attention</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <StudentCard
            name="Carol Williams"
            grade="Grade 10A"
            competencyScore={58}
            attendance={85}
            onView={() => console.log('View Carol Williams')}
          />
          <StudentCard
            name="David Chen"
            grade="Grade 10B"
            competencyScore={62}
            attendance={78}
            onView={() => console.log('View David Chen')}
          />
          <StudentCard
            name="Emily Rodriguez"
            grade="Grade 10C"
            competencyScore={65}
            attendance={88}
            onView={() => console.log('View Emily Rodriguez')}
          />
        </div>
      </div>
    </div>
  );
}
