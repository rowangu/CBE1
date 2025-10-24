import { FeeCard } from "@/components/FeeCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, DollarSign } from "lucide-react";

export default function Fees() {
  //todo: remove mock functionality
  const feeTerms = [
    {
      term: "Term 1 2025",
      totalAmount: 2500,
      paidAmount: 2500,
      dueDate: "Jan 15, 2025",
      status: "paid" as const,
    },
    {
      term: "Term 2 2025",
      totalAmount: 2500,
      paidAmount: 1500,
      dueDate: "Apr 15, 2025",
      status: "partial" as const,
    },
    {
      term: "Term 3 2025",
      totalAmount: 2500,
      paidAmount: 0,
      dueDate: "Sep 15, 2025",
      status: "overdue" as const,
    },
  ];

  const totalPaid = feeTerms.reduce((sum, term) => sum + term.paidAmount, 0);
  const totalDue = feeTerms.reduce((sum, term) => sum + (term.totalAmount - term.paidAmount), 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">Fees & Payments</h1>
        <p className="text-muted-foreground">Manage your school fees and payment history</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              Total Paid
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600" data-testid="text-total-paid">
              ${totalPaid.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground mt-1">Across all terms</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-red-600" />
              Outstanding Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-red-600" data-testid="text-outstanding-balance">
              ${totalDue.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground mt-1">Requires payment</p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Fee Details by Term</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feeTerms.map((fee) => (
            <FeeCard
              key={fee.term}
              {...fee}
              onPay={() => console.log('Pay:', fee.term)}
              onDownload={() => console.log('Download receipt:', fee.term)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
