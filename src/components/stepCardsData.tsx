
import { Book, Dumbbell, Medal, Network, Star } from "lucide-react";

export const stepCardsData = [
  {
    icon: <Book className="text-violet-500" size={40} />,
    heading: "Step 1: Learn the Basics",
    story: "When I first started, I couldn't tell my biceps from my triceps. I just watched short anatomy videos every day for a month, and suddenly gym talk made sense.",
    subheading: "Every coach starts by understanding the body and movement.",
    children: (
      <div className="space-y-2 text-base">
        <div><b>What:</b> Grasp the fundamentals of anatomy, physiology, and movement patterns.</div>
        <div><b>Why:</b> Clients trust coaches who understand the body. It’s your foundation.</div>
        <div><b>How:</b> 20 minutes/day on a YouTube playlist or book—write down something new you learn!</div>
      </div>
    ),
    coachInsight: "You don’t need to memorize every muscle. Focus on major groups and what they do.",
    faq: [
      { q: "What if I can’t afford classes?", a: "Free content on YouTube or public library books work great—consistency matters more than source." }
    ],
    levelUp: "Team up with a friend and quiz each other weekly!",
  },
  {
    icon: <Medal className="text-orange-500" size={40} />,
    heading: "Step 2: Get Certified",
    story: "I chose a cert before I felt 'ready.' That set a real deadline and got me moving, not stuck researching forever.",
    subheading: "Certification opens doors. Don’t overthink—pick one and go!",
    children: (
      <div className="space-y-2 text-base">
        <div><b>What:</b> Pick an accredited certification.</div>
        <div><b>Why:</b> Shows clients and employers you’re serious and credible.</div>
        <div><b>How:</b> Compare ACE, NASM, or ISSA. Register before you feel 'perfectly ready'.</div>
      </div>
    ),
    coachInsight: "The hardest part is committing. Once you register, everything gets easier.",
    faq: [
      { q: "What if I fail?", a: "Most certs let you retake. No shame—nearly everyone does at least once." }
    ],
    levelUp: "Join a free online study group and post about your journey.",
  },
  {
    icon: <Dumbbell className="text-green-600" size={40} />,
    heading: "Step 3: Get Experience",
    story: "I was nervous shadowing my first coach—thought I’d mess up. But all they wanted was help wiping down equipment and asking questions.",
    subheading: "Real-world experience beats any textbook.",
    children: (
      <div className="space-y-2 text-base">
        <div><b>What:</b> Shadow, assist, or run a free session for a friend.</div>
        <div><b>Why:</b> You learn by doing, not just watching.</div>
        <div><b>How:</b> Offer a free session, ask to shadow, or volunteer at a gym. Reflect afterward: What did you learn?</div>
      </div>
    ),
    coachInsight: "My best lessons were from real sessions, not from sitting in class.",
    faq: [
      { q: "What if I’m too shy to ask?", a: "Most coaches remember being new and are happy to help!" }
    ],
    levelUp: "Try coaching someone in a format you haven’t tried—group workout, online call, etc.",
  },
  {
    icon: <Dumbbell className="text-blue-900" size={40} />,
    heading: "Step 4: Start Coaching",
    story: "My first real client was a disaster—lost my timer, forgot the warmup. But we both laughed, and I learned what NOT to do fast.",
    subheading: "Getting paid, even once, changes your mindset forever.",
    children: (
      <div className="space-y-2 text-base">
        <div><b>What:</b> Launch your first paid or group session.</div>
        <div><b>Why:</b> Puts your skills in action and builds confidence fast.</div>
        <div><b>How:</b> Offer an intro session at a big discount or even free; ask for honest feedback every time.</div>
      </div>
    ),
    coachInsight: "Don’t expect perfection. Every ‘pro’ has a first awkward session!",
    faq: [
      { q: "Do I need insurance for first sessions?", a: "If you’re charging, yes. If just helping friends/fam, ask about waivers." }
    ],
    levelUp: "Document your first coaching win and share online—your future self will thank you.",
  },
  {
    icon: <Network className="text-rose-500" size={40} />,
    heading: "Step 5: Go Pro",
    story: "After trying youth, weight loss, and corporate clients, I found my specialty in 1:1 strength and mindset for new adults.",
    subheading: "Find your specialty and expand your impact.",
    children: (
      <div className="space-y-2 text-base">
        <div><b>What:</b> Explore a niche (youth, group, online, etc.)—don’t be afraid to adjust as you go.</div>
        <div><b>Why:</b> Being ‘the go-to’ in even a small area gets you more referrals and satisfaction.</div>
        <div><b>How:</b> Say yes to an opportunity outside your comfort zone—run a clinic, launch an online page, connect with a pro group.</div>
      </div>
    ),
    coachInsight: "The best coaches stay flexible and curious, never thinking they’re done learning.",
    faq: [
      { q: "How do I set my rates?", a: "Ask local coaches what they charge. Don’t undersell your experience." }
    ],
    levelUp: "Collect testimonials and ask for honest reviews. Put them on your website or LinkedIn!",
  },
];
