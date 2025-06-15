
import { FC, ReactNode, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepCardProps {
  icon: ReactNode;
  heading: string;
  subheading?: string;
  story?: string;
  children?: ReactNode;
  coachInsight?: string;
  faq?: { q: string; a: string }[];
  levelUp?: string;
}

const StepCard: FC<StepCardProps> = ({
  icon,
  heading,
  subheading,
  story,
  children,
  coachInsight,
  faq = [],
  levelUp,
}) => {
  const [checked, setChecked] = useState(false);
  const [faqOpenIdx, setFaqOpenIdx] = useState<number | null>(null);

  return (
    <section
      className={cn(
        "relative flex flex-col items-center rounded-3xl sm:rounded-[2rem] shadow-card animate-fade-in",
        "w-full max-w-lg sm:max-w-xl px-6 py-8 sm:px-10 sm:py-12 mb-7",
        "bg-gradient-to-br from-green-100 via-blue-100 to-pink-100 transition-transform duration-300",
        checked ? "scale-98 ring-2 ring-green-400" : ""
      )}
      style={{
        minHeight: 250,
      }}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center drop-shadow mb-2">{heading}</h2>
      {subheading && <div className="mb-3 text-lg text-slate-700 text-center">{subheading}</div>}

      {/* Mini Story */}
      {story && (
        <blockquote className="bg-blue-50 rounded-lg px-4 py-3 italic mb-3 w-full border-l-4 border-blue-200 text-blue-900 text-base">
          {story}
        </blockquote>
      )}

      <div className="space-y-3 w-full text-center text-lg text-slate-700 mb-2">
        {children}
      </div>

      {/* Coach's Insight */}
      {coachInsight && (
        <div className="bg-green-50 border-l-4 border-green-400 text-green-800 rounded-xl px-5 py-2 my-2 w-full font-medium">
          <span className="font-semibold">Coach’s Insight:</span> {coachInsight}
        </div>
      )}

      {/* FAQ Accordion */}
      {faq.length > 0 && (
        <div className="w-full mt-3">
          <div className="font-semibold mb-1">FAQ:</div>
          <ul className="flex flex-col gap-2">
            {faq.map((item, idx) => (
              <li key={idx} className="bg-white rounded-lg px-3 py-2 shadow border">
                <button
                  className="flex items-center w-full justify-between text-left font-medium"
                  onClick={() => setFaqOpenIdx(faqOpenIdx === idx ? null : idx)}
                  aria-expanded={faqOpenIdx === idx}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    size={18}
                    className={faqOpenIdx === idx ? "rotate-180 transition-transform" : "transition-transform"}
                  />
                </button>
                {faqOpenIdx === idx && (
                  <div className="mt-2 text-sm text-slate-700 animate-fade-in">{item.a}</div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Level Up Challenge */}
      {levelUp && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-900 rounded-xl px-5 py-2 my-3 text-left w-full font-medium animate-fade-in">
          <span className="font-bold">Level Up Challenge:</span> {levelUp}
        </div>
      )}

      {/* “Did you do this?” Self-Check */}
      <div className="mt-4 flex flex-col items-center gap-1 w-full">
        <button
          className={cn(
            "flex items-center gap-2 px-5 py-2 rounded-full font-semibold shadow hover:scale-105 transition bg-gradient-to-r from-green-300 to-blue-200 text-green-900",
            checked ? "bg-green-400 text-green-900" : ""
          )}
          onClick={() => setChecked(!checked)}
          aria-pressed={checked}
        >
          <span>{checked ? "✅ Completed – Great work!" : "Mark step as complete"}</span>
          {checked && <Check size={18} />}
        </button>
        <span className="text-sm text-slate-500">{checked ? "You’ve finished this step!" : "Check off when done"}</span>
      </div>
    </section>
  );
};

export default StepCard;
