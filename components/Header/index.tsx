import React from 'react'
import Image from "next/image";

import Logo from "@/public/images/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className="py-8 px-8 flex justify-between items-center">
    <Image src={Logo} height={2000} width={2000} className="w-32" alt="" />
    <div className="flex gap-4 text-2xl">
      <div>Home</div>
      <div>About us</div>
      <div>Courses</div>
      <div>Pricing</div>
      <div>Contact Us</div>
      <div>Registration</div>
    </div>
  </div>
  )
}

export default Header