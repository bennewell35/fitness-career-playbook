
import SectionHeader from "./SectionHeader";
import { Book, Calendar, Star, Download } from "lucide-react";

const resources = [
  {
    icon: <Book className="text-blue-500" size={22}/>,
    title: "Meal Prep Checklist",
    desc: "Step-by-step checklist for planning healthy meals—remix for any diet.",
    cta: "Remix Checklist"
  },
  {
    icon: <Calendar className="text-green-500" size={22}/>,
    title: "Daily Printable Planner",
    desc: "Editable planner—track workouts, meals, water, sleep, and more.",
    cta: "Remix Planner"
  },
  {
    icon: <Star className="text-yellow-400" size={22}/>,
    title: "Program Design Cheat Sheet",
    desc: "A must-have reference for building effective training programs.",
    cta: "Remix Cheat Sheet"
  },
  {
    icon: <Download className="text-violet-500" size={22}/>,
    title: "FAQ & Motivation Wall",
    desc: "Top 10 beginner questions plus quotes, tips, and before/afters.",
    cta: "Remix FAQ & Wall"
  }
];

const ResourceToolkit = () => (
  <section className="py-12 md:py-18 max-w-5xl mx-auto">
    <SectionHeader title="Remixable Fitness Resources & Checklists" subtitle="All checklists and guides below are editable and sharable." icon={<Book className="text-blue-500" size={32}/>}/>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
      {resources.map((r, i) => (
        <div key={i} className="rounded-xl bg-gradient-to-br from-pink-50 to-blue-50 border shadow-card px-6 py-5 flex flex-col gap-2 transition-transform hover:scale-105">
          <div className="flex items-center gap-2">{r.icon}<span className="font-bold text-lg">{r.title}</span></div>
          <div className="text-[16px] text-slate-700 mb-2">{r.desc}</div>
          <button className="ml-auto px-4 py-1.5 rounded-full bg-slate-900 text-white text-md font-semibold hover:bg-slate-700 transition">{r.cta}</button>
        </div>
      ))}
    </div>
  </section>
);

export default ResourceToolkit;
