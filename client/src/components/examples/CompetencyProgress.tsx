import { CompetencyProgress } from '../CompetencyProgress';

export default function CompetencyProgressExample() {
  //todo: remove mock functionality
  const mockCompetencies = [
    {
      name: "Critical Thinking",
      level: "Ex" as const,
      progress: 92,
      subject: "Mathematics",
    },
    {
      name: "Written Communication",
      level: "A" as const,
      progress: 78,
      subject: "English",
    },
    {
      name: "Scientific Method",
      level: "D" as const,
      progress: 65,
      subject: "Science",
    },
    {
      name: "Creative Expression",
      level: "A" as const,
      progress: 85,
      subject: "Arts",
    },
  ];

  return (
    <div className="p-6 max-w-2xl">
      <CompetencyProgress competencies={mockCompetencies} />
    </div>
  );
}
