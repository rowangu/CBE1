import { CompetencyHeatmap } from "@/components/CompetencyHeatmap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function Competencies() {
  //todo: remove mock functionality
  const [selectedClass, setSelectedClass] = useState("Grade 10A");

  const competencyNames = ["Reading", "Writing", "Math", "Science", "Arts", "Critical Thinking"];
  
  const heatmapData = [
    {
      studentName: "Alice Johnson",
      competencies: [
        { name: "Reading", level: "Ex" as const },
        { name: "Writing", level: "A" as const },
        { name: "Math", level: "A" as const },
        { name: "Science", level: "D" as const },
        { name: "Arts", level: "Ex" as const },
        { name: "Critical Thinking", level: "A" as const },
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
        { name: "Critical Thinking", level: "A" as const },
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
        { name: "Critical Thinking", level: "D" as const },
      ],
    },
    {
      studentName: "David Chen",
      competencies: [
        { name: "Reading", level: "A" as const },
        { name: "Writing", level: "A" as const },
        { name: "Math", level: "Ex" as const },
        { name: "Science", level: "Ex" as const },
        { name: "Arts", level: "A" as const },
        { name: "Critical Thinking", level: "Ex" as const },
      ],
    },
  ];

  const competencyStats = [
    { level: "Excelling", count: 12, percentage: 38 },
    { level: "Achieving", count: 15, percentage: 47 },
    { level: "Developing", count: 4, percentage: 13 },
    { level: "Emerging", count: 1, percentage: 2 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">Competency Tracking</h1>
          <p className="text-muted-foreground">Monitor student competency levels across all subjects</p>
        </div>
        <Button data-testid="button-add-competency">
          <Plus className="h-4 w-4 mr-2" />
          Add Competency
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {competencyStats.map((stat) => (
          <Card key={stat.level}>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">{stat.level}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.count}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.percentage}% of class</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <CompetencyHeatmap data={heatmapData} competencyNames={competencyNames} />
    </div>
  );
}
