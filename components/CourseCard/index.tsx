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
    <div className="w-full max-w-[28rem] rounded-3xl border-2 border-t-0 border-gray-300 shadow-md">
      <Image
        src={image ? image : ""}
        className="h-64 w-full rounded-t-3xl object-cover"
        height={3000}
        width={3000}
        alt=""
      />
      <div className="px-3 py-4">
        <div className=" flex justify-between">
          <div>{classType}</div>
          <div>Timing: {timing}</div>
        </div>
        <div className="h-32 py-6 text-3xl font-bold">{name}</div>

        <div className="flex justify-center py-4">
          <button onClick={viewCourseHandler} className="btn-secondary">
            view details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
