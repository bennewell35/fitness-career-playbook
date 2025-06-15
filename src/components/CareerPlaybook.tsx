
import { Book, Dumbbell, Medal, Network } from "lucide-react";
import { Github, Linkedin, ArrowDown } from "lucide-react";
import RemixCta from "./RemixCta";
import { useEffect, useRef } from "react";

// Each card content/config
const cards = [
  {
    icon: <Book className="text-blue-500" size={32} />,
    heading: "Fitness Career Playbook",
    subheading: "Step-by-step roadmap to becoming a coach, trainer, or strength pro.",
    cta: "Start Your Journey",
    type: "landing",
  },
  {
    icon: <Medal className="text-yellow-400" size={28} />,
    heading: "Why Coaching?",
    lines: [
      "High-impact work. Every coach changes lives.",
      "• Booming $60B+ industry, huge demand.",
      "• Flexible paths—schools, gyms, online.",
    ],
    type: "why",
  },
  {
    icon: <Book className="text-violet-500" size={28} />,
    heading: "Step 1: Learn the Basics",
    lines: [
      "Study anatomy, physiology, nutrition—free online!",
      "Resources: ",
      <>
        <a href="https://www.acefitness.org/education-and-resources/" target="_blank" className="underline text-blue-700">ACE</a>
        {", "}
        <a href="https://www.nasm.org/fitness-certifications" target="_blank" className="underline text-blue-700">NASM</a>
        {", "}
        <a href="https://www.youtube.com/c/JeffNippard" target="_blank" className="underline text-blue-700">YouTube</a>
      </>
    ],
    type: "step",
  },
  {
    icon: <Medal className="text-orange-400" size={28} />,
    heading: "Step 2: Get Certified",
    lines: [
      <>
        Top starter certs:{" "}
        <a href="https://www.acefitness.org/" target="_blank" className="underline text-blue-700">ACE</a>
        {", "}
        <a href="https://www.nasm.org/" target="_blank" className="underline text-blue-700">NASM</a>
        {", "}
        <a href="https://www.issaonline.com/" target="_blank" className="underline text-blue-700">ISSA</a>
      </>,
      "Prep tips: use study groups, flashcards, practice exams."
    ],
    type: "step",
  },
  {
    icon: <Dumbbell className="text-green-600" size={28} />,
    heading: "Step 3: Build Experience",
    lines: [
      "Shadow great coaches. Volunteer, help friends.",
      "Find a mentor who coaches—not just trains."
    ],
    type: "step",
  },
  {
    icon: <Dumbbell className="text-blue-800" size={28} />,
    heading: "Step 4: Start Coaching",
    lines: [
      "Run small group sessions, online classes, or clubs.",
      "Collect feedback. Log sessions in a coaching journal."
    ],
    type: "step",
  },
  {
    icon: <Network className="text-rose-500" size={28} />,
    heading: "Step 5: Go Pro",
    lines: [
      "Specialize: sports, rehab, nutrition, groups.",
      "Network up. Keep learning. Collect testimonials."
    ],
    type: "step",
  },
  {
    icon: <Medal className="text-yellow-500" size={28} />,
    heading: "Career Boosters",
    lines: [
      <>
        <span className="font-semibold">Sample Day:</span> Mix clients, planning, self-care.
      </>,
      <>
        <a href="https://www.notion.so/Personal-Coach-Portfolio-Template-Example" target="_blank" className="underline text-blue-700">Free portfolio template</a>
      </>,
      "Stand out: Resume tips, strong online brand."
    ],
    type: "bonus",
  },
  {
    icon: <Book className="text-slate-700" size={28} />,
    heading: "FAQ & Advice",
    lines: [
      <b>Do I need a degree?</b>,
      "No, but certifications (ACE, NASM) help. Real experience & results matter most.",
      <b>How do I find clients?</b>,
      "Start with friends, family, gyms, social media.",
      <b>How much can I make?</b>,
      "Entry: $20–40/hr. Pros earn $60k+. More if you hustle and specialize."
    ],
    type: "faq",
  },
  {
    icon: <Dumbbell className="text-green-700" size={28} />,
    heading: "Remix This Playbook",
    lines: [
      "Make it your own or download as PDF.",
    ],
    cta: "Remix or Download",
    type: "cta",
  },
];

