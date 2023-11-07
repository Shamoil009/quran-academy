"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Bar from "@/public/images/header-bar.svg";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const pathname = usePathname();

  const [openSidebar, setOpenSidebar] = useState(false);

  // const currentRoute = pathname.slice(pathname.lastIndexOf("/") + 1);

  var parts = pathname.split("/");
  var currentRoute = parts[parts.length - 2]; // Get the second-to-last part

  const activeRoute = (route: string) => {
    if (route === currentRoute) return true;
    else return false;
  };

  return (
    <div className="my-4 flex items-center justify-between px-2 lg:my-4 lg:px-5 2xl:my-7">
      <Image
        src={Logo}
        width={100}
        height={100}
        alt="logo"
        className="w-16 xl:w-20 2xl:w-28"
      />
      <div
        className="cursor-pointer lg:hidden"
        onClick={() => setOpenSidebar(true)}
      >
        <Image
          src={Bar}
          className="h-5 w-5"
          height={1000}
          width={1000}
          alt=""
        />
      </div>

      {openSidebar && (
        <div
          className="fixed left-0 top-0 z-20 h-full w-full bg-blue-500 opacity-50 lg:hidden"
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}
      <div
        className={`fixed right-0 top-0 z-30 flex w-[70%] flex-col duration-300 ease-in-out sm:w-[50%] lg:relative lg:z-0 lg:w-full lg:translate-x-0 lg:flex-row  ${
          openSidebar ? "translate-x-0 " : "translate-x-full"
        } h-full bg-primaryColor lg:bg-transparent`}
      >
        <div
          className="mx-3 my-4 ml-auto cursor-pointer select-none lg:hidden"
          onClick={() => setOpenSidebar(false)}
        >
          <FontAwesomeIcon icon={faXmarkCircle} className="h-6 text-white" />
        </div>

        <div className="flex flex-col items-center gap-4 pt-[10%] font-medium text-white lg:ml-auto lg:flex-row lg:pt-0 lg:text-base lg:font-semibold lg:text-textPrimaryColor 2xl:text-lg">
          <div>
            <Link
              href={"/"}
              onClick={() => setOpenSidebar(false)}
              className={`${
                activeRoute("") && "border-b-2 lg:text-secondaryColor "
              } border-tertiaryColor py-1 hover:text-secondaryColor lg:border-secondaryColor`}
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              href={"/about"}
              onClick={() => setOpenSidebar(false)}
              className={`${
                activeRoute("about") && "border-b-2 lg:text-secondaryColor "
              } border-tertiaryColor py-1 hover:text-secondaryColor lg:border-secondaryColor`}
            >
              About
            </Link>
          </div>

          <div>
            <Link
              href={"/courses"}
              onClick={() => setOpenSidebar(false)}
              className={`${
                (activeRoute("courses") || activeRoute("course-detail")) &&
                "border-b-2 lg:text-secondaryColor "
              } border-tertiaryColor py-1 hover:text-secondaryColor lg:border-secondaryColor`}
            >
              Courses
            </Link>
          </div>
          <div>
            <Link
              href={"/pricing"}
              onClick={() => setOpenSidebar(false)}
              className={`${
                activeRoute("pricing") && "border-b-2 lg:text-secondaryColor "
              } border-tertiaryColor py-1 hover:text-secondaryColor lg:border-secondaryColor`}
            >
              Pricing
            </Link>
          </div>
          <div>
            <Link
              href={"/contact"}
              onClick={() => setOpenSidebar(false)}
              className={`${
                activeRoute("contact") && "border-b-2 lg:text-secondaryColor"
              } border-tertiaryColor py-1 hover:text-secondaryColor lg:border-secondaryColor`}
            >
              Registration
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
