import { StatCard } from '../StatCard';
import { Users, GraduationCap, TrendingUp, Calendar } from 'lucide-react';

export default function StatCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      <StatCard
        title="Total Students"
        value="1,245"
        icon={Users}
        trend={{ value: 12, isPositive: true }}
      />
      <StatCard
        title="Active Classes"
        value="32"
        icon={GraduationCap}
        subtitle="8 subjects"
      />
      <StatCard
        title="Avg. Competency"
        value="78%"
        icon={TrendingUp}
        trend={{ value: 5, isPositive: true }}
      />
      <StatCard
        title="Attendance Rate"
        value="94.2%"
        icon={Calendar}
        trend={{ value: 2, isPositive: false }}
      />
    </div>
  );
}
