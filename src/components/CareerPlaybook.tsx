import { useState, useEffect, useRef } from "react";
import { Book, Dumbbell, Medal, Network, Linkedin, ArrowDown, Star, Github } from "lucide-react";
import ProgressStepper from "./ProgressStepper";
import { PlaybookCard } from "./PlaybookCard";
import RemixCta from "./RemixCta";
import StickyCtaBar from "./StickyCtaBar";
import PlaybookHeader from "./PlaybookHeader";

// NEW STEP DATA - Ordered and worded as per user instructions, no downloads/external docs
const stepCards = [
  {
    type: "landing" as const,
    icon: <Book className="text-blue-500" size={36} />,
    heading: "Fitness Career Playbook",
    subheading: "Start your journey to becoming a coach or trainer!",
    cta: <RemixCta size="md">Start Your Journey</RemixCta>,
  },
  {
    type: "why" as const,
    icon: <Medal className="text-yellow-400" size={32} />,
    heading: "Why Coaching?",
    children: (
      <>
        <ul className="list-disc list-inside text-left text-base space-y-1">
          <li>High-impact, growing industry</li>
          <li>Change lives—help others reach their goals</li>
          <li>Flexible career paths: gyms, schools, online, your way</li>
        </ul>
      </>
    ),
  },
  {
    type: "step" as const,
    icon: <Book className="text-violet-500" size={30} />,
    heading: "Step 1: Learn the Basics",
    checklist: [
      "Study anatomy, physiology, and nutrition with free resources online",
      "Set aside 30 min/day for learning",
      "Write down one thing you learned each day",
    ],
    tip: <>Coach’s Tip: “Consistency beats cramming—make learning a daily habit.”</>,
  },
  {
    type: "step" as const,
    icon: <Medal className="text-orange-400" size={30} />,
    heading: "Step 2: Get Certified",
    checklist: [
      "Pick a certification: ACE, NASM, or ISSA",
      "Register for an exam",
      "Form or join a study group—accountability is key",
    ],
    tip: <>Pro Tip: “You don’t need to know everything—just get started.”</>,
    children: (
      <>
        <div>
          <b>Public cert info:</b>{" "}
          <a href="https://www.acefitness.org/education-and-resources/" target="_blank" className="underline text-blue-700 ml-1">ACE</a>
          <span>,</span>
          <a href="https://www.nasm.org/fitness-certifications" target="_blank" className="underline text-blue-700 ml-1">NASM</a>
          <span>,</span>
          <a href="https://www.issaonline.com/" target="_blank" className="underline text-blue-700 ml-1">ISSA</a>
        </div>
      </>
    ),
  },
  {
    type: "step" as const,
    icon: <Dumbbell className="text-green-600" size={30} />,
    heading: "Step 3: Get Experience",
    checklist: [
      <>
        Ask a coach if you can shadow a session. <span className="block text-xs mt-1 bg-slate-100 rounded px-2 py-1 select-all mb-1">Copy/paste: “Hi, I’m new to coaching—may I observe or help with a session?”</span>
      </>,
      "Volunteer at a gym or help friends/family",
      "Keep a log: Date, what you learned, who you helped"
    ],
    tip: <>Coach’s Tip: “Most coaches started by helping friends, not in a fancy gym.”</>,
  },
  {
    type: "step" as const,
    icon: <Dumbbell className="text-blue-800" size={30} />,
    heading: "Step 4: Start Coaching",
    checklist: [
      "Offer your first session—start small",
      "Ask for feedback after every session",
      "Reflect: What worked? What would you change?"
    ],
    quote: "Motivation: First sessions are never perfect—just take action.",
  },
  {
    type: "step" as const,
    icon: <Network className="text-rose-500" size={30} />,
    heading: "Step 5: Go Pro",
    checklist: [
      "Specialize: athletic performance, rehab, group, online, etc.",
      "Network with other coaches, join a professional group",
      "Collect testimonials and track your clients’ results",
    ],
    tip: <>Coach’s Quote: “Keep growing—every pro was once a rookie.”</>,
  },
  {
    type: "bonus" as const,
    icon: <Medal className="text-yellow-500" size={28} />,
    heading: "Career Boosters",
    children: (
      <>
        <ul className="list-disc list-inside text-left text-base space-y-1">
          <li>
            <span className="font-semibold">A day in the life:</span> Mornings: review client plans. Midday: sessions. Afternoons: emails, self-training, reflection. Evenings: new sessions or continuing ed.
          </li>
          <li>Post your journey on social media to build your brand</li>
          <li>Share this Playbook with friends (remix or copy!)</li>
        </ul>
      </>
    )
  },
  {
    type: "faq" as const,
    icon: <Book className="text-slate-700" size={28} />,
    heading: "FAQ / Troubleshooter",
    children: (
      <>
        <div>
          <b>Do I need a degree?</b> No, but it helps. Certs matter more for most roles.
        </div>
        <div>
          <b>How do I find clients?</b> Start with friends, family, and local gyms.
        </div>
        <div>
          <b>How much can I earn?</b> Depends on location, specialty, and hustle.
        </div>
        <div>
          <i>Remix this FAQ as you learn!</i>
        </div>
      </>
    ),
  },
  {
    type: "about" as const,
    icon: <Star className="text-yellow-400" size={28} />,
    heading: "About & Connect",
    subheading: "Built by Jonathan Newell",
    children: (
      <>
        <div>
          Remix this Playbook, add your story, or connect!
        </div>
        <div className="flex gap-3 justify-center mt-2">
          <a href="https://github.com/bennewell35" target="_blank" rel="noopener" className="flex items-center gap-1 hover:underline text-slate-800">
            <Github size={18} /> GitHub
          </a>
          <a href="https://linkedin.com/in/jonathan-benjamin-newell-5b450432" target="_blank" rel="noopener" className="flex items-center gap-1 hover:underline text-blue-700">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </>
    )
  }
];

