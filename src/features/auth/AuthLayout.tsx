import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthLayout = ({
  children,
  title = "Start Your Travel Journey",
  descrition = "Sign in with Google to explore AI-generated itineraries, trending destinations, and much more"
}: {
  children: React.ReactNode;
  title?: string;
  descrition: string;
}) => {
  return (
    <main
      className="py-20 lg:h-screen min-h-screen bg-center bg-cover bg-no-repeat overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url("/images/authbg.svg")`,
      }}
    >
      <div className="relative z-10 w-full max-w-[495px] mx-auto px-2  lg:px-0">
        <div className="bg-white rounded-2xl p-6 shadow-card-lg space-y-6">
          <div className="text-center space-y-6">
               <div className="flex items-center justify-center gap-1.5">
            <Link href="/" className="">
              <Image
                src={"/images/logo.png"}
                alt="logo"
                width={30}
                height={30}
                priority
                className="mx-auto"
              />
            </Link>
            <p className="text-[28px] leading-7 font-jakarta font-bold">Travique</p>
               </div>
            <h2 className="font-semibold text-center lg:text-[28px] text-base leading-[100%] font-figtree text-[#1F1F36]">
              {title}
            </h2>
            <p className="text-xl leading-7 text-[#7F7E83] font-figtree">{descrition}</p>
          </div>
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
