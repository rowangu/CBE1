import { ProgressChart } from '../ProgressChart';

export default function ProgressChartExample() {
  //todo: remove mock functionality
  const mockData = [
    { month: "Jan", score: 65 },
    { month: "Feb", score: 68 },
    { month: "Mar", score: 72 },
    { month: "Apr", score: 75 },
    { month: "May", score: 78 },
    { month: "Jun", score: 82 },
  ];

  return (
    <div className="p-6">
      <ProgressChart title="Student Progress Over Time" data={mockData} />
    </div>
  );
}
