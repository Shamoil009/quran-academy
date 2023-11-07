import { COURSES } from "@/constants/courses";
import React from "react";
import { Alegreya} from "next/font/google";

const alegreya = Alegreya({
  subsets: ['latin'],

  // weight: "700",
  display: 'swap',
});
const Pricing = () => {
  return (
    <div>
      <div className="flex h-[17rem] w-full flex-col justify-center bg-courseDetail bg-cover px-3 lg:h-[28rem] lg:px-10 xl:h-[30rem] 2xl:h-[34rem]">
        <div className="lg:w-[70%]">
          <h1 className="text-2xl font-semibold text-primaryColor bg-blend-normal xl:text-3xl 2xl:text-5xl">
            Pricing
          </h1>
        </div>
      </div>

      {/* Detail section */}

      <section className=" flex flex-col items-center py-8 text-base text-textPrimaryColor lg:text-lg xl:py-12 xl:text-xl 2xl:py-16 2xl:text-3xl">
        <div className="w-[88%] md:w-[70%]">
          <h1 className={`${alegreya.className} pb-5 lg:pb-7 2xl:pb-10 text-center text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-semibold capitalize underline`}>
            Fee Schedule
          </h1>

          <div className="pt-5 font-medium leading-relaxed">
            <ol className="py-3 font-medium lg:list-decimal lg:pl-8">
              {COURSES.map((value: any, index: any) => {
                return (
                  <li key={index}>
                    <div className="flex gap-1 justify-between">
                      <p >{value.feeName}</p>
                      <p className="min-w-fit">$ {value.price}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
