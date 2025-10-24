import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";

type CompetencyLevel = "E" | "D" | "A" | "Ex";

interface CompetencyData {
  studentName: string;
  competencies: {
    name: string;
    level: CompetencyLevel;
  }[];
}

interface CompetencyHeatmapProps {
  data: CompetencyData[];
  competencyNames: string[];
}

const levelColors = {
  E: "bg-red-200 dark:bg-red-900/40 hover:bg-red-300 dark:hover:bg-red-900/60",
  D: "bg-yellow-200 dark:bg-yellow-900/40 hover:bg-yellow-300 dark:hover:bg-yellow-900/60",
  A: "bg-blue-200 dark:bg-blue-900/40 hover:bg-blue-300 dark:hover:bg-blue-900/60",
  Ex: "bg-green-200 dark:bg-green-900/40 hover:bg-green-300 dark:hover:bg-green-900/60",
};

const levelLabels = {
  E: "Emerging",
  D: "Developing",
  A: "Achieving",
  Ex: "Excelling",
};

export function CompetencyHeatmap({ data, competencyNames }: CompetencyHeatmapProps) {
  return (
    <Card data-testid="card-competency-heatmap">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Competency Heatmap</CardTitle>
          <div className="flex items-center gap-2">
            {(Object.keys(levelLabels) as CompetencyLevel[]).map((level) => (
              <div key={level} className="flex items-center gap-1">
                <div className={`h-3 w-3 rounded ${levelColors[level]}`} />
                <span className="text-xs text-muted-foreground">{level}</span>
              </div>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <TooltipProvider>
          <div className="overflow-x-auto">
            <div className="min-w-max">
              <div className="grid gap-2" style={{ gridTemplateColumns: `200px repeat(${competencyNames.length}, 60px)` }}>
                <div className="font-medium text-sm sticky left-0 bg-card">Student</div>
                {competencyNames.map((name, idx) => (
                  <div key={idx} className="text-xs font-medium text-center truncate" title={name}>
                    C{idx + 1}
                  </div>
                ))}
                
                {data.map((student, studentIdx) => (
                  <React.Fragment key={`student-${studentIdx}`}>
                    <div className="py-2 text-sm sticky left-0 bg-card">
                      {student.studentName}
                    </div>
                    {student.competencies.map((comp, compIdx) => (
                      <Tooltip key={`${studentIdx}-${compIdx}`}>
                        <TooltipTrigger asChild>
                          <div
                            className={`h-12 flex items-center justify-center rounded cursor-pointer transition-colors ${levelColors[comp.level]}`}
                            data-testid={`cell-competency-${studentIdx}-${compIdx}`}
                          >
                            <span className="text-xs font-semibold">{comp.level}</span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className="text-xs">
                            <p className="font-semibold">{comp.name}</p>
                            <p>{levelLabels[comp.level]}</p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </TooltipProvider>
      </CardContent>
    </Card>
  );
}
