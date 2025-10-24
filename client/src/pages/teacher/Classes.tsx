import { StudentCard } from "@/components/StudentCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus } from "lucide-react";
import { useState } from "react";

export default function Classes() {
  //todo: remove mock functionality
  const [searchQuery, setSearchQuery] = useState("");

  const classes = [
    {
      name: "Grade 10A",
      subject: "Mathematics",
      students: 32,
      avgCompetency: 85,
    },
    {
      name: "Grade 10B",
      subject: "Mathematics",
      students: 30,
      avgCompetency: 78,
    },
    {
      name: "Grade 10C",
      subject: "Mathematics",
      students: 28,
      avgCompetency: 82,
    },
  ];

  const grade10AStudents = [
    { name: "Alice Johnson", grade: "Grade 10A", competencyScore: 92, attendance: 95 },
    { name: "Bob Smith", grade: "Grade 10A", competencyScore: 78, attendance: 88 },
    { name: "Carol Williams", grade: "Grade 10A", competencyScore: 85, attendance: 92 },
    { name: "David Chen", grade: "Grade 10A", competencyScore: 88, attendance: 90 },
    { name: "Emily Rodriguez", grade: "Grade 10A", competencyScore: 91, attendance: 96 },
    { name: "Frank Miller", grade: "Grade 10A", competencyScore: 76, attendance: 85 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">My Classes</h1>
          <p className="text-muted-foreground">Manage your classes and students</p>
        </div>
        <Button data-testid="button-add-class">
          <Plus className="h-4 w-4 mr-2" />
          Add Class
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {classes.map((classInfo) => (
          <Card key={classInfo.name} className="hover-elevate">
            <CardHeader>
              <CardTitle>{classInfo.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{classInfo.subject}</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Students</span>
                <span className="font-semibold">{classInfo.students}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Avg. Competency</span>
                <span className={`font-semibold ${
                  classInfo.avgCompetency >= 80 ? "text-green-600" : "text-blue-600"
                }`}>
                  {classInfo.avgCompetency}%
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Grade 10A Students</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search students..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="input-search-students"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {grade10AStudents.map((student) => (
              <StudentCard
                key={student.name}
                {...student}
                onView={() => console.log('View:', student.name)}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
