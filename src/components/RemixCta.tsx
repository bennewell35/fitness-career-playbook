
import { FC } from "react";

interface RemixCtaProps {
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  iconRight?: React.ReactNode;
  children: React.ReactNode;
}
const RemixCta: FC<RemixCtaProps> = ({
  onClick,
  className = "",
  size = "md",
  iconRight,
  children,
}) => {
  const sizes = {
    sm: "px-4 py-2 text-base",
    md: "px-6 py-3 text-lg",
    lg: "px-7 py-4 text-xl"
  }
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-full border-none shadow-card transition-all duration-200 bg-gradient-to-br from-pink-200 via-blue-200 to-green-200 hover:from-pink-100 hover:to-green-100 focus:outline-none focus:ring-2 focus:ring-primary/30 font-semibold ${sizes[size]} ${className}`}
    >
      {children}
      {iconRight && <span>{iconRight}</span>}
    </button>
  );
};

export default RemixCta;
