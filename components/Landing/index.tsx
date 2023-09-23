import React from "react";
import Header from "../Header";
import Image from "next/image";
import PageTop from "@/public/images/ramadan.jpg";
const Landing = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="bg-tertiaryColor flex items-center justify-between px-10 py-10 text-textPrimaryColor">
          <div className="w-[40%]">
            <h1 className="text-5xl font-semibold">
              Online Quran Learning Platform
            </h1>
            <p className="w-[90%] pt-5 text-3xl">
              An Online Quran Education platform, which provides the facility to
              Learn Quran Online Islamic and Quranic teachings to Muslim
              students across the world in four languages: English, Persian,
              Pashto, and Urdu.
            </p>
          </div>
          <div className="w-[50%]">
          <Image
            src={PageTop}
            height={2000}
            width={2000}
            className="w-full rounded-full"
            alt=""
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
