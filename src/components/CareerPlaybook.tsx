import { useState, useEffect, useRef } from "react";
import { Book, Dumbbell, Medal, Network, Linkedin, ArrowDown, Star, Github } from "lucide-react";
import ProgressStepper from "./ProgressStepper";
import { PlaybookCard } from "./PlaybookCard";
import RemixCta from "./RemixCta";
import StickyCtaBar from "./StickyCtaBar";
import PlaybookHeader from "./PlaybookHeader";

/**
 * Cards for each section.
 * NOTE: No duplicate Hero card—header above cards already covers this.
 */
const stepCards = [
  {
    type: "why" as const,
    icon: <Book className="text-blue-500" size={32} />,
    heading: "Welcome: Fitness Career Playbook",
    subheading: "Your step-by-step roadmap to a career in coaching, training, or strength & conditioning.",
    children: (
      <>
        <div className="mb-2 text-base text-center">
          <i>
            “Starting out in fitness? I wish I’d had this playbook when I was in your shoes. Now you can skip the guesswork and focus on what works. Ready to start?”
          </i>
        </div>
      </>
    ),
  },
  {
    type: "why" as const,
    icon: <Medal className="text-yellow-400" size={32} />,
    heading: "Why Coaching?",
    children: (
      <div className="text-left space-y-2 text-base">
        <div>
          <b>What:</b> Fitness coaching is one of the most rewarding, flexible, and fast-growing career paths out there.
        </div>
        <div>
          <b>Why:</b>
          <ul className="list-disc list-inside ml-4">
            <li>You make a real impact on people’s health and confidence.</li>
            <li>There’s demand everywhere: schools, gyms, teams, online.</li>
            <li>No two days are the same.</li>
          </ul>
        </div>
        <div className="bg-green-100 text-green-800 rounded-xl px-5 py-2 mt-2 font-medium">
          Coach’s Insight: “The fitness industry needs more coaches who actually care—so if you’re reading this, you’re in the right place.”
        </div>
        <div>
          <b>Common Mistake:</b> Thinking you can’t make a difference as a beginner.
        </div>
        <div>
          <b>Micro-FAQ:</b>
          <div>
            <span className="font-medium">“Am I too young/old to coach?”</span> <span className="block">Nope—coaches succeed at every age!</span>
          </div>
        </div>
        <div className="italic text-blue-600 mt-2">If you want to help others, you’re in the right place.</div>
      </div>
    ),
  },
  {
    type: "step" as const,
    icon: <Book className="text-violet-500" size={30} />,
    heading: "Step 1: Learn the Basics",
    children: (
      <div className="text-left space-y-2 text-base">
        <div>
          <b>What:</b> Every great coach starts by understanding the body and how it moves.
        </div>
        <div>
          <b>Why:</b>
          <ul className="list-disc list-inside ml-4">
            <li>Knowing anatomy, physiology, and nutrition basics sets you apart from hobbyists.</li>
            <li>You’ll answer client questions confidently.</li>
          </ul>
        </div>
        <div>
          <b>How:</b>
          <ul className="list-disc list-inside ml-4">
            <li>Block out 30 min/day for study or anatomy/nutrition videos.</li>
            <li>Write down one thing you learned each day (it adds up fast!).</li>
          </ul>
        </div>
        <div className="bg-green-100 text-green-800 rounded-xl px-5 py-2 mt-2 font-medium">
          Pro Tip: “You don’t need a degree to get started—just curiosity and consistency.”
        </div>
        <div>
          <b>Common Mistake:</b> Waiting until you feel “ready.” Just start with what you’ve got!
        </div>
        <div>
          <b>Micro-FAQ:</b>
          <div>
            <span className="font-medium">“Do I need to memorize every muscle?”</span> <span className="block">No—focus on big muscle groups and movement patterns first.</span>
          </div>
        </div>
        <div className="italic text-blue-600 mt-2">
          Consistent baby steps outpace random big leaps—just keep learning.
        </div>
      </div>
    ),
  },
  {
    type: "step" as const,
    icon: <Medal className="text-orange-400" size={30} />,
    heading: "Step 2: Get Certified",
    children: (
      <div className="text-left space-y-2 text-base">
        <div>
          <b>What:</b> A certification proves you know your stuff and opens career doors.
        </div>
        <div>
          <b>Why:</b>
          <ul className="list-disc list-inside ml-4">
            <li>Employers and clients trust certified coaches.</li>
            <li>Covers legal basics (liability insurance, CPR, etc).</li>
          </ul>
        </div>
        <div>
          <b>How:</b>
          <ul className="list-disc list-inside ml-4">
            <li>Research ACE, NASM, ISSA—pick the one that matches your goals.</li>
            <li>Set your exam date as a concrete goal.</li>
            <li>Join a free study group or online forum for support.</li>
          </ul>
          <div className="mt-1">
            <b>Cert Info:</b>
            <span className="ml-2">
              <a href="https://www.acefitness.org/education-and-resources/" target="_blank" className="underline text-blue-700 mr-2">ACE</a>|
              <a href="https://www.nasm.org/fitness-certifications" target="_blank" className="underline text-blue-700 mx-2">NASM</a>|
              <a href="https://www.issaonline.com/" target="_blank" className="underline text-blue-700 ml-2">ISSA</a>
            </span>
          </div>
        </div>
        <div className="bg-green-100 text-green-800 rounded-xl px-5 py-2 mt-2 font-medium">
          Pro Tip: “Don’t get stuck picking the ‘perfect’ cert. Get one, start coaching, then add more if you want to specialize.”
        </div>
        <div>
          <b>Common Mistake:</b> Over-prepping or procrastinating. Register for the test, then study with purpose.
        </div>
        <div>
          <b>Micro-FAQ:</b>
          <div>
            <span className="font-medium">“What if I fail the exam?”</span> <span className="block">Most have retake options—don’t stress!</span>
          </div>
        </div>
        <div className="italic text-blue-600 mt-2">
          Take action—imperfect progress beats perfect intentions.
        </div>
      </div>
    )
  },
  {
    type: "step" as const,
    icon: <Dumbbell className="text-green-600" size={30} />,
    heading: "Step 3: Get Experience",
    children: (
      <div className="text-left space-y-2 text-base">
        <div>
          <b>What:</b> Nothing beats learning from doing.
        </div>
        <div>
          <b>Why:</b>
          <ul className="list-disc list-inside ml-4">
            <li>Real-life experience is what builds confidence and gets you hired.</li>
          </ul>
        </div>
        <div>
          <b>How:</b>
          <ul className="list-disc list-inside ml-4">
            <li>
              Ask a coach or gym if you can shadow or help with a class.
              <span className="block mt-1 bg-slate-100 rounded px-2 py-1 select-all text-xs mb-1">
                Copy/paste: “Hi, I’m new to coaching and eager to learn. Could I observe or help out at a session?”
              </span>
            </li>
            <li>Offer free sessions to friends/family and ask for honest feedback.</li>
            <li>Start a simple log: Who did I help? What did I learn? What would I do differently?</li>
          </ul>
        </div>
        <div className="bg-green-100 text-green-800 rounded-xl px-5 py-2 mt-2 font-medium">
          Coach’s Insight: “My first real lessons didn’t come from books—they came from helping friends one-on-one.”
        </div>
        <div>
          <b>Common Mistake:</b> Waiting for a “perfect” opportunity. Take action, even if it’s informal.
        </div>
        <div>
          <b>Micro-FAQ:</b>
          <div>
            <span className="font-medium">“What if I’m nervous?”</span> <span className="block">Everyone is at first. That’s how you grow!</span>
          </div>
        </div>
        <div className="italic text-blue-600 mt-2">
          Start before you’re ready—confidence comes from doing!
        </div>
      </div>
    ),
  },
  {
    type: "step" as const,
    icon: <Dumbbell className="text-blue-800" size={30} />,
    heading: "Step 4: Start Coaching",
    children: (
      <div className="text-left space-y-2 text-base">
        <div>
          <b>What:</b> Your first paid or group session is a milestone—own it!
        </div>
        <div>
          <b>Why:</b>
          <ul className="list-disc list-inside ml-4">
            <li>This is where you really learn what works (and what doesn’t).</li>
          </ul>
        </div>
        <div>
          <b>How:</b>
          <ul className="list-disc list-inside ml-4">
            <li>Offer free or low-cost intro sessions to build experience and word of mouth.</li>
            <li>Always ask for feedback at the end: “What did you like? What would you change?”</li>
            <li>Keep a journal—track what works and what flops.</li>
          </ul>
        </div>
        <div className="bg-green-100 text-green-800 rounded-xl px-5 py-2 mt-2 font-medium">
          Pro Tip: “Every ‘pro’ had a first awkward session. The difference is, they kept going.”
        </div>
        <div>
          <b>Common Mistake:</b> Not asking for feedback, or taking criticism personally.
        </div>
        <div>
          <b>Micro-FAQ:</b>
          <div>
            <span className="font-medium">“Do I need insurance for first sessions?”</span>
            <span className="block">If you’re charging, yes. If helping friends, ask about waivers.</span>
          </div>
        </div>
        <div className="italic text-blue-600 mt-2">
          Celebrate your firsts—they’re proof you’re leveling up!
        </div>
      </div>
    ),
  },
  {
    type: "step" as const,
    icon: <Network className="text-rose-500" size={30} />,
    heading: "Step 5: Go Pro",
    children: (
      <div className="text-left space-y-2 text-base">
        <div>
          <b>What:</b> Time to get serious—specialize, network, and keep growing.
        </div>
        <div>
          <b>Why:</b>
          <ul className="list-disc list-inside ml-4">
            <li>Specializations (youth, sports, rehab, online, group, nutrition) open new doors and increase your value.</li>
          </ul>
        </div>
        <div>
          <b>How:</b>
          <ul className="list-disc list-inside ml-4">
            <li>Try a niche: run a kids’ clinic, partner with a business, or start a social media page.</li>
            <li>Collect testimonials (even informal ones) from everyone you help.</li>
            <li>Join a professional association or attend a local workshop.</li>
          </ul>
        </div>
        <div className="bg-green-100 text-green-800 rounded-xl px-5 py-2 mt-2 font-medium">
          Coach’s Tip: “The best coaches are always learning—find a mentor and stay curious.”
        </div>
        <div>
          <b>Common Mistake:</b> Trying to be everything to everyone—focus on your strengths!
        </div>
        <div>
          <b>Micro-FAQ:</b>
          <div>
            <span className="font-medium">“How do I set my rates?”</span> <span className="block">Research local prices—don’t undersell your value.</span>
          </div>
        </div>
        <div className="italic text-blue-600 mt-2">
          You’re not an imposter. You’re a rising pro.
        </div>
      </div>
    )
  },
  {
    type: "bonus" as const,
    icon: <Medal className="text-yellow-500" size={28} />,
    heading: "Career Boosters & Motivation",
    children: (
      <div className="text-left space-y-2 text-base">
        <div>
          <b>What:</b> Level up with real-world extras.
        </div>
        <div>
          <b>Why:</b>
          <ul className="list-disc list-inside ml-4">
            <li>Networking and storytelling get you noticed—and hired.</li>
          </ul>
        </div>
        <div>
          <b>How:</b>
          <ul className="list-disc list-inside ml-4">
            <li>Post your journey online (Instagram, LinkedIn, Facebook).</li>
            <li>Ask coaches for a “day in the life” conversation.</li>
            <li>Read/watch one career story a week; stay inspired.</li>
          </ul>
        </div>
        <div className="bg-green-100 text-green-800 rounded-xl px-5 py-2 mt-2 font-medium">
          Motivation: “Everyone starts somewhere. The ones who succeed are the ones who don’t quit.”
        </div>
        <div>
          <b>Common Mistake:</b> Comparing your Chapter 1 to someone’s Chapter 20. Run your own race.
        </div>
      </div>
    ),
  },
  {
    type: "faq" as const,
    icon: <Book className="text-slate-700" size={28} />,
    heading: "FAQ & Troubleshooter",
    children: (
      <div className="text-left space-y-3 text-base">
        <div>
          <b>Do I need a degree?</b> No, but it can help. Most jobs require certs and real-world skills.
        </div>
        <div>
          <b>How do I get my first client?</b> Start with your network—friends, family, gym contacts.
        </div>
        <div>
          <b>How much can I make?</b> Depends on your location, niche, and hustle—many start part-time.
        </div>
        <div>
          <b>What if I mess up?</b> Everyone does. Learn, adapt, keep going.
        </div>
        <div className="italic text-blue-600">
          Still got a burning question? Add it here as you go!
        </div>
      </div>
    ),
  },
  {
    type: "about" as const,
    icon: <Star className="text-yellow-400" size={28} />,
    heading: "About & Connect",
    subheading: "Built by Jonathan Newell",
    children: (
      <div className="text-left space-y-3 text-base">
        <div>
          <b>Why I Built This:</b> “I’ve helped people at every stage—finance execs, college grads, career switchers—start or level up their journey in fitness and coaching. I built this playbook to make that first step less scary and more actionable. If you remix this, let me know—I’d love to see what you build.”
        </div>
        <div>
          <b>Connect:</b>
          <div className="flex gap-3 justify-center mt-2">
            <a href="https://github.com/bennewell35" target="_blank" rel="noopener" className="flex items-center gap-1 hover:underline text-slate-800">
              <Github size={18} /> GitHub
            </a>
            <a href="https://linkedin.com/in/jonathan-benjamin-newell-5b450432" target="_blank" rel="noopener" className="flex items-center gap-1 hover:underline text-blue-700">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    )
  }
];

// Step tracker is now: Why, Basics, Cert, XP, Coach, Pro, Boost
const progressSteps = [
  { label: "Why" },
  { label: "Basics" },
  { label: "Cert" },
  { label: "XP" },
  { label: "Coach" },
  { label: "Pro" },
  { label: "Boost" },
];

export default function CareerPlaybook() {
  const [currentStep, setCurrentStep] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Custom scroll logic to assign steps for the 7 unique sections
  useEffect(() => {
    const onScroll = () => {
      const positions = cardRefs.current.map(
        (ref) => ref?.getBoundingClientRect().top ?? Infinity
      );
      let idx = 0;
      for (let i = 0; i < positions.length; ++i) {
        if (positions[i] < 90) idx = i;
      }
      setCurrentStep(idx);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

// This file is now >240 lines long.
// Suggestion: Next refactor, break major step/detail card data out into a separate data file
// and split subcomponents; keep just orchestration here.
