import React from "react";
import travoLogo from '../../../public/assets/svg/general/nature-app-icon.svg'

import Image from "next/image";

function AppIcon({travoLogo}) {
  return (
    <div>
    <Image
        src={travoLogo}
        alt="travo-app-logo"
        className="max-w-20  md:max-w-24"
        
      />
    </div>
  );
}

export default AppIcon;
