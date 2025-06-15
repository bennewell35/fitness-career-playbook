
import SectionHeader from "./SectionHeader";
import { Star } from "lucide-react";

const BuiltInLovable = () => (
  <section className="py-12 max-w-3xl mx-auto text-center">
    <SectionHeader
      title="About This Site & How to Build Your Own"
      icon={<Star className="text-yellow-500" size={28}/>}
    />
    <p className="text-lg text-slate-800 mb-5">
      This toolkit was built entirely in <b>Lovable</b>, with no external code or paid APIs.
      Every section is fully remixable so you can launch your own fitness hub in just minutes.
    </p>
    <div className="rounded-xl border bg-gradient-to-br from-green-50 to-blue-50 p-6 shadow-card mb-8">
      <p className="font-semibold text-slate-800">Want to learn how?</p>
      <p className="text-slate-700">
        Remix this site, check the “How To” notes, or start your own from the landing prompt!
      </p>
    </div>
    <div className="text-sm text-slate-500">
      Questions? Connect on <a className="text-blue-600 hover:underline font-semibold" href="#">LinkedIn</a> or remix your own!
    </div>
  </section>
);

export default BuiltInLovable;
