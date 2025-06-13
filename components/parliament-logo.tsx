import type React from "react";
import Image from "next/image";

interface ParliamentLogoProps {
  className?: string;
}

const ParliamentLogo: React.FC<ParliamentLogoProps> = ({ className }) => {
  return (
    <div className={className}>
      <Image
        src="/images/logos/image.png"
        alt="Parliament Logo"
        width={130}
        height={70}
        className="object-contain"
      />
    </div>
  );
};

export default ParliamentLogo;
