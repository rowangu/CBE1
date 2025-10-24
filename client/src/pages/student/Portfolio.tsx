import { PortfolioCard } from "@/components/PortfolioCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, Search } from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  //todo: remove mock functionality
  const [searchQuery, setSearchQuery] = useState("");

  const portfolioItems = [
    {
      title: "Science Project: Ecosystem Model",
      fileType: "image" as const,
      competency: "Science Research",
      uploadDate: "Oct 15, 2025",
    },
    {
      title: "Math Problem Solving Video",
      fileType: "video" as const,
      competency: "Mathematical Thinking",
      uploadDate: "Oct 20, 2025",
    },
    {
      title: "English Essay - Climate Change",
      fileType: "pdf" as const,
      competency: "Written Communication",
      uploadDate: "Oct 22, 2025",
    },
    {
      title: "Art Portfolio Presentation",
      fileType: "pdf" as const,
      competency: "Creative Expression",
      uploadDate: "Oct 18, 2025",
    },
    {
      title: "History Research Paper",
      fileType: "pdf" as const,
      competency: "Historical Analysis",
      uploadDate: "Oct 12, 2025",
    },
    {
      title: "Chemistry Lab Report",
      fileType: "pdf" as const,
      competency: "Scientific Method",
      uploadDate: "Oct 10, 2025",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2" data-testid="text-page-title">My Portfolio</h1>
          <p className="text-muted-foreground">Showcase of your work and achievements</p>
        </div>
        <Button data-testid="button-upload-work">
          <Upload className="h-4 w-4 mr-2" />
          Upload Work
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search portfolio items..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            data-testid="input-search-portfolio"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <PortfolioCard
            key={index}
            title={item.title}
            fileType={item.fileType}
            competency={item.competency}
            uploadDate={item.uploadDate}
            onView={() => console.log('View:', item.title)}
          />
        ))}
      </div>
    </div>
  );
}
