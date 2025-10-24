import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

interface AssessmentCardProps {
  title: string;
  subject: string;
  dueDate: string;
  duration: string;
  status: "upcoming" | "in-progress" | "completed";
  onStart?: () => void;
  onView?: () => void;
}

const statusConfig = {
  upcoming: { label: "Upcoming", variant: "secondary" as const },
  "in-progress": { label: "In Progress", variant: "default" as const },
  completed: { label: "Completed", variant: "outline" as const },
};

export function AssessmentCard({ title, subject, dueDate, duration, status, onStart, onView }: AssessmentCardProps) {
  const config = statusConfig[status];

  return (
    <Card data-testid={`card-assessment-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-1" data-testid={`text-assessment-title-${title.toLowerCase().replace(/\s+/g, "-")}`}>
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{subject}</p>
          </div>
          <Badge variant={config.variant}>{config.label}</Badge>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Due: {dueDate}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Duration: {duration}</span>
          </div>
        </div>
        {status === "upcoming" && (
          <Button 
            className="w-full" 
            onClick={onStart}
            data-testid={`button-start-assessment-${title.toLowerCase().replace(/\s+/g, "-")}`}
          >
            Start Assessment
          </Button>
        )}
        {status === "completed" && (
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={onView}
            data-testid={`button-view-results-${title.toLowerCase().replace(/\s+/g, "-")}`}
          >
            View Results
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
