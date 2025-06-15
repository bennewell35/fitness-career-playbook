
import { FC } from "react";
import { Book } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaybookHeaderProps {
  className?: string;
}
const PlaybookHeader: FC<PlaybookHeaderProps> = ({ className }) => (
  <header
    className={cn(
      "w-full flex flex-col items-center justify-center py-10 sm:py-16 relative mb-2",
      "bg-gradient-to-br from-pink-100 via-blue-100 to-green-100 shadow-card rounded-b-3xl sm:rounded-b-[2.5rem]",
      className
    )}
  >
    <div className="flex flex-col items-center z-10 w-full max-w-2xl px-4">
      <div className="mb-4 flex items-center justify-center">
        <span className="rounded-full bg-white shadow-lg p-3 sm:p-5 flex items-center">
          <Book className="text-blue-500" size={44} strokeWidth={1.5} />
        </span>
      </div>
      <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-2 text-center drop-shadow-[0_2px_4px_rgba(100,100,200,0.12)]">
        Fitness Career Playbook
      </h1>
      <p className="text-lg sm:text-2xl font-medium text-slate-700 mb-0 text-center max-w-xl">
        Start your journey to becoming a coach or trainer!
      </p>
    </div>
  </header>
);

export default PlaybookHeader;
