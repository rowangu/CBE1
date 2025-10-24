import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Image, Video, Eye } from "lucide-react";

type FileType = "pdf" | "image" | "video";

interface PortfolioCardProps {
  title: string;
  fileType: FileType;
  competency: string;
  uploadDate: string;
  onView?: () => void;
}

const fileIcons = {
  pdf: FileText,
  image: Image,
  video: Video,
};

export function PortfolioCard({ title, fileType, competency, uploadDate, onView }: PortfolioCardProps) {
  const Icon = fileIcons[fileType];

  return (
    <Card className="hover-elevate" data-testid={`card-portfolio-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <CardContent className="p-0">
        <div className="aspect-video bg-muted flex items-center justify-center rounded-t-lg">
          <Icon className="h-16 w-16 text-muted-foreground" />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-sm mb-2 line-clamp-2" data-testid={`text-portfolio-title-${title.toLowerCase().replace(/\s+/g, "-")}`}>
            {title}
          </h3>
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge variant="secondary" className="text-xs">
              {competency}
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">{uploadDate}</p>
            <Button
              variant="ghost"
              size="sm"
              onClick={onView}
              data-testid={`button-view-portfolio-${title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <Eye className="h-4 w-4 mr-1" />
              View
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
