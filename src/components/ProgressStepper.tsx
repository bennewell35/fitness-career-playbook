
import { FC } from "react";
import { Check, Star } from "lucide-react";

interface ProgressStepperProps {
  steps: { label: string }[];
  currentStep: number;
  setStep: (step: number) => void;
}

const ProgressStepper: FC<ProgressStepperProps> = ({ steps, currentStep, setStep }) => (
  <nav className="sticky top-0 z-30 bg-white/90 backdrop-blur flex items-center justify-between w-full px-2 py-3 shadow-card">
    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
      {steps.map((step, idx) => (
        <button
          key={step.label}
          onClick={() => setStep(idx)}
          className={`flex flex-col items-center mx-1 px-2 py-1 rounded-lg transition
            ${idx < currentStep ? "bg-green-100 text-green-700" :
              idx === currentStep ? "bg-blue-600 text-white scale-105 shadow font-bold" :
              "bg-slate-100 text-slate-700 opacity-80"}
            `}
          style={{ minWidth: 48 }}
        >
          <span className="text-xs">{idx < currentStep ? <Check size={16} /> : idx + 1}</span>
          <span className="text-[10px] whitespace-nowrap">{step.label}</span>
        </button>
      ))}
    </div>
    <div className="flex items-center ml-2">
      <Star className="text-yellow-400" size={20} />
    </div>
  </nav>
);

export default ProgressStepper;