// Core steps for progress tracking - now 7 main steps (Landing + 5 steps + Boost)
const progressSteps = [
  { label: "Start" },
  { label: "Why" },
  { label: "Basics" },
  { label: "Cert" },
  { label: "XP" },
  { label: "Coach" },
  { label: "Pro" },
];

export default function CareerPlaybook() {
  const [currentStep, setCurrentStep] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Custom scroll logic to assign steps (for 7 progress markers now)
  useEffect(() => {
    const onScroll = () => {
      const positions = cardRefs.current.map(
        (ref) => ref?.getBoundingClientRect().top ?? Infinity
      );
      let idx = 0;
      for (let i = 0; i < positions.length; ++i) {
        if (positions[i] < 90) idx = i;
      }
      // Adjust mapping: landing(0), why(1), step1(2), ..., step5(6)
      setCurrentStep(
        idx < 1 ? 0 :
        idx < 2 ? 1 :
        idx < 3 ? 2 :
        idx < 4 ? 3 :
        idx < 5 ? 4 :
        idx < 6 ? 5 : 6
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Add step x of total above cards (mobile)
  const progressText = `Step ${Math.min(currentStep + 1, progressSteps.length)} of ${progressSteps.length}`;

  return (
    <div className="bg-remix-gradient min-h-screen w-full flex flex-col items-center pb-24">
      {/* HERO HEADER */}
      <PlaybookHeader />

      {/* Sticky Progress Bar/Stepper */}
      <ProgressStepper
        steps={progressSteps}
        currentStep={currentStep}
        setStep={(stepIdx) => {
          cardRefs.current[stepIdx]?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      />
      {/* Mobile step count text */}
      <div className="w-full text-center font-semibold text-sm text-blue-600 pt-2 pb-0 md:hidden">
        {progressText}
      </div>

      {/* Card Stack */}
      <main className="w-full flex flex-col pt-2 mx-auto items-center">
        {stepCards.map((card, i) => (
          <div ref={el => (cardRefs.current[i] = el)} key={card.heading + i} className="w-full flex flex-col items-center">
            <PlaybookCard {...card} />
            {/* Progress arrow between steps/cards except last */}
            {i < stepCards.length - 1 && (
              <div className="flex items-center justify-center py-1">
                <ArrowDown className="text-slate-300" size={22} strokeWidth={2} />
              </div>
            )}
          </div>
        ))}
        <div className="h-8" />
      </main>
      {/* Sticky bottom mobile CTA */}
      <StickyCtaBar>
        Remix this Playbook for your journey!
      </StickyCtaBar>
    </div>
  );
}
