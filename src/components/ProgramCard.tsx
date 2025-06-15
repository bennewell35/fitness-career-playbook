
import { FC } from "react";

interface ProgramCardProps {
  title: string;
  summary: string;
  icon: React.ReactNode;
  onClick?: () => void;
  colorFrom?: string; // pastel [from]
  colorTo?: string; // pastel [to]
  children?: React.ReactNode;
}

const ProgramCard: FC<ProgramCardProps> = ({
  title,
  summary,
  icon,
  onClick,
  colorFrom,
  colorTo,
  children,
}) => (
  <div
    className={`relative bg-white rounded-2xl shadow-card border border-slate-100 flex flex-col p-6 transition-transform hover:scale-105 group`}
    style={{
      background: `linear-gradient(120deg, ${colorFrom || "#ffd6e8"}, ${
        colorTo || "#e3ffe7"
      })`
    }}
  >
    <div className="flex items-center gap-3">
      <span className="rounded-full bg-white/80 shadow p-2">{icon}</span>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
    </div>
    <div className="mt-2 mb-4 text-base text-slate-700">{summary}</div>
    <div className="grow">{children}</div>
    <button
      onClick={onClick}
      className="mt-4 inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-slate-800 text-white font-bold text-sm shadow transition-colors hover:bg-slate-900 focus:outline-none"
    >
      Remix This Plan →
    </button>
  </div>
);

export default ProgramCard;
