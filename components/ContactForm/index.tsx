"use client";
import React, { useEffect, useState } from "react";
import { COURSES } from "@/constants/courses";
import { useSearchParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMap } from "@fortawesome/free-solid-svg-icons/faMap";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
const ContactForm = () => {
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
      <div className="flex h-[34rem] w-full flex-col justify-center bg-courseDetail bg-cover px-10">
        <div className="w-[70%]">
          <h1 className="text-5xl font-semibold text-primaryColor bg-blend-normal">
            Contact
          </h1>
        </div>
      </div>

      {/* Detail section */}

      <section className=" flex flex-col items-center py-16 text-textPrimaryColor">
        <div className="w-[70%] border border-gray-200 bg-courseBgColor shadow-md">
          <div className="flex ">
            <div className="w-[70%] px-6 py-10">
              <h1 className="pb-10 text-3xl font-semibold capitalize">
                Contact us
              </h1>
              <div className=" space-y-14 text-xl">
                {/* Name, email */}
                <div className="flex gap-x-7">
                  <div className="w-[50%]">
                    <div>Name</div>
                    <input
                      type="text"
                      name=""
                      className="mt-2 w-full border-b border-black bg-transparent p-2 outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="w-[50%]">
                    <div>Email</div>
                    <input
                      type="text"
                      name=""
                      className="mt-2 w-full border-b border-black bg-transparent p-2 outline-none"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="flex items-end gap-x-7">
                  <div className="w-[50%]">
                    <div>Gender</div>
                    <select
                      name=""
                      className="mt-2 w-full border-b border-black bg-transparent p-2 outline-none"
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Rather not say</option>
                    </select>
                  </div>
                  <div className="w-[50%]">
                    <div>Country</div>
                    <input
                      type="text"
                      name=""
                      className="mt-2 w-full border-b border-black bg-transparent p-2 outline-none"
                      placeholder="Your country"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-medium">
                    Whatsapp No
                    <span className="text-base">
                      {" *"}
                      Provide a number whose whatsapp is available
                    </span>
                  </div>
                  <input
                    type="number"
                    name=""
                    className="mt-2 border-b border-black bg-transparent p-2 outline-none"
                    placeholder="Your Whatsapp"
                  />
                </div>
                <div>
                  Choose Course(s)
                  <div className="grid grid-cols-2">
                  {COURSES.map((value: any, index: number) => {
                    return (
                      <div key={index} className="py-1 flex gap-2">
                        <input type="checkbox" name={value.name} className="accent-primaryColor"/>
                        <div>{value.name}</div>
                      </div>
                    );
                  })}
                  </div>
                </div>
              </div>
            </div>

            {/* second half */}
            <div className="w-[30%]  bg-primaryColor px-6 py-10 text-gray-200">
              <div className="text-3xl">Contact Information</div>
              <p className="pt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                quam ea nesciunt commodi possimus aliquam cupiditate, tempore
                repudiandae qui modi? Nobis reprehenderit, veniam modi itaque
                magni temporibus laboriosam laudantium corporis!
              </p>
              <div className="space-y-2 pt-2 tracking-wide lg:pt-4 2xl:space-y-4 2xl:pt-7 2xl:tracking-wider">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} className="w-4 lg:w-5" />
                  Aqquranacademy.org@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} className="w-4  lg:w-5" />
                  +92 348 154 8861
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faWhatsapp} className="w-4 lg:w-5" />
                  +1 202 773 5409
                </div>
                <div className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faMap} className="mt-1 w-4 lg:w-5" />
                  <div className="w-[50%] lg:w-72">
                    Office No. 09, Al.imran Plaza Near Umania Restaurant Dhok
                    Jelani, Bhara Kahu, Islamabad, Pakistan
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <button className="btn-primary my-3">Submit</button> */}
        </div>
      </section>

      {/* ---detail section end */}
    </div>
  );
};

export default ContactForm;
