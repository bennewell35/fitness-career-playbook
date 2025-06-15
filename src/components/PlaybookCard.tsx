
import { FC, ReactNode } from "react";
import { Check, Download } from "lucide-react";

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
  <section
    className={`relative flex flex-col items-center rounded-3xl sm:rounded-[2rem] shadow-card 
      px-6 py-8 sm:px-10 sm:py-12 mb-6
      w-full max-w-lg sm:max-w-xl
      ${gradients[type]} 
      overflow-hidden
      `}
    style={{
      minHeight: 220,
      fontSize: "1.13rem", // About 18px
    }}
  >
    <div className="text-4xl mb-3">{icon}</div>
    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-2">{heading}</h2>
    {subheading && <div className="mb-3 text-lg text-slate-700 text-center">{subheading}</div>}

    {downloadLink && (
      <a
        href={downloadLink}
        download
        className="flex items-center gap-2 bg-white rounded-full px-6 py-2 mt-2 mb-3 text-blue-700 text-base font-semibold shadow hover:bg-blue-50 transition"
      >
        <Download size={20} /> {downloadLabel || "Download"}
      </a>
    )}

    <div className="space-y-3 w-full text-center text-lg text-slate-700 mb-4">
      {children}
    </div>

    {/* Checklist */}
    {checklist && (
      <ul className="w-full flex flex-col items-start gap-3 mb-3 px-4 sm:px-8 mx-auto">
        {checklist.map((item, idx) => (
          <li key={idx} className="flex items-center gap-3 text-left text-slate-800 text-base sm:text-lg">
            <Check className="text-green-500 shrink-0" size={20} /> <span>{item}</span>
          </li>
        ))}
      </ul>
    )}

    {/* Coach's Tip */}
    {tip && (
      <div className="bg-green-100 text-green-800 rounded-xl px-5 py-2 text-base w-full my-2 font-medium">{tip}</div>
    )}

    {/* Motivational Quote */}
    {quote && (
      <blockquote className="italic text-blue-700 text-center px-2 py-3 w-full text-lg">{quote}</blockquote>
    )}

    {/* CTA Button */}
    {cta && <div className="mt-5">{cta}</div>}
  </section>
);
