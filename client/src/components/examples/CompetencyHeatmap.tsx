import { CompetencyHeatmap } from '../CompetencyHeatmap';

export default function CompetencyHeatmapExample() {
  //todo: remove mock functionality
  const competencyNames = ["Reading", "Writing", "Math", "Science", "Arts"];
  const mockData = [
    {
      studentName: "Alice Johnson",
      competencies: [
        { name: "Reading", level: "Ex" as const },
        { name: "Writing", level: "A" as const },
        { name: "Math", level: "A" as const },
        { name: "Science", level: "D" as const },
        { name: "Arts", level: "Ex" as const },
      ],
    },
    {
      studentName: "Bob Smith",
      competencies: [
        { name: "Reading", level: "A" as const },
        { name: "Writing", level: "D" as const },
        { name: "Math", level: "Ex" as const },
        { name: "Science", level: "A" as const },
        { name: "Arts", level: "D" as const },
      ],
    },
    {
      studentName: "Carol Williams",
      competencies: [
        { name: "Reading", level: "D" as const },
        { name: "Writing", level: "E" as const },
        { name: "Math", level: "D" as const },
        { name: "Science", level: "A" as const },
        { name: "Arts", level: "A" as const },
      ],
    },
  ];

  return (
    <div className="p-6">
      <CompetencyHeatmap data={mockData} competencyNames={competencyNames} />
    </div>
  );
}
