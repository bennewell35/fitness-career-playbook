
import { useState, useEffect, useRef } from "react";
import { Book, Dumbbell, Medal, Network, Github, Linkedin, ArrowDown, Download, Star } from "lucide-react";
import ProgressStepper from "./ProgressStepper";
import { PlaybookCard } from "./PlaybookCard";
import RemixCta from "./RemixCta";
import StickyCtaBar from "./StickyCtaBar";

// STEP DATA - ordered as steps in playbook
const stepCards = [
  {
    type: "landing" as const,
    icon: <Book className="text-blue-500" size={36} />,
    heading: "Fitness Career Playbook",
    subheading: "Step-by-step roadmap to becoming a coach, trainer, or strength pro.",
    cta: <RemixCta size="md">Start Your Journey</RemixCta>,
  },
  {
    type: "why" as const,
    icon: <Medal className="text-yellow-400" size={32} />,
    heading: "Why Coaching?",
    children: (
      <>
        <div>High-impact work. Every coach changes lives.</div>
        <div>Booming $60B+ industry, huge demand.</div>
        <div>Flexible paths—schools, gyms, online.</div>
      </>
    ),
  },
  {
    type: "step" as const,
    icon: <Book className="text-violet-500" size={30} />,
    heading: "Step 1: Learn the Basics",
    checklist: [
      "Study anatomy/physiology/nutrition basics",
      "Complete 3+ free courses or YouTube lessons",
      "Take short notes on core concepts",
    ],
    children: (
      <>
        <span>
          Great resources:
          <a href="https://www.acefitness.org/education-and-resources/" target="_blank" className="underline text-blue-700 ml-1">ACE</a>,
          <a href="https://www.nasm.org/fitness-certifications" target="_blank" className="underline text-blue-700 ml-1">NASM</a>,
          <a href="https://www.youtube.com/c/JeffNippard" target="_blank" className="underline text-blue-700 ml-1">YouTube</a>
        </span>
      </>
    ),
    tip: <>Coach’s Tip: “Make learning daily. Start a habit, not a marathon.”</>,
    downloadLink: "https://www.notion.so/Study-Planner-Template-Example", // Example link
    downloadLabel: "Download Study Planner",
  },
  {
    type: "step" as const,
    icon: <Medal className="text-orange-400" size={30} />,
    heading: "Step 2: Get Certified",
    checklist: [
      "Choose and register for a beginner certification (ACE, NASM, ISSA)",
      "Join a study group or find a study partner",
      "Take 2+ practice tests before exam date",
    ],
    children: (
      <>
        <span>
          Top starter certs:
          <a href="https://www.acefitness.org/" target="_blank" className="underline text-blue-700 ml-1">ACE</a>,
          <a href="https://www.nasm.org/" target="_blank" className="underline text-blue-700 ml-1">NASM</a>,
          <a href="https://www.issaonline.com/" target="_blank" className="underline text-blue-700 ml-1">ISSA</a>
        </span>
      </>
    ),
    tip: <>Coach’s Tip: “Don’t wait for perfect knowledge. Apply as you study!”</>,
    downloadLink: "https://www.notion.so/Certification-Comparison-Chart", // Example link
    downloadLabel: "Download Cert Chart",
  },
  {
    type: "step" as const,
    icon: <Dumbbell className="text-green-600" size={30} />,
    heading: "Step 3: Build Experience",
    checklist: [
      "Shadow at least one pro coach",
      "Volunteer with friends/gym groups",
      "Keep a simple session log (Google Doc/Notion)",
    ],
    tip: <>Find a mentor who <b>coaches</b>, not just trains. Journal what you observe.</>,
    downloadLink: "https://www.notion.so/Simple-Coaching-Log", // Example link
    downloadLabel: "Download Session Log Template",
  },
  {
    type: "step" as const,
    icon: <Dumbbell className="text-blue-800" size={30} />,
    heading: "Step 4: Start Coaching",
    checklist: [
      "Run a small group session or virtual call",
      "Collect feedback from 1-2 clients",
      "Log each session’s lesson learned",
    ],
    tip: <>Coach’s Tip: “Every session = an experiment. You learn from doing.”</>,
    downloadLink: "https://www.notion.so/Coaching-Feedback-Form", // Example link
    downloadLabel: "Get Feedback Form",
  },
  {
    type: "step" as const,
    icon: <Network className="text-rose-500" size={30} />,
    heading: "Step 5: Go Pro",
    checklist: [
      "Pick a specialization (sports/nutrition/rehab/etc.)",
      "Create a resume or online portfolio",
      "Collect 3+ testimonials",
    ],
    children: (
      <>
        <div>
          <a href="https://www.notion.so/Personal-Coach-Portfolio-Template-Example" target="_blank"
             className="underline text-blue-700 font-medium">Portfolio/Resume Template</a>
        </div>
        <div>
          Join support groups:
          <a href="https://discord.com/invite/fitness" target="_blank" className="underline text-violet-700 ml-1">Discord</a>,
          <a href="https://facebook.com/groups/personaltrainers" target="_blank" className="underline text-blue-700 ml-1">Facebook</a>
        </div>
      </>
    ),
    tip: <>Motivation: “Pros learn for life. The best always out-collaborate.”</>,
    downloadLink: "https://www.notion.so/Personal-Coach-Resume-Template", // Example link
    downloadLabel: "Download Resume",
    quote: "“Only those who will risk going too far can possibly find out how far one can go.” —T.S. Eliot"
  },
  {
    type: "bonus" as const,
    icon: <Medal className="text-yellow-500" size={28} />,
    heading: "Career Boosters & Day in the Life",
    children: (
      <>
        <span className="font-semibold">Sample day: </span>Mix clients, planning, self-care.<br />
        <a href="https://www.notion.so/Personal-Coach-Portfolio-Template-Example" target="_blank" className="underline text-blue-700">
          Free portfolio template
        </a>
        <div>Stand out: Resume tips, strong online brand.</div>
        <div className="mt-2 text-xs text-slate-500">
          “Energy grows with purpose and action.” 
        </div>
      </>
    )
  },
  {
    type: "faq" as const,
    icon: <Book className="text-slate-700" size={28} />,
    heading: "FAQ & Ask the Coach",
    children: (
      <>
        <div><b>Do I need a degree?</b> No, certs and client results matter most.</div>
        <div><b>How to find clients?</b> Start with friends, gyms, social media.</div>
        <div><b>How much can I make?</b> Entry: $20–40/hr. Pros: $60k+. Specialize to earn more.</div>
        <div>Got more questions? Message in a support group—help is always near!</div>
      </>
    ),
  },
  {
    type: "about" as const,
    icon: <Star className="text-yellow-400" size={28} />,
    heading: "My Story & About",
    subheading: "Built by Jonathan Newell",
    children: (
      <>
        <div>
          “I built this playbook after 10+ years in the fitness and education world. Remix, share, and help more people become great coaches!”
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
  },
];

// For progress stepper (shows just the core steps—not intro/about/etc)
const progressSteps = [
  { label: "Start" },
  { label: "Basics" },
  { label: "Certify" },
  { label: "XP" },
  { label: "Coach" },
  { label: "Go Pro" },
];

export default function CareerPlaybook() {
  // Progress tracking - which step is scrolled into view?
  const [currentStep, setCurrentStep] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll tracking for progress bar (on mobile)
  useEffect(() => {
    const onScroll = () => {
      const positions = cardRefs.current.map(
        (ref) => ref?.getBoundingClientRect().top ?? Infinity
      );
      // Find last card that is at or above 80px from top (gap for sticky progress)
      let idx = 0;
      for (let i = 0; i < positions.length; ++i) {
        if (positions[i] < 90) idx = i;
      }
      // Only step cards trigger progress, so index map: intro(0)->step1(2), pro(6)
      setCurrentStep(
        idx < 2 ? 0 : idx < 3 ? 1 : idx < 4 ? 2 : idx < 5 ? 3 : idx < 6 ? 4 : 5
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-remix-gradient min-h-screen w-full flex flex-col items-center pb-24">
      {/* Sticky Progress Bar/Stepper */}
      <ProgressStepper
        steps={progressSteps}
        currentStep={currentStep}
        setStep={(stepIdx) => {
          // Scroll to the relevant step
          const idx = [0, 2, 3, 4, 5, 6][stepIdx] ?? 0;
          cardRefs.current[idx]?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      />
      {/* Card Stack */}
      <main className="w-full max-w-md flex flex-col pt-2 mx-auto">
        {stepCards.map((card, i) => (
          <div ref={el => (cardRefs.current[i] = el)} key={card.heading + i}>
            <PlaybookCard {...card} />
            {/* Show progress arrow between steps/cards except last */}
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
        Remix Playbook / Download Roadmap
      </StickyCtaBar>
    </div>
  );
}

// ... consider refactoring this file (220+ lines!) for better maintainability
