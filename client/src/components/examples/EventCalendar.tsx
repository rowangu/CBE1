import { EventCalendar } from '../EventCalendar';

export default function EventCalendarExample() {
  //todo: remove mock functionality
  const mockEvents = [
    {
      id: "1",
      title: "Unit 3 Math Test",
      date: "Oct 28, 2025",
      time: "9:00 AM",
      type: "assessment" as const,
    },
    {
      id: "2",
      title: "Parent-Teacher Meeting",
      date: "Oct 30, 2025",
      time: "2:00 PM",
      type: "meeting" as const,
    },
    {
      id: "3",
      title: "School Science Fair",
      date: "Nov 5, 2025",
      time: "10:00 AM",
      type: "event" as const,
    },
  ];

  return (
    <div className="p-6 max-w-md">
      <EventCalendar events={mockEvents} />
    </div>
  );
}
