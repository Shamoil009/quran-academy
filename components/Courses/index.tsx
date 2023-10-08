"use client";
import React, { useEffect, useState } from "react";
import { COURSES } from "@/constants/courses";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import CourseCard from "../CourseCard";

const Courses = () => {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("courseId");

  const [courseDetail, setCourseDetail] = useState<any>("");

  const findCourseById = () => {
    const idToFindNumber = parseInt(courseId || "");
    const foundCourse = COURSES.find((course) => course.id === idToFindNumber);
    return foundCourse;
  };

  useEffect(() => {
    setCourseDetail(findCourseById());
  }, []);

  return (
    <div>
      <div className="bg-courseDetail flex h-[17rem] lg:h-[28rem] xl:h-[30rem] 2xl:h-[34rem] w-full flex-col justify-center bg-cover px-3 lg:px-10">
        <div className="lg:w-[70%]">
          <h1 className="text-2xl xl:text-3xl 2xl:text-5xl font-semibold text-primaryColor bg-blend-normal">
            Courses
          </h1>
        </div>
      </div>

      {/* Detail section */}
     
      <section className=" bg-courseBgColor my-8 px-6 py-8 text-textPrimaryColor xl:px-8 xl:py-14 2xl:px-10 2xl:py-20   xl:my-14 2xl:my-20">
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
