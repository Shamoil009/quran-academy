import React from "react";
import Image from "next/image";
import CourseCard from "../CourseCard";
import { CHOOSEUS, COURSES } from "@/constants/courses";

import WhyUs from "@/public/images/why-us.jpg";
import FounderImage from "@/public/images/founder-image.jpeg";
import FounderImage2 from "@/public/images/founder-image2.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import WhyUsCard from "../WhyUsCard";
import { alegreya } from "../Font";

const Landing = () => {
  return (
    <div>
      <div className=" stroke-black stroke-1 pb-6 text-[#eee8e8]">
        <div className="flex h-[20rem] min-h-fit w-full flex-col justify-center bg-gray-400 bg-BackgroundImage bg-cover px-3 py-3 bg-blend-multiply lg:h-[28rem] lg:px-10 lg:py-0 xl:h-[30rem] 2xl:h-[34rem]">
          <div className="lg:w-[70%]">
            <h1 className="text-xl font-semibold bg-blend-normal lg:text-2xl xl:text-3xl 2xl:text-5xl">
              Online Quran Learning Platform
            </h1>
            <p className="w-[95%] pt-5 text-sm bg-blend-normal lg:w-[85%] lg:text-base xl:text-xl 2xl:text-3xl 2xl:leading-10">
              AQ Online Quran Academy is dedicated to providing comprehensive
              Quranic education to people worldwide. At AQ Online Quran Academy,
              we offer personalized one-on-one Quranic education. Our aim is to
              foster spiritual growth and appreciation for the Quran through
              qualified tutors.
            </p>
            <Link href={"/contact"}>
              <button className="btn-primary my-5">Register Now</button>
            </Link>
          </div>
        </div>

        <div className="">
          {/* book and teacher section */}
          {/* <section className="flex flex-col items-center justify-evenly gap-4 px-6 py-8 text-textPrimaryColor md:flex-row md:gap-2 xl:px-8 2xl:gap-3 2xl:px-10">
            <div className="flex max-w-[25rem] items-center gap-4 rounded-xl  border border-gray-200 px-2 py-2 shadow md:max-w-[31rem] lg:rounded-3xl lg:px-5 lg:py-5 lg:shadow-md 2xl:px-7 2xl:py-9">
              <Image
                src={Books}
                className="w-10 lg:w-16 xl:w-20"
                height={2000}
                width={2000}
                alt=""
              />
              <div>
                <div className="text-base font-semibold lg:text-lg xl:text-xl 2xl:text-3xl">
                  60+ courses
                </div>
                <div className="text-sm font-medium lg:text-base xl:text-lg 2xl:text-xl">
                  Variety of courses for you to choose
                </div>
              </div>
            </div>

            <div className="flex max-w-[25rem] items-center gap-4 rounded-xl border border-gray-200 px-2 py-2 shadow md:max-w-[31rem] lg:rounded-3xl lg:px-5 lg:py-5 lg:shadow-md 2xl:px-7 2xl:py-9">
              <Image
                src={Teacher}
                className="w-10 lg:w-16 xl:w-20"
                height={2000}
                width={2000}
                alt=""
              />
              <div>
                <div className="text-base font-semibold lg:text-lg xl:text-xl 2xl:text-3xl">
                  Expert instructors
                </div>
                <div className="text-sm font-medium lg:text-base xl:text-lg 2xl:text-xl">
                  Learn from expert teachers to elivate your skills
                </div>
              </div>
            </div>
          </section> */}
          {/* ------book and teacher section end-----*/}

          {/* Founder message */}
          <section className="px-3 py-10 text-textPrimaryColor lg:px-6 xl:px-8 xl:py-12 2xl:px-10 2xl:py-16">
            <div className={`${alegreya.className} pb-3 text-center text-2xl font-semibold lg:text-3xl xl:pb-4 xl:text-4xl 2xl:pb-6 2xl:text-5xl`}>
              Message from our Founder{"'"}s
            </div>
            <div className="flex w-full justify-center ">
              <div className="flex w-full flex-col items-center gap-5 p-2 lg:w-[90%] lg:flex-row lg:items-start xl:w-[80%] xl:gap-7 xl:p-3 2xl:w-[70%] 2xl:gap-10">
                <Image
                  src={FounderImage2}
                  className="h-52 w-52 rounded-full bg-gray-100 object-cover xl:h-60 xl:w-60 2xl:h-72 2xl:w-72"
                  height={2000}
                  width={2000}
                  alt=""
                />
                <div className=" text-base lg:text-lg xl:text-xl 2xl:text-2xl ">
                  <div className=" py-5 font-medium 2xl:leading-10">
                    <p>
                      The Holy Quran is the final message, guiding humanity to
                      the hereafter bright. A blessed scripture, leading to
                      success in this world and the hereafter{"'"}s light.
                      Engage with the Quran, reflect upon its teachings, and
                      implement them in your lives. Take advantage of this
                      opportunity to connect with the Quran{"'"}s blessed light.
                    </p>
                    <p>
                      Enrich your soul and mind with its wisdom and virtues,
                      pure and bright. May the guidance within bring peace,
                      leading you on a path of right. Let the Holy Quran{"'"}s
                      divine message be your beacon, celestial satellite.
                    </p>
                  </div>
                  <div>Allama Hafiz Abdul Qadir</div>
                  <div>Founder</div>
                </div>
              </div>
            </div>
          </section>
          {/* ----founder message end */}

          {/* Courses Section */}
          <section className=" bg-courseBgColor px-6 py-8 text-textPrimaryColor xl:px-8 xl:py-14 2xl:px-10 2xl:py-20">
            <div className={`${alegreya.className} pb-12 text-center text-2xl font-semibold lg:text-3xl xl:text-4xl 2xl:text-5xl`}>
              Our featured courses
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

          {/* about us */}
          <section className=" flex flex-col items-center pt-10 text-textPrimaryColor xl:pt-16 2xl:pt-24">
            <div className={`${alegreya.className} pb-8 text-center text-2xl font-semibold lg:text-3xl xl:text-4xl 2xl:text-5xl`}>
              About Us
            </div>
            <div className="flex w-full flex-col gap-4 sm:w-[98%] sm:flex-row sm:items-center lg:w-[95%] xl:w-[90%] xl:gap-7 2xl:gap-10">
              <div className="w-full sm:w-[50%] md:w-[45%] md:p-3">
                <Image
                  src={WhyUs}
                  className=" w-full sm:rounded-lg"
                  height={2000}
                  width={2000}
                  alt=""
                />
              </div>
              <div className="w-full px-3 text-base sm:w-[50%] sm:px-0 lg:text-lg xl:text-xl 2xl:text-2xl">
                <div className={`${alegreya.className} text-2xl font-semibold lg:text-3xl xl:text-4xl 2xl:text-5xl`}>
                  Quran Education for all
                </div>
                <div className=" py-3 font-medium lg:leading-10 2xl:py-5">
                  AQ Quran Academy is an Online Quran Education platform, which
                  provides the facility to Learn Quran Online Islamic and Qur
                  {`'`}anic teachings to Muslim students across the world. As a
                  leading Online Quran learning Institute, we offer quality
                  Quran teaching to all people of all ages. Our Quran teaching
                  includes the courses in which students are taught how to learn
                  Quran. Initially, we offer a course named Nazirah Qur
                  {`'`}an with Tajweed.
                </div>
                <ol className="space-y-1 font-medium 2xl:space-y-2">
                  <li className="flex items-center gap-2 2xl:gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="w-5 text-secondaryColor"
                    />
                    Face-to-face online classes
                  </li>
                  <li className="flex items-center gap-2 2xl:gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="w-5 text-secondaryColor"
                    />
                    Modern teaching tools
                  </li>
                  <li className="flex items-center gap-2 2xl:gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="w-5 text-secondaryColor"
                    />
                    Well-educated and well-versed scholars
                  </li>
                  <li className="flex items-center gap-2 2xl:gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="w-5 text-secondaryColor"
                    />
                    Flexible schedule for students
                  </li>
                  <li className="flex items-center gap-2 2xl:gap-3">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="w-5 text-secondaryColor"
                    />
                    Friendly environment for students
                  </li>
                </ol>
              </div>
            </div>
          </section>
          {/* ----about us end */}

          {/* about us */}
          <section className="flex flex-col items-center px-2 pt-10 text-textPrimaryColor xl:pt-16 2xl:pt-24">
            <div className={`${alegreya.className} pb-8 text-center text-2xl font-semibold lg:text-3xl xl:text-4xl 2xl:text-5xl`}>
              Why Choose Us
            </div>
            <div className="grid-col-1 grid sm:grid-cols-2 lg:grid-cols-3">
              {CHOOSEUS.map((value: any, index: number) => {
                return (
                  <WhyUsCard
                    key={index}
                    name={value.name}
                    description={value.description}
                    index={index}
                  />
                );
              })}
            </div>
          </section>
          {/* ----about us end */}
        </div>
      </div>
    </div>
  );
};

export default Landing;
