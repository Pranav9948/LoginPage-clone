import React from "react";
import travoixsLogoImg from "@/assests/img/travoxis-logo.png";
import Link from "next/link";
import Image from "next/image";

function PoweredByInfo() {
  return (
    <div className="text-xs text-slate-500  text-center flex justify-center items-center gap-1">
      <span >Powered by</span>
      <div className="max-w-16">
        <Link href="https://www.travoxis.com">
          <Image src={travoixsLogoImg} alt="Travo Logo" className="" />
        </Link>
      </div>
    </div>
  );
}

export default PoweredByInfo;
