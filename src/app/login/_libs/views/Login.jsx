import AppIcon from "@/components/general/AppIcon";
import AppLogo from "@/components/general/AppLogo";
import HomeCarousel from "@/components/general/HomeCarousel";
import LocalSwitcher from "@/components/general/LocalSwitcher";
import Image from "next/image";
import React from "react";
import LoginForm from "../forms/LoginForm";
import { Button } from "@/components/ui/button";
import GoogleIcon from "../../../../../public/assets/svg/social/google.js";

import Link from "next/link";
import SupportInfo from "@/components/general/SupportInfo";
import PoweredByInfo from "@/components/general/PoweredByInfo";
import appLogo from "@/assests/img/travo-logo.png";
import travoLogo from "../../../../../public/assets/svg/general/nature-app-icon.svg";
import SectionTitle from "@/components/general/SectionTitle";
import SecondaryButton from "@/components/general/SecondaryButton";
import { useTranslations } from "next-intl";

function Login() {
  const TAuth = useTranslations("Auth");

  return (
    <>
      <div className="hidden  lg:flex flex-grow md:col-span-1   h-screen overflow-hidden">
        <HomeCarousel />
      </div>

      <div className="col-span-2 grid lg:col-span-1 row-span-12 pb-10 px-5  h-full overflow-scroll ">
        <div className="row-span-2 md:row-span-1  w-full ">
          <div className="flex items-center justify-end mt-5">
            <div>
              <LocalSwitcher />
            </div>
          </div>
        </div>

        <div className="row-span-10 md:row-span-11 flex flex-col  pt-6   justify-center gap-4  ">
          <div className="flex items-center justify-center">
            <AppLogo appLogo={appLogo} />
          </div>
          <div className="flex items-center justify-center">
            <AppIcon travoLogo={travoLogo} />
          </div>

          <SectionTitle text={TAuth("signInMsg")} />

          <LoginForm />

          <p className="divider text-center text-base tracking-wide text-muted-foreground font-bold">
            Continue with
          </p>

          <div className="flex items-center justify-center">
            <SecondaryButton text={TAuth("google")} Icon={GoogleIcon} />
          </div>

          <div className="flex items-center justify-center">
            <small className="text-center text-base tracking-wide text-muted-foreground font-bold">
              {TAuth("or")}
            </small>
          </div>

          <div className="flex items-center justify-center gap-3">
            <span className="text-sm font-normal text-muted-foreground">
              {TAuth("dontHaveAccount")}
            </span>

            <Link href="/register">
              <span className="text-sm  text-primary font-bold tracking-wide leading-7">
                {TAuth("signUp")}
              </span>
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center gap-4">
            <SupportInfo />
            <PoweredByInfo />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
