"use client";
import React from "react";
import { COURSES } from "@/constants/courses";
import CourseCard from "../CourseCard";

const Courses = () => {
  return (
    <div>
      <div className="flex h-[17rem] w-full flex-col justify-center bg-courseDetail bg-cover px-3 lg:h-[28rem] lg:px-10 xl:h-[30rem] 2xl:h-[34rem]">
        <div className="lg:w-[70%]">
          <h1 className="text-2xl font-semibold text-primaryColor bg-blend-normal xl:text-3xl 2xl:text-5xl">
            Courses
          </h1>
        </div>
      </div>

      {/* Detail section */}

      <section className=" my-8 bg-courseBgColor px-6 py-8 text-textPrimaryColor xl:my-14 xl:px-8 xl:py-14 2xl:my-20   2xl:px-10 2xl:py-20">
        <div className="pb-12 text-center text-xl font-semibold lg:text-2xl xl:text-3xl 2xl:text-4xl">
          We provide varity of courses
        </div>
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-14 sm:justify-between 2xl:gap-x-3">
          {COURSES.map((value: any, index: number) => {
            return (
              <CourseCard
                key={index}
                id={value.id}
                name={value.name}
                image={value.image}
                classType={value.classType}
                timing={value.timing}
                price={value.price}
              />
            );
          })}
        </div>
      </section>

      {/* ---detail section end */}
    </div>
  );
};

export default Courses;
