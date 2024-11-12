import Image from "next/image";
import React from "react";
import logoFull from "../../../public/img/logo-h_70.png";
const SideBarImage: React.FC = () => {
  return (
    <div className="w-[180px] relative">
      <Image src={logoFull} alt="company logo" objectFit="cover" />
    </div>
  );
};

export default SideBarImage;