// Progress dots/arrows between cards
function Progress({ index, total }: { index: number, total: number }) {
  // Show nothing after last card
  if (index === total - 1) return null;
  return (
    <div className="flex items-center justify-center py-2">
      <div className="w-8 flex justify-center">
        <ArrowDown className="text-slate-300" size={24} strokeWidth={2.2} />
      </div>
    </div>
  )
}

const Footer = () => (
  <footer className="flex flex-col items-center justify-center py-6 text-xs text-slate-400 gap-1 mt-10 relative z-20">
    <div>Built by <b>Jonathan Newell</b></div>
    <div className="flex gap-2 mt-1">
      <a href="https://github.com/bennewell35" target="_blank" rel="noopener" className="flex items-center gap-1 hover:underline">
        <Github size={15} /> GitHub
      </a>
      <a href="https://linkedin.com/in/jonathan-benjamin-newell-5b450432" target="_blank" rel="noopener" className="flex items-center gap-1 hover:underline">
        <Linkedin size={15} /> LinkedIn
      </a>
    </div>
  </footer>
);

export default function CareerPlaybook() {
  // For sticky CTA hide on desktop
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="bg-remix-gradient min-h-screen w-full flex flex-col items-center">
      <main className="w-full max-w-md flex flex-col gap-0 pt-2 mx-auto">
        {/* Card Stack */}
        {cards.map((card, i) => (
          <div
            className={`relative flex flex-col items-center shadow-card px-4 py-6 mb-2 rounded-xl bg-white/80`}
            key={card.heading + i}
            style={{
              background:
                card.type === "landing"
                  ? "linear-gradient(120deg, #d6efff 0%, #ffe3ef 100%)"
                  : card.type === "why"
                  ? "linear-gradient(100deg, #ffe3ef 0%, #e0ffef 80%)"
                  : card.type === "step"
                  ? "linear-gradient(120deg, #e9fff3 0%, #e4f0ff 120%)"
                  : card.type === "bonus"
                  ? "linear-gradient(120deg, #ffefc7 0%, #ffe3ef 100%)"
                  : card.type === "faq"
                  ? "linear-gradient(120deg, #f3f0ff 10%, #d6efff 90%)"
                  : "linear-gradient(100deg, #e9ffe8 0%, #ffd6e8 100%)",
            }}
          >
            <div className="flex flex-col items-center w-full">
              <div className="mb-2">{card.icon}</div>
              <h2 className="text-2xl font-bold text-slate-900 text-center mb-1 leading-tight">{card.heading}</h2>
              {card.subheading && <div className="mb-2 text-base text-slate-700 text-center">{card.subheading}</div>}
              <div className="space-y-1 w-full mt-1 text-center text-[16px] text-slate-700">
                {card.lines &&
                  card.lines.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
              </div>
              {/* CTA in card */}
              {card.cta && (
                <div className="mt-4">
                  <RemixCta size="md">{card.cta}</RemixCta>
                </div>
              )}
            </div>
          </div>
        // Progress arrows
        ),)}
        {/* Progress dots/arrows */}
        {cards.map((_, i) =>
          i < cards.length - 1 ? <Progress key={"arrow" + i} index={i} total={cards.length} /> : null
        )}
        <div ref={bottomRef} />
      </main>
      {/* Sticky bottom mobile CTA */}
      <div className="fixed bottom-3 left-0 w-full flex justify-center z-40 md:hidden">
        <div className="w-full max-w-xs flex justify-center">
          <RemixCta size="lg" className="shadow-2xl drop-shadow-lg">
            Remix This Playbook / Download PDF
          </RemixCta>
        </div>
      </div>
      <Footer />
    </div>
  );
}
