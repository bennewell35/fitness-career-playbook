
import { ArrowRight } from "lucide-react";
import RemixCta from "./RemixCta";

const HeroSection = () => (
  <section className="relative w-full pt-12 pb-24 md:pt-20 md:pb-32 flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_70%_40%,_#ffd6e8,_#d6efff_60%,_#d9ffe5_100%)]">
    <div className="z-10 flex flex-col items-center w-full max-w-2xl px-4 text-center">
      <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-slate-900 leading-tight mb-4 drop-shadow-lg">
        Remix Your Fitness Journey
      </h1>
      <p className="text-xl sm:text-2xl text-slate-800 font-medium mb-6 max-w-xl">
        Build your custom training plan or fitness career roadmap in minutes.
        <br className="hidden sm:inline" />
        Fork, edit, remix, and share—<b>no signup, no paywall, just pure value</b>.
      </p>
      <p className="mb-8 text-md sm:text-lg text-slate-600">
        Welcome to the most remixable fitness toolkit on the web! Get proven training programs,
        a clear coaching career roadmap, and best-in-class educational guides—all free
        and ready to customize for your unique journey.
      </p>
      <RemixCta size="lg" className="bg-gradient-to-br from-pink-200 via-blue-200 to-green-200 rounded-full px-7 py-4 text-xl font-bold text-slate-900 shadow-lg" iconRight={<ArrowRight size={28}/>}>
        Start Remixing Your Plan
      </RemixCta>
    </div>
  </section>
);
export default HeroSection;
