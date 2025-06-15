
import { FC, ReactNode } from "react";
import { Star } from "lucide-react";

interface MotivationCardProps {
  children: ReactNode;
}

const MotivationCard: FC<MotivationCardProps> = ({ children }) => (
  <div className="bg-gradient-to-br from-yellow-50 via-pink-50 to-blue-50 border-2 border-yellow-200 text-yellow-950 rounded-3xl shadow-card px-6 py-5 max-w-lg mx-auto my-4 flex items-center gap-3 animate-fade-in">
    <Star className="text-yellow-400" size={32} />
    <div className="text-lg font-semibold">{children}</div>
  </div>
);

export default MotivationCard;
