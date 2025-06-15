
import HeroSection from "@/components/HeroSection";
import ProgramsGrid from "@/components/ProgramsGrid";
import RoadmapSection from "@/components/RoadmapSection";
import ResourceToolkit from "@/components/ResourceToolkit";
import RemixGuide from "@/components/RemixGuide";
import BuiltInLovable from "@/components/BuiltInLovable";

const Index = () => {
  // For actual remix functionality, you could route to subpages, pop modal, etc.
  // For now, stub
  const handleRemix = (key: string) => {
    alert("Remix functionality coming soon for: " + key);
  };

  return (
    <div className="font-sans bg-remix-gradient min-h-screen">
      <HeroSection />
      <main>
        <ProgramsGrid onRemix={handleRemix} />
        <section id="plans" className="max-w-5xl mx-auto py-10">
          {/* We could conditionally render the correct table/modal here if a program is selected */}
        </section>
        <RoadmapSection />
        <ResourceToolkit />
        <RemixGuide />
        <BuiltInLovable />
      </main>
      {/* Floating sticky CTA */}
      <div className="fixed bottom-7 right-7 z-50 animate-fade-in">
        <a href="#plans">
          <button className="bg-slate-900 text-white rounded-full px-6 py-4 shadow-xl text-lg font-bold hover:bg-slate-700 flex gap-2 items-center">
            Start Remixing
          </button>
        </a>
      </div>
    </div>
  );
};

export default Index;
