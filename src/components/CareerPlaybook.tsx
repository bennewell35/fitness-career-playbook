import { useState, useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import ProgressStepper from "./ProgressStepper";
import PlaybookHeader from "./PlaybookHeader";
import StickyCtaBar from "./StickyCtaBar";
import MotivationCard from "./MotivationCard";
import LevelUpCard from "./LevelUpCard";
import ShareCta from "./ShareCta";
import StepCard from "./StepCard";
import { stepCardsData } from "./stepCardsData";
import { metaCardsData } from "./metaCardsData";

const progressSteps = [
  { label: "Basics" },
  { label: "Cert" },
  { label: "XP" },
  { label: "Coach" },
  { label: "Pro" }
];

export default function CareerPlaybook() {
  const [currentStep, setCurrentStep] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll tracking for sticky progress
  // Only reference step cards (not meta/motivation/about cards)
  const handleScroll = () => {
    const positions = cardRefs.current.map(ref => ref?.getBoundingClientRect().top ?? Infinity);
    let idx = 0;
    for (let i = 0; i < positions.length; ++i) {
      if (positions[i] < 90) idx = i;
    }
    setCurrentStep(idx);
  };

  // Attach scroll on mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progressText = `Step ${Math.min(currentStep + 1, progressSteps.length)} of ${progressSteps.length}`;

  // Insert motivation card after step 2
  const mainCards = [
    ...stepCardsData.map((card, i) => ({ ...card, refIdx: i })),
  ];

  // Insert a motivation card after step 2
  mainCards.splice(
    2,
    0,
    { type: "motivation", content: metaCardsData[0].content, refIdx: 1000 } // Arbitrary refIdx for non-step cards
  );

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
        {mainCards.map((card, i) => (
          <div
            ref={el => card.refIdx < stepCardsData.length ? (cardRefs.current[card.refIdx] = el) : null}
            key={card.heading ? card.heading : `motivation-${i}`}
            className="w-full flex flex-col items-center animate-fade-in"
          >
            {card.type === "motivation" ? (
              <MotivationCard>{card.content}</MotivationCard>
            ) : (
              <>
                <StepCard {...card} />
                {card.levelUp && <LevelUpCard>{card.levelUp}</LevelUpCard>}
              </>
            )}
            {/* Progress arrow between cards except last */}
            {i < mainCards.length - 1 && (
              <div className="flex items-center justify-center py-1">
                <ArrowDown className="text-slate-300" size={22} strokeWidth={2} />
              </div>
            )}
          </div>
        ))}
        {/* Render meta cards (motivation, bonus, FAQ, about, engineered) */}
        {metaCardsData.slice(1).map((meta, idx) => (
          <div key={meta.heading || meta.type} className="w-full flex flex-col items-center animate-fade-in">
            {meta.type === "bonus" && (
              <>
                <MotivationCard>
                  {meta.heading && <span className="font-bold">{meta.heading}: </span>}
                  {meta.children}
                </MotivationCard>
              </>
            )}
            {meta.type === "faq" && (
              <MotivationCard>
                {meta.heading && <span className="font-bold">{meta.heading}: </span>}
                {meta.children}
              </MotivationCard>
            )}
            {meta.type === "about" && (
              <MotivationCard>
                {meta.heading && <span className="font-bold">{meta.heading}: </span>}
                {meta.children}
              </MotivationCard>
            )}
            {meta.type === "engineered" && (
              <MotivationCard>
                {meta.heading && <span className="font-bold">{meta.heading}: </span>}
                {meta.children}
              </MotivationCard>
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

// This file is now quite long. Consider breaking out rendering logic for each card type further for future maintenance.
