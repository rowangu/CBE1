import { PortfolioCard } from '../PortfolioCard';

export default function PortfolioCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      <PortfolioCard
        title="Science Project: Ecosystem Model"
        fileType="image"
        competency="Science Research"
        uploadDate="Oct 15, 2025"
        onView={() => console.log('View portfolio item')}
      />
      <PortfolioCard
        title="Math Problem Solving Video"
        fileType="video"
        competency="Mathematical Thinking"
        uploadDate="Oct 20, 2025"
        onView={() => console.log('View portfolio item')}
      />
      <PortfolioCard
        title="English Essay - Climate Change"
        fileType="pdf"
        competency="Written Communication"
        uploadDate="Oct 22, 2025"
        onView={() => console.log('View portfolio item')}
      />
    </div>
  );
}
