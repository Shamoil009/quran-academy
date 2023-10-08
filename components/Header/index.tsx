"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
// import CancelIcon from "@mui/icons-material/Cancel";

import Bar from "@/public/images/header-bar.svg";
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [openSidebar, setOpenSidebar] = useState(false);

  const currentRoute = pathname.slice(pathname.lastIndexOf("/") + 1);
  console.log(currentRoute);

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
              className={`${
                activeRoute("") && "border-b-2 lg:text-secondaryColor "
              } border-tertiaryColor py-1 hover:text-secondaryColor lg:border-secondaryColor`}
            >
              Home
            </Link>
          </div>
          <div>
            <Link href={"/"}>About us</Link>
          </div>
          <div>
            <Link
              href={"/"}
              className={`${
                activeRoute("courses") && "border-b-2 lg:text-secondaryColor "
              } border-tertiaryColor py-1 hover:text-secondaryColor lg:border-secondaryColor`}
            >
              Courses
            </Link>
          </div>
          <div>
            <Link
              href={"/contact"}
              className={`${
                activeRoute("contact") && "border-b-2 lg:text-secondaryColor"
              } border-tertiaryColor py-1 hover:text-secondaryColor lg:border-secondaryColor`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;

// import React from "react";
// import Image from "next/image";

// import Logo from "@/public/images/logo.png";
// import Link from "next/link";

// const Header = () => {
//   return (
//     <div className="flex items-center justify-between px-8 py-6">
//       <Image src={Logo} height={2000} width={2000} className="w-28" alt="" />
//       <div className="flex gap-4 text-2xl">
//         <div>Home</div>
//         <div>About us</div>
//         <div>Courses</div>
//         <div>Pricing</div>
//         <div>Contact Us</div>
//         <div>Registration</div>
//       </div>
//     </div>
//   );
// };

// export default Header;
