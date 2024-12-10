import { useTranslations } from "next-intl";
import React from "react";

function SupportInfo() {
  
  const TAuth = useTranslations('Auth');

  return (
    <div className="text-xs text-slate-500 text-center max-w-sm mx-auto">
      If you're having to log in, please contact our support team at
      +601234567890 for assistance. Powered by Travo Logo
    </div>
  );
}

export default SupportInfo;
