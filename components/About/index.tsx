import React from "react";
import { Alegreya} from "next/font/google";

const alegreya = Alegreya({
  subsets: ['latin'],

  // weight: "700",
  display: 'swap',
});

const About = () => {
  return (
    <div>
      <div className="flex h-[17rem] w-full flex-col justify-center bg-courseDetail bg-cover px-3 lg:h-[28rem] lg:px-10 xl:h-[30rem] 2xl:h-[34rem]">
        <div className="lg:w-[70%]">
          <h1 className="text-2xl font-semibold text-primaryColor bg-blend-normal xl:text-3xl 2xl:text-5xl">
            About
          </h1>
        </div>
      </div>

      {/* Detail section */}

      <section className=" flex flex-col items-center  py-8 text-base text-textPrimaryColor lg:text-lg xl:py-12 xl:text-xl 2xl:py-16 2xl:text-3xl">
        <div className="w-[88%] md:w-[70%]">
          <h1 className={`${alegreya.className} pb-5 lg:pb-7 2xl:pb-10 text-center text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-semibold capitalize underline`}>
            About AQ online Quran Academy
          </h1>

          <div className="pt-5 font-medium leading-relaxed">
            Welcome to AQ Online Quran Academy, Led by Allama Hafiz Abdul Qadir.
            We Welcome all Subscribers and Users to our platform. AQ Online
            Quran Academy is an Online Educational Institution that has been
            Providing Quranic Education to Students Around the World for the
            past 10 years. We Offer Quality Quranic Education to Individuals of
            all Ages and Backgrounds. Our Academy Provides Multiple Islamic
            Courses as well as Character-Building and Life Reformation Courses
            Based on the Teachings of Islami Sharia. The academy offers a
            variety of courses to its students, including:
            <ol className="list-decimal py-3 pl-8 font-semibold">
              <li> Basic Quran Tajweed course.</li>
              <li>Basic Nazara course with Tajweed.</li>
              <li>Quran memorization.</li>
              <li>Quran translation with Tafseer.</li>
              <li>Islamic fiqh course.</li>
              <li>Basic Islamic History course.</li>
              <li>Arabic language course.</li>
              <li>
                Dars-e-Nizami course (short 4-year and full course 8-year).
              </li>
              <li>Hadith course. </li>
              <li>Seerat-e-Mustafa course. </li>
              <li>Qasas-ul-Quran. </li>
              <li>Qasas-ul-Anbiya. </li>
            </ol>
            The Courses are Taught by Qualified and Experienced Teachers Who Use
            Modern Teaching Methods and Techniques to Make the Learning
            Experience Engaging and Effective. AQ Online Quran Academy Conducts
            Tests for Every Student After 15 Days. One of the Unique Features of
            AQ Online Quran Academy is that it Offers{" "}
            <strong>One-on-One Classes</strong>, Which Allow for Personalized
            Attention and a Customized Learning Experience. Students can also
            choose their Preferred Schedule and Pace of Learning. Overall, AQ
            Online Quran Academy has a Good Reputation and is Known for
            Providing High-Quality Quranic Education. If you{"'"}re Interested
            in Learning more, contact us.
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
