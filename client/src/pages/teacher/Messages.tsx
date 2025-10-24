import { MessageThread } from "@/components/MessageThread";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function Messages() {
  //todo: remove mock functionality
  const [selectedThread, setSelectedThread] = useState<string>("Parent - Alice Johnson");

  const threads = [
    {
      name: "Parent - Alice Johnson",
      role: "Parent",
      lastMessage: "Thank you for the update on Alice's progress!",
      timestamp: "1 hour ago",
      unread: 1,
    },
    {
      name: "Parent - Bob Smith",
      role: "Parent",
      lastMessage: "Can we schedule a meeting to discuss Bob's math?",
      timestamp: "3 hours ago",
      unread: 2,
    },
    {
      name: "Dr. Wilson",
      role: "Principal",
      lastMessage: "Please submit your lesson plans by Friday",
      timestamp: "1 day ago",
      unread: 0,
    },
    {
      name: "Ms. Davis",
      role: "Colleague",
      lastMessage: "Great job on the science fair!",
      timestamp: "2 days ago",
      unread: 0,
    },
  ];

  const messages = {
    "Parent - Alice Johnson": [
      {
        id: "1",
        sender: "Parent - Alice Johnson",
        content: "Hello Ms. Anderson, how is Alice doing in mathematics?",
        timestamp: "2:30 PM",
        isSent: false,
      },
      {
        id: "2",
        sender: "You",
        content: "Hello! Alice is doing excellently. Her competency level has improved to 'Achieving'.",
        timestamp: "2:45 PM",
        isSent: true,
      },
      {
        id: "3",
        sender: "Parent - Alice Johnson",
        content: "Thank you for the update on Alice's progress!",
        timestamp: "3:00 PM",
        isSent: false,
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">Messages</h1>
        <p className="text-muted-foreground">Communicate with parents, students, and colleagues</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardContent className="p-4 space-y-2">
            {threads.map((thread) => (
              <div
                key={thread.name}
                className={`p-4 rounded-lg cursor-pointer hover-elevate ${
                  selectedThread === thread.name ? "bg-muted" : ""
                }`}
                onClick={() => setSelectedThread(thread.name)}
                data-testid={`thread-${thread.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="flex items-start gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary text-sm">
                      {thread.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-sm truncate">{thread.name}</h4>
                      {thread.unread > 0 && (
                        <span className="h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center flex-shrink-0">
                          {thread.unread}
                        </span>
                      )}
                    </div>
                    <Badge variant="secondary" className="text-xs mb-1">{thread.role}</Badge>
                    <p className="text-sm truncate">{thread.lastMessage}</p>
                    <p className="text-xs text-muted-foreground mt-1">{thread.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="lg:col-span-2">
          <MessageThread
            recipient={selectedThread}
            messages={messages[selectedThread as keyof typeof messages] || []}
          />
        </div>
      </div>
    </div>
  );
}
