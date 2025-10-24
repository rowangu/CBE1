import { CompetencyProgress } from "@/components/CompetencyProgress";
import { ProgressChart } from "@/components/ProgressChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function Performance() {
  //todo: remove mock functionality
  const [selectedChild, setSelectedChild] = useState("Emma Thompson");

  const competencies = [
    { name: "Critical Thinking", level: "A" as const, progress: 85, subject: "Mathematics" },
    { name: "Written Communication", level: "Ex" as const, progress: 92, subject: "English" },
    { name: "Scientific Method", level: "A" as const, progress: 80, subject: "Science" },
    { name: "Historical Analysis", level: "A" as const, progress: 78, subject: "History" },
  ];

  const progressData = [
    { month: "Jan", score: 70 },
    { month: "Feb", score: 73 },
    { month: "Mar", score: 76 },
    { month: "Apr", score: 79 },
    { month: "May", score: 82 },
    { month: "Jun", score: 85 },
  ];

  const subjectScores = [
    { subject: "Mathematics", currentScore: 85, previousScore: 78, teacher: "Ms. Anderson" },
    { subject: "English", currentScore: 92, previousScore: 88, teacher: "Dr. Wilson" },
    { subject: "Science", currentScore: 80, previousScore: 82, teacher: "Mr. Johnson" },
    { subject: "History", currentScore: 78, previousScore: 75, teacher: "Ms. Davis" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">Performance</h1>
          <p className="text-muted-foreground">Detailed view of your child's academic progress</p>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CompetencyProgress competencies={competencies} />
        <ProgressChart title="Progress Over Time" data={progressData} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Subject Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {subjectScores.map((subject) => {
              const improvement = subject.currentScore - subject.previousScore;
              return (
                <div
                  key={subject.subject}
                  className="p-4 rounded-lg bg-muted/50"
                  data-testid={`subject-${subject.subject.toLowerCase()}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold">{subject.subject}</h4>
                      <p className="text-sm text-muted-foreground">Teacher: {subject.teacher}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">{subject.currentScore}%</p>
                      <p className={`text-sm ${improvement >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {improvement >= 0 ? '+' : ''}{improvement}% from last term
                      </p>
                    </div>
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
