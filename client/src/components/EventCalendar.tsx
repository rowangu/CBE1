import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, Clock } from "lucide-react";

interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  type: "assessment" | "meeting" | "event";
}

interface EventCalendarProps {
  events: CalendarEvent[];
}

const typeConfig = {
  assessment: { label: "Assessment", variant: "default" as const },
  meeting: { label: "Meeting", variant: "secondary" as const },
  event: { label: "Event", variant: "outline" as const },
};

export function EventCalendar({ events }: EventCalendarProps) {
  return (
    <Card data-testid="card-event-calendar">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CalendarIcon className="h-5 w-5" />
          Upcoming Events
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {events.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-8">
            No upcoming events
          </p>
        ) : (
          events.map((event) => {
            const config = typeConfig[event.type];

            return (
              <div
                key={event.id}
                className="flex items-start gap-3 p-3 rounded-lg hover-elevate"
                data-testid={`event-${event.id}`}
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CalendarIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-semibold text-sm">{event.title}</h4>
                    <Badge variant={config.variant} className="flex-shrink-0">
                      {config.label}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{event.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {event.time}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </CardContent>
    </Card>
  );
}
