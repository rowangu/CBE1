import { StatCard } from "@/components/StatCard";
import { CompetencyProgress } from "@/components/CompetencyProgress";
import { FeeCard } from "@/components/FeeCard";
import { EventCalendar } from "@/components/EventCalendar";
import { MessageThread } from "@/components/MessageThread";
import { GraduationCap, Calendar, CreditCard, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function ParentDashboard() {
  //todo: remove mock functionality
  const competencies = [
    {
      name: "Critical Thinking",
      level: "A" as const,
      progress: 85,
      subject: "Mathematics",
    },
    {
      name: "Written Communication",
      level: "Ex" as const,
      progress: 92,
      subject: "English",
    },
    {
      name: "Scientific Method",
      level: "A" as const,
      progress: 80,
      subject: "Science",
    },
  ];

  const events = [
    {
      id: "1",
      title: "Parent-Teacher Meeting",
      date: "Oct 30, 2025",
      time: "2:00 PM",
      type: "meeting" as const,
    },
    {
      id: "2",
      title: "School Science Fair",
      date: "Nov 5, 2025",
      time: "10:00 AM",
      type: "event" as const,
    },
  ];

  const messages = [
    {
      id: "1",
      sender: "Ms. Anderson",
      content: "Emma's progress in mathematics has been excellent!",
      timestamp: "10:30 AM",
      isSent: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">Parent Dashboard</h1>
        <p className="text-muted-foreground">Monitor your child's progress and school activities</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Children</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-primary/10 text-primary text-xl font-semibold">
                ET
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">Emma Thompson</h3>
              <p className="text-sm text-muted-foreground">Grade 10A</p>
              <div className="flex gap-4 mt-2">
                <div>
                  <p className="text-xs text-muted-foreground">Overall Progress</p>
                  <p className="text-sm font-semibold text-green-600">85%</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Attendance</p>
                  <p className="text-sm font-semibold text-green-600">92%</p>
                </div>
              </div>
            </div>
            <Button variant="outline" data-testid="button-view-full-report">
              View Full Report
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Overall Progress"
          value="85%"
          icon={TrendingUp}
          trend={{ value: 6, isPositive: true }}
        />
        <StatCard
          title="Competencies"
          value="22/30"
          icon={GraduationCap}
          subtitle="Achieving or above"
        />
        <StatCard
          title="Attendance"
          value="92%"
          icon={Calendar}
          trend={{ value: 2, isPositive: true }}
        />
        <StatCard
          title="Fee Balance"
          value="$1,000"
          icon={CreditCard}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CompetencyProgress competencies={competencies} />
        <EventCalendar events={events} />
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Fee Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FeeCard
            term="Term 1 2025"
            totalAmount={2500}
            paidAmount={2500}
            dueDate="Jan 15, 2025"
            status="paid"
            onDownload={() => console.log('Download receipt')}
          />
          <FeeCard
            term="Term 2 2025"
            totalAmount={2500}
            paidAmount={1500}
            dueDate="Apr 15, 2025"
            status="partial"
            onPay={() => console.log('Pay now')}
            onDownload={() => console.log('Download receipt')}
          />
        </div>
      </div>

      <div className="max-w-3xl">
        <MessageThread recipient="Ms. Anderson (Math Teacher)" messages={messages} />
      </div>
    </div>
  );
}
