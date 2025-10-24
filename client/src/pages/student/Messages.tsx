import { MessageThread } from "@/components/MessageThread";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";

export default function Messages() {
  //todo: remove mock functionality
  const [selectedThread, setSelectedThread] = useState<string>("Ms. Anderson");

  const threads = [
    {
      name: "Ms. Anderson",
      role: "Math Teacher",
      lastMessage: "Great progress on your last test!",
      timestamp: "2 hours ago",
      unread: 2,
    },
    {
      name: "Mr. Johnson",
      role: "Science Teacher",
      lastMessage: "Please submit your lab report by Friday",
      timestamp: "1 day ago",
      unread: 0,
    },
    {
      name: "Dr. Smith",
      role: "English Teacher",
      lastMessage: "Excellent essay on climate change",
      timestamp: "2 days ago",
      unread: 0,
    },
  ];

  const messages = {
    "Ms. Anderson": [
      {
        id: "1",
        sender: "Ms. Anderson",
        content: "Hello! I wanted to discuss your progress in mathematics.",
        timestamp: "10:30 AM",
        isSent: false,
      },
      {
        id: "2",
        sender: "You",
        content: "Hi Ms. Anderson! Yes, I'd love to hear about it.",
        timestamp: "10:32 AM",
        isSent: true,
      },
      {
        id: "3",
        sender: "Ms. Anderson",
        content: "Your competency level in algebra has improved to 'Achieving'. Great work!",
        timestamp: "10:33 AM",
        isSent: false,
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">Messages</h1>
        <p className="text-muted-foreground">Communicate with your teachers</p>
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
                    <p className="text-xs text-muted-foreground mb-1">{thread.role}</p>
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
