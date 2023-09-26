import React from "react";
import Header from "../Header";
import Image from "next/image";
import PageTop from "@/public/images/ramadan.jpg";
import WhyUs from "@/public/images/why-us.jpg";
import Books from "@/public/images/library-book-education.svg";
import Teacher from "@/public/images/teacher.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  return (
    <div>
      <Header />
      <div>
        <div className=" stroke-black stroke-1 py-6 text-[#eee8e8]">
          <div className="flex h-[34rem] w-full flex-col justify-center bg-gray-400 bg-BackgroundImage bg-cover px-10 bg-blend-multiply">
            <div className="w-[70%]">
              <h1 className="text-5xl font-semibold bg-blend-normal">
                Online Quran Learning Platform
              </h1>
              <p className="w-[85%] pt-5 text-3xl leading-10 bg-blend-normal">
                An Online Quran Education platform, which provides the facility
                to Learn Quran Online Islamic and Quranic teachings to Muslim
                students across the world in four languages: English, Persian,
                Pashto, and Urdu.
              </p>
              <button className="btn-primary my-5">Register Now</button>
            </div>
          </div>

          <div className="px-10 py-8">
            {/* book and teacher section */}
            <section className="flex justify-evenly text-textPrimaryColor">
              <div className="flex max-w-[31rem] items-center gap-4 rounded-3xl border border-gray-200 px-7 py-9 shadow-md">
                <Image
                  src={Books}
                  className="w-20"
                  height={2000}
                  width={2000}
                  alt=""
                />
                <div>
                  <div className="text-3xl font-semibold">60+ courses</div>
                  <div className="text-xl font-medium">
                    Variety of courses for you to choose
                  </div>
                </div>
              </div>

              <div className="flex max-w-[31rem] items-center gap-4 rounded-3xl border border-gray-200 px-7 py-9 shadow-md">
                <Image
                  src={Teacher}
                  className="w-20"
                  height={2000}
                  width={2000}
                  alt=""
                />
                <div>
                  <div className="text-3xl font-semibold">
                    Expert instructors
                  </div>
                  <div className="text-xl font-medium">
                    Learn from expert teachers to elivate your skills
                  </div>
                </div>
              </div>
            </section>
            {/* ------book and teacher section end-----*/}

            {/* about us */}
            <section className=" py-24  text-textPrimaryColor">
              <div className="text-4xl pb-6 text-textSecondaryColor font-semibold text-center">Why us?</div>
              <div className="flex items-center gap-10 w-full">
                <div className="w-[40%] p-3">
                  <Image
                    src={WhyUs}
                    className=" w-full rounded-lg"
                    height={2000}
                    width={2000}
                    alt=""
                  />
                </div>
                <div className="w-[60%]">
                  <div className="text-4xl font-semibold">Quran Education for all</div>
                  <div className="font-medium w-[80%] pt-5 text-3xl leading-10">
                    Alquran Academy is an Online Quran Education platform, which
                    provides the facility to Learn Quran Online Islamic and Qur
                    {`'`}anic teachings to Muslim students across the world. As
                    a leading Online Quran learning Institute, we offer quality
                    Quran teaching to all people of all ages. Our Quran teaching
                    includes the courses in which students are taught how to
                    learn Quran. Initially, we offer a course named Nazirah Qur
                    {`'`}an with Tajweed.
                  </div>
                </div>
              </div>
            </section>
            {/* ----about us end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
