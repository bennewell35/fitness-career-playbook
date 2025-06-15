
import { FC } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
}
const SectionHeader: FC<SectionHeaderProps> = ({ title, subtitle, icon, className }) => (
  <div className={`mb-6 flex flex-col items-center text-center ${className || ""}`}>
    {icon && <div className="mb-2">{icon}</div>}
    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
      {title}
    </h2>
    {subtitle && <p className="mt-3 text-lg text-slate-600">{subtitle}</p>}
  </div>
);

export default SectionHeader;
