import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, X, AlertCircle, CheckCircle, Info } from "lucide-react";
import { useState } from "react";

type NotificationType = "info" | "success" | "alert";

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
}

interface NotificationListProps {
  notifications: Notification[];
}

const typeConfig = {
  info: { icon: Info, color: "text-blue-600" },
  success: { icon: CheckCircle, color: "text-green-600" },
  alert: { icon: AlertCircle, color: "text-red-600" },
};

export function NotificationList({ notifications: initialNotifications }: NotificationListProps) {
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleDismiss = (id: string) => {
    setNotifications(notifications.filter((n) => n.id !== id));
    console.log('Dismissed notification:', id);
  };

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  return (
    <Card data-testid="card-notifications">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notifications
          </CardTitle>
          <span className="text-sm text-muted-foreground">
            {notifications.filter((n) => !n.isRead).length} unread
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {notifications.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-8">
            No notifications
          </p>
        ) : (
          notifications.map((notification) => {
            const config = typeConfig[notification.type];
            const Icon = config.icon;

            return (
              <div
                key={notification.id}
                className={`flex gap-3 p-3 rounded-lg hover-elevate ${
                  !notification.isRead ? "border-l-4 border-l-primary bg-muted/50" : ""
                }`}
                onClick={() => markAsRead(notification.id)}
                data-testid={`notification-${notification.id}`}
              >
                <div className={`h-10 w-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`h-5 w-5 ${config.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm">{notification.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {notification.message}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {notification.timestamp}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 flex-shrink-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDismiss(notification.id);
                  }}
                  data-testid={`button-dismiss-${notification.id}`}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            );
          })
        )}
      </CardContent>
    </Card>
  );
}
