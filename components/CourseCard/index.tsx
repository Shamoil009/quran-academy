"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { alegreya } from "../Font";


type Props = {
  id?: number;
  name?: string;
  image?: string;
  timing?: string;
  classType?: string;
  price?: string;
};

const CourseCard = ({ id, name, timing, classType, image, price }: Props) => {
  return (
    <div className="w-[17rem] rounded-2xl border-2 border-t-0 border-gray-300 shadow-md lg:w-[18rem] lg:rounded-3xl xl:w-[24rem] 2xl:w-[28rem]">
      <Image
        src={image ? image : ""}
        className="h-44 w-full rounded-t-3xl object-cover xl:h-52 2xl:h-64"
        height={3000}
        width={3000}
        alt=""
      />
      <div className="px-2 py-2 xl:px-3 xl:py-3 2xl:py-4">
        <div className=" flex justify-between text-sm xl:text-base">
          {/* <div>{price}$</div> */}
          <div>{timing}</div>
        </div>
        <div className={`${alegreya.className} h-20 py-2 text-xl font-bold lg:py-4 lg:text-2xl xl:h-28 xl:text-3xl 2xl:h-32 2xl:py-6`}>
          {name}
        </div>

        <div className="flex justify-center px-2 py-2 xl:py-3 2xl:py-4">
          <Link href={`/course-detail?courseId=${id}`}>
            <button className="btn-secondary">view details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
