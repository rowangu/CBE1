import { CompetencyProgress } from "@/components/CompetencyProgress";
import { ProgressChart } from "@/components/ProgressChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Progress() {
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
    {
      name: "Creative Expression",
      level: "A" as const,
      progress: 85,
      subject: "Arts",
    },
    {
      name: "Historical Analysis",
      level: "A" as const,
      progress: 80,
      subject: "History",
    },
    {
      name: "Problem Solving",
      level: "Ex" as const,
      progress: 88,
      subject: "Mathematics",
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

  const subjectScores = [
    { subject: "Mathematics", score: 90, level: "Ex" as const },
    { subject: "English", score: 78, level: "A" as const },
    { subject: "Science", score: 65, level: "D" as const },
    { subject: "History", score: 80, level: "A" as const },
    { subject: "Arts", score: 85, level: "A" as const },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">My Progress</h1>
        <p className="text-muted-foreground">Track your competency development across all subjects</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CompetencyProgress competencies={competencies} />
        <ProgressChart title="Overall Progress Trend" data={progressData} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Subject Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {subjectScores.map((subject) => (
              <div
                key={subject.subject}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
                data-testid={`subject-${subject.subject.toLowerCase()}`}
              >
                <div className="flex-1">
                  <h4 className="font-semibold">{subject.subject}</h4>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="secondary">{subject.level}</Badge>
                  <div className="text-right">
                    <p className={`text-2xl font-bold ${
                      subject.score >= 80 ? "text-green-600" : 
                      subject.score >= 60 ? "text-blue-600" : "text-yellow-600"
                    }`}>
                      {subject.score}%
                    </p>
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
