import { AssessmentCard } from "@/components/AssessmentCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Assessments() {
  //todo: remove mock functionality
  const upcomingAssessments = [
    {
      title: "Unit 3 Math Test",
      subject: "Mathematics",
      dueDate: "Oct 28, 2025",
      duration: "60 minutes",
      status: "upcoming" as const,
    },
    {
      title: "English Literature Essay",
      subject: "English",
      dueDate: "Oct 30, 2025",
      duration: "120 minutes",
      status: "upcoming" as const,
    },
    {
      title: "Physics Lab Practical",
      subject: "Physics",
      dueDate: "Nov 2, 2025",
      duration: "90 minutes",
      status: "upcoming" as const,
    },
  ];

  const inProgressAssessments = [
    {
      title: "Science Lab Report",
      subject: "Biology",
      dueDate: "Oct 25, 2025",
      duration: "90 minutes",
      status: "in-progress" as const,
    },
    {
      title: "History Research Project",
      subject: "History",
      dueDate: "Oct 27, 2025",
      duration: "180 minutes",
      status: "in-progress" as const,
    },
  ];

  const completedAssessments = [
    {
      title: "English Literature Quiz",
      subject: "English",
      dueDate: "Oct 20, 2025",
      duration: "45 minutes",
      status: "completed" as const,
    },
    {
      title: "Math Unit 2 Test",
      subject: "Mathematics",
      dueDate: "Oct 15, 2025",
      duration: "60 minutes",
      status: "completed" as const,
    },
    {
      title: "Chemistry Quiz",
      subject: "Chemistry",
      dueDate: "Oct 12, 2025",
      duration: "30 minutes",
      status: "completed" as const,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">Assessments</h1>
        <p className="text-muted-foreground">Manage your tests, quizzes, and assignments</p>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList>
          <TabsTrigger value="upcoming" data-testid="tab-upcoming">
            Upcoming ({upcomingAssessments.length})
          </TabsTrigger>
          <TabsTrigger value="in-progress" data-testid="tab-in-progress">
            In Progress ({inProgressAssessments.length})
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
                onStart={() => console.log('Start:', assessment.title)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="in-progress" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inProgressAssessments.map((assessment, index) => (
              <AssessmentCard key={index} {...assessment} />
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
