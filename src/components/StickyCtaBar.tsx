
import { FC, ReactNode } from "react";
import RemixCta from "./RemixCta";

interface StickyCtaBarProps {
  children?: ReactNode;
  onClick?: () => void;
}

const StickyCtaBar: FC<StickyCtaBarProps> = ({ children, onClick }) => (
  <div className="fixed bottom-0 left-0 w-full flex justify-center z-50 bg-white/80 py-3 shadow-2xl backdrop-blur md:hidden">
    <div className="w-full max-w-xs flex justify-center">
      <RemixCta size="lg" className="shadow-2xl text-base" onClick={onClick}>
        {children || "Remix Playbook / Download Roadmap"}
      </RemixCta>
    </div>
  </div>
);

export default StickyCtaBar;
