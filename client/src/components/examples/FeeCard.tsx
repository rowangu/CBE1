import { FeeCard } from '../FeeCard';

export default function FeeCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      <FeeCard
        term="Term 1 2025"
        totalAmount={2500}
        paidAmount={2500}
        dueDate="Jan 15, 2025"
        status="paid"
        onDownload={() => console.log('Download receipt')}
      />
      <FeeCard
        term="Term 2 2025"
        totalAmount={2500}
        paidAmount={1500}
        dueDate="Apr 15, 2025"
        status="partial"
        onPay={() => console.log('Pay now')}
        onDownload={() => console.log('Download receipt')}
      />
      <FeeCard
        term="Term 3 2025"
        totalAmount={2500}
        paidAmount={0}
        dueDate="Sep 15, 2025"
        status="overdue"
        onPay={() => console.log('Pay now')}
        onDownload={() => console.log('Download receipt')}
      />
    </div>
  );
}
