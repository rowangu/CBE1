import { MessageThread } from '../MessageThread';

export default function MessageThreadExample() {
  //todo: remove mock functionality
  const mockMessages = [
    {
      id: "1",
      sender: "Ms. Anderson",
      content: "Hello! I wanted to discuss Emma's progress in mathematics.",
      timestamp: "10:30 AM",
      isSent: false,
    },
    {
      id: "2",
      sender: "You",
      content: "Hi Ms. Anderson! Yes, I'd love to hear about her progress.",
      timestamp: "10:32 AM",
      isSent: true,
    },
    {
      id: "3",
      sender: "Ms. Anderson",
      content: "She's doing very well! Her competency level in algebra has improved to 'Achieving'.",
      timestamp: "10:33 AM",
      isSent: false,
    },
  ];

  return (
    <div className="p-6 max-w-3xl">
      <MessageThread recipient="Ms. Anderson" messages={mockMessages} />
    </div>
  );
}
