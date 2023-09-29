import React from "react";
import Header from "../Header";
import Image from "next/image";
import PageTop from "@/public/images/ramadan.jpg";
import WhyUs from "@/public/images/why-us.jpg";
import Books from "@/public/images/library-book-education.svg";
import Teacher from "@/public/images/teacher.svg";
import FounderImage from "@/public/images/founder-image.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

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

            {/* Founder message */}
            <section className=" pt-24 text-textPrimaryColor">
              <div className="pb-6 text-center text-4xl font-semibold">
                Message from our Founder{"'"}s
              </div>
              <div className="flex w-full justify-center ">
                <div className="flex w-[70%] gap-10 p-3">
                  <Image
                    src={FounderImage}
                    className=" h-72 w-72 rounded-full object-cover"
                    height={2000}
                    width={2000}
                    alt=""
                  />
                  <div className=" text-2xl ">
                    <div className="text-4xl font-semibold">
                      Quran Education for all
                    </div>
                    <div className=" py-5 font-medium leading-10">
                      The Holy Quran is the final message from Allah Almighty to
                      all of humanity. It is a blessed scripture that is recited
                      and acted upon, serving as a guide for the success and
                      prosperity of individuals in this world and the hereafter.
                      It is highly recommended to engage with the Quran, reflect
                      upon its teachings, and implement them in our lives. We
                      strive to ensure that the services provided by the online
                      Quran Academy maintain high standards, and we encourage
                      you to take advantage of this opportunity to benefit
                      yourself and your children by connecting them with the
                      teachings of the Holy Quran.
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ----founder message end */}

            {/* about us */}
            <section className=" pt-24  text-textPrimaryColor">
              <div className="pb-6 text-center text-4xl font-semibold">
                Why us?
              </div>
              <div className="flex w-full items-center gap-10">
                <div className="w-[40%] p-3">
                  <Image
                    src={WhyUs}
                    className=" w-full rounded-lg"
                    height={2000}
                    width={2000}
                    alt=""
                  />
                </div>
                <div className="w-[60%] text-2xl ">
                  <div className="text-4xl font-semibold">
                    Quran Education for all
                  </div>
                  <div className="w-[80%] py-5 font-medium leading-10">
                    Alquran Academy is an Online Quran Education platform, which
                    provides the facility to Learn Quran Online Islamic and Qur
                    {`'`}anic teachings to Muslim students across the world. As
                    a leading Online Quran learning Institute, we offer quality
                    Quran teaching to all people of all ages. Our Quran teaching
                    includes the courses in which students are taught how to
                    learn Quran. Initially, we offer a course named Nazirah Qur
                    {`'`}an with Tajweed.
                  </div>
                  <ol className="space-y-2 font-medium">
                    <li className="flex gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="w-5 text-secondaryColor"
                      />
                      Face-to-face online classes
                    </li>
                    <li className="flex gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="w-5 text-secondaryColor"
                      />
                      Modern teaching tools
                    </li>
                    <li className="flex gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="w-5 text-secondaryColor"
                      />
                      Well-educated and well-versed scholars
                    </li>
                    <li className="flex gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="w-5 text-secondaryColor"
                      />
                      Flexible schedule for students
                    </li>
                    <li className="flex gap-3">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
