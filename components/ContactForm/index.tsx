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
  console.log(courseId);

  return (
    <div>
      <div className="flex w-full flex-col justify-center bg-courseDetail bg-cover px-3 lg:px-10 h-[17rem] lg:h-[28rem] xl:h-[30rem] 2xl:h-[34rem]">
        <div className="lg:w-[70%]">
          <h1 className="text-2xl font-semibold text-primaryColor bg-blend-normal xl:text-3xl 2xl:text-5xl">
            Contact
          </h1>
        </div>
      </div>

      {/* Detail section */}

      <section className=" flex flex-col items-center py-8 text-textPrimaryColor xl:py-10 2xl:py-16">
        <div className="w-[93%] border border-gray-200 bg-courseBgColor shadow-md xl:w-[80%] 2xl:w-[75%]">
          <div className="flex ">
            <div className="w-full lg:w-[70%] px-3 py-5 xl:px-5 xl:py-7 2xl:px-7 2xl:py-10">
              <h1 className="pb-5 text-lg font-semibold capitalize xl:pb-7 xl:text-xl 2xl:pb-10 2xl:text-3xl">
                Contact us
              </h1>
              <div className="space-y-6 text-sm md:text-base xl:space-y-8 xl:text-base 2xl:space-y-14 2xl:text-xl">
                {/* Name, email */}
                <div className="flex flex-col lg:flex-row gap-y-3 gap-x-7">
                  <div className="w-full sm:w-[70%] lg:w-[50%]">
                    <div className="font-medium">Name</div>
                    <input
                      type="text"
                      name=""
                      className="mt-2 w-full border-b border-black bg-transparent p-2 outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="w-full sm:w-[70%] lg:w-[50%]">
                    <div className="font-medium">Email</div>
                    <input
                      type="text"
                      name=""
                      className="mt-2 w-full border-b border-black bg-transparent p-2 outline-none"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="flex lg:items-end flex-col lg:flex-row gap-y-3 gap-x-7">
                  <div className="w-full sm:w-[70%] lg:w-[50%]">
                    <div className="font-medium">Gender</div>
                    <select
                      name=""
                      className="mt-2 w-full border-b border-black bg-transparent p-2 outline-none"
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Rather not say</option>
                    </select>
                  </div>
                  <div className="w-full sm:w-[70%] lg:w-[50%]">
                    <div className="font-medium">Country</div>
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
                    <span className="text-xs lg:text-sm 2xl:text-base">
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
                  <div className="font-medium">Choose Course(s)</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 pt-2">
                    {COURSES.map((value: any, index: number) => {
                      return (
                        <div key={index} className="flex gap-2 py-1">
                          <input
                            type="checkbox"
                            name={value.name}
                            className="accent-primaryColor"
                            defaultChecked={courseId == value.id}
                          />
                          <div className="min-w-fit">{value.name}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="flex justify-center pt-2">
                <button className="btn-primary my-3 rounded-md">Submit</button>
              </div>
            </div>

            {/* second half */}
            <div className="hidden lg:block w-[30%] bg-primaryColor px-2 py-5 text-sm text-gray-200 xl:px-4 xl:py-7 2xl:px-5 2xl:py-10 2xl:text-base">
              <div className="text-lg font-semibold xl:text-xl 2xl:text-3xl">
                Contact Information
              </div>
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
        </div>
      </section>

      {/* ---detail section end */}
    </div>
  );
};

export default ContactForm;
