import { StatCard } from "@/components/StatCard";
import { CompetencyProgress } from "@/components/CompetencyProgress";
import { PortfolioCard } from "@/components/PortfolioCard";
import { AssessmentCard } from "@/components/AssessmentCard";
import { ProgressChart } from "@/components/ProgressChart";
import { GraduationCap, BookOpen, TrendingUp, Award } from "lucide-react";

export default function StudentDashboard() {
  //todo: remove mock functionality
  const competencies = [
    {
      name: "Critical Thinking",
      level: "Ex" as const,
      progress: 92,
      subject: "Mathematics",
    },
    {
      name: "Written Communication",
      level: "A" as const,
      progress: 78,
      subject: "English",
    },
    {
      name: "Scientific Method",
      level: "D" as const,
      progress: 65,
      subject: "Science",
    },
  ];

  const progressData = [
    { month: "Jan", score: 65 },
    { month: "Feb", score: 68 },
    { month: "Mar", score: 72 },
    { month: "Apr", score: 75 },
    { month: "May", score: 78 },
    { month: "Jun", score: 82 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">My Dashboard</h1>
        <p className="text-muted-foreground">Track your progress and achievements</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Overall Progress"
          value="82%"
          icon={TrendingUp}
          trend={{ value: 5, isPositive: true }}
        />
        <StatCard
          title="Competencies"
          value="24/30"
          icon={GraduationCap}
          subtitle="Achieving or above"
        />
        <StatCard
          title="Portfolio Items"
          value="15"
          icon={BookOpen}
          trend={{ value: 3, isPositive: true }}
        />
        <StatCard
          title="Achievements"
          value="8"
          icon={Award}
          subtitle="This semester"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CompetencyProgress competencies={competencies} />
        <ProgressChart title="My Progress Over Time" data={progressData} />
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Upcoming Assessments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AssessmentCard
            title="Unit 3 Math Test"
            subject="Mathematics"
            dueDate="Oct 28, 2025"
            duration="60 minutes"
            status="upcoming"
            onStart={() => console.log('Start assessment')}
          />
          <AssessmentCard
            title="Science Lab Report"
            subject="Biology"
            dueDate="Oct 25, 2025"
            duration="90 minutes"
            status="in-progress"
          />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Recent Portfolio Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <PortfolioCard
            title="Science Project: Ecosystem Model"
            fileType="image"
            competency="Science Research"
            uploadDate="Oct 15, 2025"
            onView={() => console.log('View portfolio item')}
          />
          <PortfolioCard
            title="Math Problem Solving Video"
            fileType="video"
            competency="Mathematical Thinking"
            uploadDate="Oct 20, 2025"
            onView={() => console.log('View portfolio item')}
          />
        </div>
      </div>
    </div>
  );
}
