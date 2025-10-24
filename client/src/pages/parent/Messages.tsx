import { MessageThread } from "@/components/MessageThread";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function Messages() {
  //todo: remove mock functionality
  const [selectedThread, setSelectedThread] = useState<string>("Ms. Anderson");

  const threads = [
    {
      name: "Ms. Anderson",
      role: "Math Teacher - Emma",
      lastMessage: "Emma's progress has been excellent!",
      timestamp: "2 hours ago",
      unread: 1,
    },
    {
      name: "Mr. Johnson",
      role: "Science Teacher - Emma",
      lastMessage: "Please remind Emma to submit her lab report",
      timestamp: "1 day ago",
      unread: 0,
    },
    {
      name: "Ms. Davis",
      role: "History Teacher - James",
      lastMessage: "James did great on his presentation!",
      timestamp: "2 days ago",
      unread: 0,
    },
    {
      name: "School Admin",
      role: "Administration",
      lastMessage: "Parent-teacher meeting scheduled for next week",
      timestamp: "3 days ago",
      unread: 0,
    },
  ];

  const messages = {
    "Ms. Anderson": [
      {
        id: "1",
        sender: "You",
        content: "Hello Ms. Anderson, how is Emma doing in mathematics?",
        timestamp: "10:30 AM",
        isSent: true,
      },
      {
        id: "2",
        sender: "Ms. Anderson",
        content: "Hello! Emma is doing excellently. Her competency level has improved to 'Achieving'.",
        timestamp: "10:45 AM",
        isSent: false,
      },
      {
        id: "3",
        sender: "Ms. Anderson",
        content: "She's particularly strong in algebra and problem-solving!",
        timestamp: "10:46 AM",
        isSent: false,
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">Messages</h1>
        <p className="text-muted-foreground">Communicate with teachers and school staff</p>
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
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-sm">{thread.name}</h4>
                      {thread.unread > 0 && (
                        <span className="h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
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
            recipient={`${selectedThread} (${threads.find(t => t.name === selectedThread)?.role})`}
            messages={messages[selectedThread as keyof typeof messages] || []}
          />
        </div>
      </div>
    </div>
  );
}
