import { AssessmentCard } from "@/components/AssessmentCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";

export default function Assessments() {
  //todo: remove mock functionality
  const upcomingAssessments = [
    {
      title: "Unit 4 Math Test",
      subject: "Mathematics - Grade 10A",
      dueDate: "Nov 5, 2025",
      duration: "60 minutes",
      status: "upcoming" as const,
    },
    {
      title: "Algebra Quiz",
      subject: "Mathematics - Grade 10B",
      dueDate: "Nov 8, 2025",
      duration: "45 minutes",
      status: "upcoming" as const,
    },
  ];

  const activeAssessments = [
    {
      title: "Unit 3 Math Test",
      subject: "Mathematics - Grade 10A",
      dueDate: "Oct 28, 2025",
      duration: "60 minutes",
      status: "in-progress" as const,
    },
    {
      title: "Geometry Project",
      subject: "Mathematics - Grade 10C",
      dueDate: "Oct 30, 2025",
      duration: "120 minutes",
      status: "in-progress" as const,
    },
  ];

  const completedAssessments = [
    {
      title: "Unit 2 Math Test",
      subject: "Mathematics - Grade 10A",
      dueDate: "Oct 15, 2025",
      duration: "60 minutes",
      status: "completed" as const,
    },
    {
      title: "Trigonometry Quiz",
      subject: "Mathematics - Grade 10B",
      dueDate: "Oct 12, 2025",
      duration: "45 minutes",
      status: "completed" as const,
    },
    {
      title: "Unit 1 Math Test",
      subject: "Mathematics - Grade 10A",
      dueDate: "Oct 1, 2025",
      duration: "60 minutes",
      status: "completed" as const,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">Assessments</h1>
          <p className="text-muted-foreground">Create and manage tests, quizzes, and assignments</p>
        </div>
        <Button data-testid="button-create-assessment">
          <Plus className="h-4 w-4 mr-2" />
          Create Assessment
        </Button>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList>
          <TabsTrigger value="upcoming" data-testid="tab-upcoming">
            Upcoming ({upcomingAssessments.length})
          </TabsTrigger>
          <TabsTrigger value="active" data-testid="tab-active">
            Active ({activeAssessments.length})
          </TabsTrigger>
          <TabsTrigger value="completed" data-testid="tab-completed">
            Completed ({completedAssessments.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingAssessments.map((assessment, index) => (
              <AssessmentCard
                key={index}
                {...assessment}
                onStart={() => console.log('Publish:', assessment.title)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="active" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeAssessments.map((assessment, index) => (
              <AssessmentCard
                key={index}
                {...assessment}
                onView={() => console.log('Monitor:', assessment.title)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedAssessments.map((assessment, index) => (
              <AssessmentCard
                key={index}
                {...assessment}
                onView={() => console.log('View results:', assessment.title)}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
