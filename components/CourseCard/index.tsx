'use client'
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  id?: number;
  name?: string;
  image?: string;
  timing?: string;
  classType?: string;
};

const CourseCard = ({ id, name, timing, classType, image }: Props) => {
  const router = useRouter();

  const viewCourseHandler = () => {
    router.push(`/course-detail?courseId=${id}`);
  };

  return (
    <div className="w-[17rem] lg:w-[18rem] xl:w-[24rem] 2xl:w-[28rem] rounded-2xl lg:rounded-3xl border-2 border-t-0 border-gray-300 shadow-md">
      <Image
        src={image ? image : ""}
        className="h-44 xl:h-52 2xl:h-64 w-full rounded-t-3xl object-cover"
        height={3000}
        width={3000}
        alt=""
      />
      <div className="px-2 xl:px-3 py-2 xl:py-3 2xl:py-4">
        <div className=" flex justify-between text-sm xl:text-base">
          <div>{classType}</div>
          <div>{timing}</div>
        </div>
        <div className="h-20 xl:h-28 2xl:h-32 py-2 lg:py-4 2xl:py-6 xl:text-2xl text-lg lg:text-xl 2xl:text-3xl font-bold">{name}</div>

        <div className="flex justify-center py-2 xl:py-3 2xl:py-4">
          <button onClick={viewCourseHandler} className="btn-secondary">
            view details
          </button>
          {/* <picture>
            <source type="image/webp" srcSet="flower.webp"/>
            <source type="image/jpeg" srcSet="flower.jpg"/>
            <img src="flower.jpg" alt=""/>

          </picture> */}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
