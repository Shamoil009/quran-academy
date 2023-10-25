import React from "react";

type Props = {
  setShowPopup: any;
};

const SuccessPopup = ({ setShowPopup }: Props) => {
  return (
    <div className="fixed inset-0 z-10 flex h-screen w-full items-center justify-center bg-[#a3a3a34d]">
      <div className="flex w-[95%] flex-col items-center justify-center gap-4 rounded-md bg-white px-5 py-8 lg:w-[60%] 2xl:w-[50%] 2xl:px-7 2xl:py-12">
        <div className="text-xl font-semibold lg:text-2xl xl:text-3xl 2xl:text-4xl">
          Congratulation
        </div>
        <div>
          Your form has been submitted successfully. Thank you for providing the
          necessary information. We will review your submission, and one of our
          team members will be in touch with you shortly. If you have any
          questions in the meantime, feel free to reach out to us.
        </div>
        <button
          className="btn-primary w-[40%]"
          onClick={() => setShowPopup(false)}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;
