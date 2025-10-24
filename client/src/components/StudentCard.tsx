import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface StudentCardProps {
  name: string;
  grade: string;
  competencyScore: number;
  attendance: number;
  onView?: () => void;
}

export function StudentCard({ name, grade, competencyScore, attendance, onView }: StudentCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-blue-600";
    if (score >= 40) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <Card className="hover-elevate" data-testid={`card-student-${name.toLowerCase().replace(/\s+/g, "-")}`}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-12 w-12">
            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg truncate" data-testid={`text-student-name-${name.toLowerCase().replace(/\s+/g, "-")}`}>
              {name}
            </h3>
            <p className="text-sm text-muted-foreground">{grade}</p>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <div>
                <p className="text-xs text-muted-foreground">Competency</p>
                <p className={`text-sm font-semibold ${getScoreColor(competencyScore)}`}>
                  {competencyScore}%
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Attendance</p>
                <p className={`text-sm font-semibold ${getScoreColor(attendance)}`}>
                  {attendance}%
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="w-full mt-3"
              onClick={onView}
              data-testid={`button-view-student-${name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
