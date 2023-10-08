import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons/faPersonChalkboard'
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons/faChalkboardUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faChalkboard, faClock, faGraduationCap, faPersonDress, faPersonDressBurst, faPersonHalfDress } from '@fortawesome/free-solid-svg-icons'

const WhyUsCard = () => {
  return (
    <div className="w-[17rem] lg:w-[18rem] xl:w-[24rem] 2xl:w-[28rem]">
        <FontAwesomeIcon icon={faChalkboardUser} />
        <FontAwesomeIcon icon={faPersonChalkboard} />
        <FontAwesomeIcon icon={faChalkboard} />
        <FontAwesomeIcon icon={faGraduationCap} />
        <FontAwesomeIcon icon={faClock} />
        <FontAwesomeIcon icon={faPersonDress} />


    {/* <Image
      src={image ? image : ""}
      className="h-44 w-full rounded-t-3xl object-cover xl:h-52 2xl:h-64"
      height={3000}
      width={3000}
      alt=""
    /> */}
    <div className="px-2 py-2 xl:px-3 xl:py-3 2xl:py-4">
     
     

  
    </div>
  </div>
  )
}

export default WhyUsCard