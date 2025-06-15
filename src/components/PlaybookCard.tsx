
import { FC, ReactNode } from "react";
import { Check, Book, Medal, Dumbbell, Network, ArrowDown, Star, Download } from "lucide-react";

// CardType: step, why, booster, faq, about, etc
export interface PlaybookCardProps {
  type: "landing" | "why" | "step" | "bonus" | "faq" | "about";
  icon: ReactNode;
  heading: string;
  subheading?: string;
  children?: ReactNode;
  checklist?: (string | ReactNode)[];
  tip?: string | ReactNode;
  quote?: string;
  cta?: ReactNode;
  downloadLink?: string;
  downloadLabel?: string;
}

const gradients: Record<PlaybookCardProps['type'], string> = {
  landing: "bg-gradient-to-br from-blue-100 via-pink-100 to-green-100",
  why: "bg-gradient-to-br from-pink-100 via-green-100 to-blue-100",
  step: "bg-gradient-to-br from-green-100 via-blue-100 to-violet-100",
  bonus: "bg-gradient-to-br from-yellow-100 via-pink-100 to-orange-100",
  faq: "bg-gradient-to-br from-blue-100 via-violet-100 to-slate-100",
  about: "bg-gradient-to-br from-slate-100 via-pink-100 to-blue-100",
};

export const PlaybookCard: FC<PlaybookCardProps> = ({
  type,
  icon,
  heading,
  subheading,
  children,
  checklist,
  tip,
  quote,
  cta,
  downloadLink,
  downloadLabel
}) => (
  <section className={`relative flex flex-col items-center rounded-2xl shadow-card px-4 py-7 mb-3 ${gradients[type]} overflow-hidden`}>
    <div className="text-4xl mb-2">{icon}</div>
    <h2 className="text-2xl font-bold text-slate-900 text-center mb-1">{heading}</h2>
    {subheading && <div className="mb-2 text-base text-slate-700 text-center">{subheading}</div>}

    {downloadLink && (
      <a
        href={downloadLink}
        download
        className="flex items-center gap-2 bg-white rounded-full px-4 py-2 mt-2 mb-3 text-blue-700 text-sm font-medium shadow hover:bg-blue-50 transition"
      >
        <Download size={18} /> {downloadLabel || "Download"}
      </a>
    )}

    <div className="space-y-2 w-full text-center text-[16px] text-slate-700 mb-3">
      {children}
    </div>

    {/* Checklist */}
    {checklist && (
      <ul className="w-full flex flex-col items-start gap-2 mb-2 px-4 sm:px-8 mx-auto">
        {checklist.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 text-left text-slate-800">
            <Check className="text-green-500" size={18} /> <span>{item}</span>
          </li>
        ))}
      </ul>
    )}

    {/* Coach's Tip */}
    {tip && (
      <div className="bg-green-100 text-green-800 rounded-lg px-4 py-2 text-sm w-full my-2 font-medium">{tip}</div>
    )}

    {/* Motivational Quote */}
    {quote && (
      <blockquote className="italic text-blue-700 text-center px-1 py-2 w-full">{quote}</blockquote>
    )}

    {/* CTA Button */}
    {cta && <div className="mt-4">{cta}</div>}
  </section>
);
