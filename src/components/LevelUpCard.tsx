
import { FC, ReactNode } from "react";
import { ArrowUp } from "lucide-react";

interface LevelUpCardProps {
  children: ReactNode;
}

const LevelUpCard: FC<LevelUpCardProps> = ({ children }) => (
  <div className="bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 border-2 border-blue-200 text-blue-900 rounded-3xl shadow-card px-6 py-4 max-w-lg mx-auto my-3 flex items-center gap-3 animate-fade-in">
    <ArrowUp className="text-blue-400" size={28} />
    <div className="text-base font-medium">{children}</div>
  </div>
);

export default LevelUpCard;
