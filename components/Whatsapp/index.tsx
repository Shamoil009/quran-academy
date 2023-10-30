import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Whatsapp = () => {
  return (
    <Link
      href={"https://wa.me/12027735409"}
      target="_blank"
      className="fixed bottom-2 xl:bottom-3 right-3 rounded-full bg-green-500 p-1 xl:p-[6px] "
    >
      <div className="flex h-10 w-10 2xl:h-11 2xl:w-11 items-center justify-center">
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="!h-9 2xl:!h-10 rounded-full !text-white hover:scale-110 duration-300"
        />
      </div>
    </Link>
  );
};

export default Whatsapp;
