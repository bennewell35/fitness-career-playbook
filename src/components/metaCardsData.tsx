
import { Medal, Book, Star, Github, Linkedin } from "lucide-react";

export const metaCardsData = [
  {
    type: "motivation" as const,
    content: "Quick win: Share what you've done so far with a friend. Saying it aloud helps you remember and builds motivation!",
  },
  {
    type: "bonus" as const,
    icon: <Medal className="text-yellow-600" size={32} />,
    heading: "Career Boosters & Motivation",
    children: (
      <div className="space-y-2 text-base">
        <div><b>What:</b> Level up your journey with real extras.</div>
        <div><b>Why:</b> Networking and storytelling will get you noticed (and hired) faster.</div>
        <div><b>How:</b> Post your process online, ask a coach for a “day in the life” call, or learn from others’ journeys weekly.</div>
        <div className="text-yellow-900 font-semibold">Motivation: “Everyone starts somewhere. Persistence wins.”</div>
        <div><b>Common Mistake:</b> Comparing your Ch.1 to someone else’s Ch.20. Stay your course!</div>
      </div>
    )
  },
  {
    type: "faq" as const,
    icon: <Book className="text-slate-700" size={28} />,
    heading: "FAQ & Troubleshooter",
    children: (
      <div className="space-y-2 text-base">
        <div><b>Do I need a degree?</b> No, but a cert and good attitude matter most.</div>
        <div><b>How do I get my first client?</b> Start with people you know—ask your network.</div>
        <div><b>What if I mess up?</b> Learn and retry—everyone did at your stage.</div>
        <div className="italic text-blue-600">Still got a burning question? Add your own!</div>
      </div>
    )
  },
  {
    type: "about" as const,
    icon: <Star className="text-yellow-400" size={28} />,
    heading: "About the Creator",
    children: (
      <div className="space-y-2 text-base">
        <div>
          <b>My Story:</b> I switched to fitness coaching after leaving finance. Built skills in strength, mindset, and connection along the way—failures taught me as much as any victory.
        </div>
        <div>
          <b>Why I Built This:</b> “I wanted to provide a friendlier roadmap for new coaches—I know firsthand how lost you can feel at the start. This playbook is what I wish I'd had: simple, welcoming, actionable.”
        </div>
        <div>
          <b>Connect:</b>
          <span className="ml-2">
            <a href="https://github.com/bennewell35" target="_blank" rel="noopener" className="flex gap-1 items-center hover:underline text-slate-800">
              <Github size={16} /> GitHub
            </a>
            <a href="https://linkedin.com/in/jonathan-benjamin-newell-5b450432" target="_blank" rel="noopener" className="flex gap-1 items-center hover:underline text-blue-700 ml-4">
              <Linkedin size={16} /> LinkedIn
            </a>
          </span>
        </div>
      </div>
    )
  },
  {
    type: "engineered" as const,
    icon: <Star className="text-violet-400" size={28} />,
    heading: "How It Was Engineered",
    children: (
      <div className="space-y-2 text-base">
        <div>This playbook was built on Lovable using AI-driven code, rapid preview, and modular design. All steps refactored from a single prompt and vision!</div>
        <div className="italic text-blue-700">Prompt strategy: Reiterate requirements, refactor step cards, modularize feature logic, and keep real users in mind.</div>
      </div>
    )
  }
]
