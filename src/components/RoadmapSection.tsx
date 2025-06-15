
import { FC } from "react";
import { Check, Star, Edit, Plus, Book, Calendar } from "lucide-react";
import SectionHeader from "./SectionHeader";
import RemixCta from "./RemixCta";

const steps = [
  {
    icon: <Check className="text-green-500" />,
    title: "Get Certified",
    tips: [
      "Research certs: ACE, NASM, CSCS, RRCA (running), etc.",
      "Enroll and complete requirements."
    ]
  },
  {
    icon: <Calendar className="text-blue-500" />,
    title: "Build Experience",
    tips: [
      "Coach friends/family, volunteer or intern at gyms/clubs.",
      "Log 50+ sessions for portfolio."
    ]
  },
  {
    icon: <Book className="text-violet-500" />,
    title: "Develop Your Brand",
    tips: [
      "Build a website/social presence.",
      "Share free tips or short programs."
    ]
  },
  {
    icon: <Star className="text-yellow-400" />,
    title: "Land Your First Clients",
    tips: [
      "Use word-of-mouth, social proof, or local partnerships.",
      "Offer 'first session free' or 'group deals'."
    ]
  },
  {
    icon: <Edit className="text-sky-400" />,
    title: "Keep Growing",
    tips: [
      "Keep learning (CEUs, shadowing, mentorship).",
      "Collect testimonials and upskill (nutrition, rehab, online coaching)."
    ]
  }
];

const RoadmapSection: FC = () => (
  <section className="py-12 md:py-20 max-w-5xl mx-auto">
    <SectionHeader
      title="Remixable Roadmap: How to Become a Fitness Coach"
      subtitle="Remix for run coaching, group training, nutrition—step-by-step cards below."
      icon={<Star className="text-yellow-500" size={32} />}
    />
    <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-6">
      {steps.map((s, i) => (
        <div
          key={i}
          className="flex-1 min-w-[220px] rounded-2xl bg-gradient-to-br from-blue-50 to-pink-50 shadow-card p-6 border border-slate-100 flex flex-col"
        >
          <div className="flex items-center gap-2 mb-1">{s.icon}<span className="font-bold text-lg">{s.title}</span></div>
          <ul className="text-slate-700 mt-2 list-disc list-inside space-y-1">
            {s.tips.map((tip) => <li key={tip}>{tip}</li>)}
          </ul>
        </div>
      ))}
    </div>

    <aside className="mt-10 flex flex-col md:flex-row gap-6">
      <div className="flex-1 bg-white/80 rounded-xl border shadow p-5">
        <h4 className="font-bold text-lg text-slate-900 mb-3">
          Career Tools
        </h4>
        <ul className="text-slate-700 space-y-2 text-[15px]">
          <li>Remix this roadmap for nutrition coaching, group, or online!</li>
          <li><a className="story-link text-blue-600 hover:underline font-semibold" href="#">Downloadable Portfolio Template</a></li>
          <li><a className="story-link text-blue-600 hover:underline font-semibold" href="#">Sample Coaching Scripts</a></li>
          <li><a className="story-link text-blue-600 hover:underline font-semibold" href="#">Interview Questions PDF</a></li>
        </ul>
      </div>
      <div className="flex items-center">
        <RemixCta size="md" iconRight={<Edit size={24}/>} >
          Remix This Roadmap
        </RemixCta>
      </div>
    </aside>
  </section>
);

export default RoadmapSection;
