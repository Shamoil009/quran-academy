"use client";
import React, { useEffect, useState } from "react";
import { COURSES } from "@/constants/courses";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const CourseDetail = () => {
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
            Course Detail
          </h1>
        </div>
      </div>

      {/* Detail section */}
      {courseDetail !== undefined && (
        <section className=" flex flex-col items-center  py-8 xl:py-12 2xl:py-16 text-base lg:text-lg xl:text-xl 2xl:text-3xl text-textPrimaryColor">
          <div className="w-[88%] md:w-[70%]">
            <h1 className="pb-5 lg:pb-7 2xl:pb-10 text-center text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-semibold capitalize underline">
              {courseDetail?.name}
            </h1>
            {/* <div dangerouslySetInnerHTML={{ __html: COURSES[1].description }} /> */}
            <div className="pt-5 font-medium capitalize leading-relaxed">
              {courseDetail?.description}
            </div>
            <div className="leading-relaxed pt-2">
              <div>{courseDetail?.classType}</div>
              <div><span className="font-bold">Timing</span>: {courseDetail?.timing}</div>
              <div>{courseDetail?.test}</div>
              <div><span className="font-bold">Price</span>: {courseDetail?.price}$</div>

            </div>
          </div>
          <Link 
          // href={`/contact?courseId=${courseId}`}
          href={`/contact`}          
          ><button className="btn-primary my-3">Apply Now</button></Link>
        </section>
      )}

      {courseDetail === undefined && (
        <div className="px-10 py-5 text-lg xl:text-xl 2xl:text-3xl text-textPrimaryColor">
          No course found
        </div>
      )}
      {/* ---detail section end */}
    </div>
  );
};

export default CourseDetail;
