
import { Calendar, Book, Star, Plus } from "lucide-react";
import ProgramCard from "./ProgramCard";

interface ProgramsGridProps {
  onRemix: (plan: string) => void;
}

const programs = [
  {
    title: "Marathon Training Plan",
    summary: "Editable 16-week plan—beginner to advanced. Fork and remix your race build-up.",
    icon: <Calendar className="text-blue-500" size={28} />,
    colorFrom: "#d6efff",
    colorTo: "#ffd6e8",
    key: "marathon",
  },
  {
    title: "Strength Training Plan",
    summary: "Pro-strength split for 3 days/week. Swap sets/reps—customize for you.",
    icon: <Star className="text-orange-400" size={28} />,
    colorFrom: "#ffe5d9",
    colorTo: "#d9e7ff",
    key: "strength",
  },
  {
    title: "Fat Loss & Hybrid Athlete Plan",
    summary: "HIIT, running, strength blend—remix for hybrid or pure fat loss.",
    icon: <Book className="text-green-500" size={28} />,
    colorFrom: "#d9ffe5",
    colorTo: "#ffe3f3",
    key: "hybrid",
  },
  {
    title: "Build Your Own Plan",
    summary: "Start totally blank! Create your dream split, event, or challenge.",
    icon: <Plus className="text-purple-500" size={28} />,
    colorFrom: "#e6e3ff",
    colorTo: "#fff3f3",
    key: "blank",
  },
];

const ProgramsGrid = ({ onRemix }: ProgramsGridProps) => (
  <section className="py-10 md:py-20 max-w-6xl mx-auto">
    <div className="mb-8">
      <h2 className="text-3xl font-extrabold text-center mb-2">Remixable Program Templates</h2>
      <p className="text-center text-lg text-slate-600">
        Cards below are fully editable—click Remix to make each program your own!
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {programs.map((program) => (
        <ProgramCard
          key={program.key}
          title={program.title}
          summary={program.summary}
          icon={program.icon}
          onClick={() => onRemix(program.key)}
          colorFrom={program.colorFrom}
          colorTo={program.colorTo}
        />
      ))}
    </div>
  </section>
);
export default ProgramsGrid;
