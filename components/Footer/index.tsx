import React from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faMap } from "@fortawesome/free-solid-svg-icons/faMap";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";

import Logo from "@/public/images/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-courseBgColor px-5 py-12 text-sm text-FooterColor lg:px-0 lg:pb-16 lg:pt-12 2xl:pb-20 2xl:pt-16 2xl:text-base">
      <div className="flex  lg:justify-center ">
        <div className="flex flex-col justify-between lg:w-[90%] lg:flex-row 2xl:w-[90%] ">
          <section className="w-[90%] space-y-2 lg:w-[25%] 2xl:space-y-4">
            <Image
              src={Logo}
              height={2000}
              width={2000}
              className="w-20 xl:w-24 2xl:w-32"
              alt=""
            />
            <div>
              Online Quran Education platform, which provides the facility to
              Learn Islamic and Quranic teachings to Muslim students across the
              world.
            </div>
            <div className="flex space-x-8 pt-2 lg:space-x-6">
              <div className="duration-300 hover:scale-125 hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="!h-5 text-[#8a3ab9] 2xl:!h-7"
                />
              </div>
              <div className="duration-300 hover:scale-125 hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="!h-5 text-[#00acee] 2xl:!h-7"
                />
              </div>
              <div className="duration-300 hover:scale-125 hover:cursor-pointer">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="!h-5 text-[#3b5998] 2xl:!h-7"
                />
              </div>
            </div>
          </section>
          {/* <section>
            <div className="pt-7 text-lg font-semibold text-[#0A0A0A] lg:pt-0 2xl:text-xl">
              Categories
            </div>
            <div className="flex flex-col pt-2 tracking-wide lg:flex-row lg:space-x-8 lg:pt-4 2xl:space-x-14 2xl:pt-7 2xl:tracking-wider">
              <div className="space-y-2 2xl:space-y-4">
                <div>Web Development</div>
                <div>Mobile Development</div>
                <div>UI Design</div>
                <div>UI Research</div>
                <div>Presentation</div>
              </div>
            </div>
          </section> */}
          <section className="pt-7 lg:pt-0">
            <div className="text-lg font-semibold text-[#0A0A0A] 2xl:text-xl">
              Explore
            </div>
            <div className="space-y-2 pt-2 tracking-wide lg:pt-4 2xl:space-y-4 2xl:pt-7 2xl:tracking-wider">
            <Link
              href={"/"}
              className="flex items-center gap-1 hover:font-semibold hover:text-primaryColor"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="w-3 text-secondaryColor lg:w-4"
              />
              Home
            </Link>
              <Link
                href={"/about"}
                className="flex items-center gap-1 hover:font-semibold hover:text-primaryColor"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="w-3 text-secondaryColor lg:w-4"
                />
                About us
              </Link>

              <Link
                href={"/courses"}
                className="flex items-center gap-1 hover:font-semibold hover:text-primaryColor"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="w-3 text-secondaryColor lg:w-4"
                />
                Courses
              </Link>
              <Link
                href={"/contact"}
                className="flex items-center gap-1 hover:font-semibold hover:text-primaryColor"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="w-3 text-secondaryColor lg:w-4"
                />
                Contact us
              </Link>
            </div>
          </section>
          <section className="pt-7 lg:pt-0">
            <div className="text-lg font-semibold text-[#0A0A0A] 2xl:text-xl">
              Contact
            </div>
            <div className="space-y-2 pt-2 tracking-wide lg:pt-4 2xl:space-y-4 2xl:pt-7 2xl:tracking-wider">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-4 text-secondaryColor lg:w-5"
                />
                Aqquranacademy.org@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="!w-4 text-secondaryColor lg:!w-5"
                />
                +92 348 154 8861
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="!w-4 text-secondaryColor lg:!w-5"
                />
                +1 202 773 5409
              </div>
              <div className="flex items-start gap-2">
                <FontAwesomeIcon
                  icon={faMap}
                  className="mt-1 !w-4 text-secondaryColor lg:!w-5"
                />
                <div className="w-[90%] md:w-[50%] lg:w-72">
                  Office No. 09, Al.imran Plaza Near Umania Restaurant Dhok
                  Jelani, Bhara Kahu, Islamabad, Pakistan
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="pt-4 text-center">
        © Copyright {new Date().getFullYear()} AQ quran Academy. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
