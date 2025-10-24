import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Download } from "lucide-react";

interface FeeCardProps {
  term: string;
  totalAmount: number;
  paidAmount: number;
  dueDate: string;
  status: "paid" | "partial" | "overdue";
  onPay?: () => void;
  onDownload?: () => void;
}

const statusConfig = {
  paid: { label: "Paid", variant: "outline" as const, color: "text-green-600" },
  partial: { label: "Partial", variant: "secondary" as const, color: "text-yellow-600" },
  overdue: { label: "Overdue", variant: "destructive" as const, color: "text-red-600" },
};

export function FeeCard({ term, totalAmount, paidAmount, dueDate, status, onPay, onDownload }: FeeCardProps) {
  const config = statusConfig[status];
  const balance = totalAmount - paidAmount;
  const percentPaid = (paidAmount / totalAmount) * 100;

  return (
    <Card data-testid={`card-fee-${term.toLowerCase().replace(/\s+/g, "-")}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle>{term}</CardTitle>
          <Badge variant={config.variant}>{config.label}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Total Amount</p>
            <p className="text-lg font-bold" data-testid={`text-total-amount-${term.toLowerCase().replace(/\s+/g, "-")}`}>
              ${totalAmount.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Paid</p>
            <p className="text-lg font-bold text-green-600">
              ${paidAmount.toLocaleString()}
            </p>
          </div>
        </div>
        
        {balance > 0 && (
          <div>
            <p className="text-sm text-muted-foreground mb-2">Balance</p>
            <p className={`text-2xl font-bold ${config.color}`} data-testid={`text-balance-${term.toLowerCase().replace(/\s+/g, "-")}`}>
              ${balance.toLocaleString()}
            </p>
            <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all"
                style={{ width: `${percentPaid}%` }}
              />
            </div>
          </div>
        )}
        
        <div className="pt-2">
          <p className="text-sm text-muted-foreground">Due Date: {dueDate}</p>
        </div>
        
        <div className="flex gap-2">
          {balance > 0 && (
            <Button 
              className="flex-1" 
              onClick={onPay}
              data-testid={`button-pay-${term.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <CreditCard className="h-4 w-4 mr-2" />
              Pay Now
            </Button>
          )}
          <Button 
            variant="outline" 
            onClick={onDownload}
            data-testid={`button-download-receipt-${term.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <Download className="h-4 w-4 mr-2" />
            Receipt
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
