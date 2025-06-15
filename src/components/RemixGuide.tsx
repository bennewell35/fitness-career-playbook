
import SectionHeader from "./SectionHeader";
import RemixCta from "./RemixCta";

const RemixGuide = () => (
  <section className="py-12 max-w-3xl mx-auto text-center">
    <SectionHeader
      title="How to Remix, Edit, and Share"
      icon={<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#D6EFFF"/><path d="M9 12l2 2 4-4" stroke="#439AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
    />
    <ol className="text-left text-slate-800 mx-auto text-lg space-y-3 max-w-2xl mb-7">
      <li><b>Remix Any Section:</b> Click the “Remix” button on any plan or roadmap.</li>
      <li><b>Edit for Your Needs:</b> Tweak tables, tips, or steps to fit your schedule or goals.</li>
      <li><b>Publish or Download:</b> Instantly publish your version or download as PDF.</li>
      <li><b>Share:</b> Use the built-in share link or post on socials—tag <b>#RemixFitnessJourney</b></li>
    </ol>
    <RemixCta size="lg">
      Remix Your Fitness Journey Now →
    </RemixCta>
  </section>
);

export default RemixGuide;
