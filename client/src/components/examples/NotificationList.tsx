import { NotificationList } from '../NotificationList';

export default function NotificationListExample() {
  //todo: remove mock functionality
  const mockNotifications = [
    {
      id: "1",
      type: "alert" as const,
      title: "Assessment Due Soon",
      message: "Unit 3 Math Test is due in 2 days",
      timestamp: "2 hours ago",
      isRead: false,
    },
    {
      id: "2",
      type: "success" as const,
      title: "Competency Updated",
      message: "Your Science competency level has been upgraded to 'Achieving'",
      timestamp: "5 hours ago",
      isRead: false,
    },
    {
      id: "3",
      type: "info" as const,
      title: "New Message",
      message: "Ms. Anderson sent you a message about your project",
      timestamp: "1 day ago",
      isRead: true,
    },
  ];

  return (
    <div className="p-6 max-w-2xl">
      <NotificationList notifications={mockNotifications} />
    </div>
  );
}
