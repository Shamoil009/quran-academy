import React from "react";
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons/faPersonChalkboard";
import { faChalkboardUser } from "@fortawesome/free-solid-svg-icons/faChalkboardUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboard } from "@fortawesome/free-solid-svg-icons/faChalkboard";

import { faGraduationCap } from "@fortawesome/free-solid-svg-icons/faGraduationCap";
import { faPersonDress } from "@fortawesome/free-solid-svg-icons/faPersonDress";
import { faClockFour } from "@fortawesome/free-regular-svg-icons/faClockFour";



type Props={
    index:number,
    name:string,
    description:string,
}

const iconClass = "h-20 md:h-24 xl:h-28 text-primaryColor";
const chooseIcon = (iconNumber: number) => {
  if (iconNumber === 0)
    return (
      <FontAwesomeIcon
        icon={faChalkboardUser}
        className="h-20 md:h-24 xl:h-28 text-primaryColor"
      />
    );
  else if (iconNumber === 1)
    return <FontAwesomeIcon icon={faPersonChalkboard} className={iconClass} />;
  else if (iconNumber === 2)
    return <FontAwesomeIcon  icon={faPersonDress} className={iconClass} />;
  else if (iconNumber === 3)
    return <FontAwesomeIcon   icon={faClockFour} className={iconClass} />;

  else if (iconNumber === 4)
    return <FontAwesomeIcon icon={faChalkboard} className={iconClass} />;
  else if (iconNumber === 5)
    return <FontAwesomeIcon icon={faGraduationCap} className={iconClass} />;
};
const WhyUsCard = ({index,name,description}:Props) => {
  return (
    <div className="mx-3 xl:mx-6 2xl:mx-9 w-[17rem] pb-8  lg:w-[18rem] xl:w-[24rem] 2xl:w-[32rem]">
      <div className="flex flex-col">
        {chooseIcon(index)}
        <div className="flex flex-col items-center">
          <div className="py-3 text-lg font-semibold capitalize lg:text-xl xl:text-2xl 2xl:text-3xl">
            {name}
          </div>
          <div className="text-center text-base lg:text-base xl:text-lg 2xl:text-xl ">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsCard;
