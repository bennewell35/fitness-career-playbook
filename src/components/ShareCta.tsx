
import { FC } from "react";
import { Link, Share2 } from "lucide-react";
import RemixCta from "./RemixCta";

const ShareCta: FC = () => (
  <div className="flex flex-row gap-2 mt-2 mb-3 justify-center">
    <RemixCta size="sm" className="border" iconRight={<Link size={18} />}>
      Remix this Playbook
    </RemixCta>
    <RemixCta size="sm" className="border bg-blue-50" iconRight={<Share2 size={18} />}>
      Share your version
    </RemixCta>
  </div>
);

export default ShareCta;
