import Image from "next/image";
import React from "react";
import logoSquare from "../../../public/img/logo-square.png";
import logoText from "../../../public/img/logo-text.png";

import { useSidebar } from "@/components/ui/sidebar";

const SideBarImage: React.FC = () => {
  const { state, isMobile } = useSidebar();
  return (
    <div className="px-2 relative max-w-[220px] overflow-hidden">
      {state === "expanded" || isMobile ? (
        <div className="flex gap-1">
          <Image
            src={logoSquare}
            alt="company logo"
            height={70}
            width={50}
            className=""
          />
          <Image
            src={logoText}
            alt="company logo"
            height={70}
            width={350}
            className=""
          />
        </div>
      ) : (
        <Image
          src={logoSquare}
          alt="company logo"
          height={70}
          width={50}
          className="max-h-7 max-w-5"
        />
      )}
    </div>
  );
};

export default SideBarImage;
