import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

type CompetencyLevel = "E" | "D" | "A" | "Ex";

interface CompetencyItem {
  name: string;
  level: CompetencyLevel;
  progress: number;
  subject: string;
}

interface CompetencyProgressProps {
  competencies: CompetencyItem[];
}

const levelConfig = {
  E: { label: "Emerging", color: "bg-red-500" },
  D: { label: "Developing", color: "bg-yellow-500" },
  A: { label: "Achieving", color: "bg-blue-500" },
  Ex: { label: "Excelling", color: "bg-green-500" },
};

export function CompetencyProgress({ competencies }: CompetencyProgressProps) {
  return (
    <Card data-testid="card-competency-progress">
      <CardHeader>
        <CardTitle>Competency Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {competencies.map((competency, index) => {
          const config = levelConfig[competency.level];

          return (
            <div key={index} className="space-y-2" data-testid={`competency-item-${index}`}>
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{competency.name}</h4>
                  <p className="text-xs text-muted-foreground">{competency.subject}</p>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {config.label}
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Progress value={competency.progress} className="flex-1" />
                <span className="text-xs text-muted-foreground font-mono w-12 text-right">
                  {competency.progress}%
                </span>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
