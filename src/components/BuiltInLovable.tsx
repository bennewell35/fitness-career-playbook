
import SectionHeader from "./SectionHeader";
import { Github, Linkedin } from "lucide-react";

const BuiltInLovable = () => (
  <section className="py-12 max-w-3xl mx-auto text-center">
    <SectionHeader
      title="About / How This Was Built"
    />

    <div className="mb-5">
      <p className="text-lg text-slate-800 mb-1 font-semibold">About the Creator</p>
      <p className="mb-4 text-slate-700">
        This site was built by <b>Jonathan Newell</b> for the Lovable Hackathon—remix it, fork it, or connect to collaborate!
      </p>
      <div className="flex items-center justify-center gap-5 mb-4">
        <a
          href="https://linkedin.com/in/jonathan-benjamin-newell-5b450432"
          className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 py-2 px-5 rounded-lg font-medium shadow transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={20} /> LinkedIn
        </a>
        <a
          href="https://github.com/bennewell35"
          className="inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-900 py-2 px-5 rounded-lg font-medium shadow transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={20} /> GitHub
        </a>
      </div>
    </div>

    <div className="rounded-xl border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-blue-50 p-6 shadow-card mb-8 flex flex-col items-center">
      <p className="font-semibold text-slate-900 mb-1">Want to work together or see more?</p>
      <p className="text-slate-700 mb-2">
        Check out my GitHub, connect on LinkedIn, or remix this site and tag me with your version!
      </p>
    </div>

    <div className="text-xs text-slate-400">
      Remix, share, and build your own version using Lovable!
    </div>
  </section>
);

export default BuiltInLovable;
