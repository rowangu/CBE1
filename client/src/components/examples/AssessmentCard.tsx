import { AssessmentCard } from '../AssessmentCard';

export default function AssessmentCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      <AssessmentCard
        title="Unit 3 Math Test"
        subject="Mathematics"
        dueDate="Oct 28, 2025"
        duration="60 minutes"
        status="upcoming"
        onStart={() => console.log('Start assessment')}
      />
      <AssessmentCard
        title="Science Lab Report"
        subject="Biology"
        dueDate="Oct 25, 2025"
        duration="90 minutes"
        status="in-progress"
      />
      <AssessmentCard
        title="English Literature Quiz"
        subject="English"
        dueDate="Oct 20, 2025"
        duration="45 minutes"
        status="completed"
        onView={() => console.log('View results')}
      />
    </div>
  );
}
