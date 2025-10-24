import { StudentCard } from '../StudentCard';

export default function StudentCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      <StudentCard
        name="Emma Thompson"
        grade="Grade 10A"
        competencyScore={85}
        attendance={92}
        onView={() => console.log('View Emma Thompson')}
      />
      <StudentCard
        name="James Wilson"
        grade="Grade 10A"
        competencyScore={72}
        attendance={88}
        onView={() => console.log('View James Wilson')}
      />
      <StudentCard
        name="Sophia Martinez"
        grade="Grade 10B"
        competencyScore={91}
        attendance={95}
        onView={() => console.log('View Sophia Martinez')}
      />
    </div>
  );
}
