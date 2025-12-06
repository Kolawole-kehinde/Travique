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
      <div className="relative z-10 w-full max-w-[520px] mx-auto px-2  lg:px-0">
        <div className="bg-white rounded-2xl p-6 shadow-card-lg space-y-6">
          <div className="text-center space-y-6">
            <Link href="/" className="flex justify-center">
              <Image
                src={"/images/logo.png"}
                alt="logo"
                width={30}
                height={30}
                priority
                className="mx-auto"
              />
            </Link>
            <h2 className="font-bold text-center lg:text-2xl text-base max-w-[337px] w-full mx-auto leading-[100%] font-raleway text-[#303030]">
              {title}
            </h2>
            <p>{descrition}</p>
          </div>
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
