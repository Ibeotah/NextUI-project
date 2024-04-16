import React, { useState } from "react";

const EmailForm = ({ pemail, psetEmail }) => {
  const handleEmailChange = (event) => {
    psetEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Email submitted:", pemail);
  };

  return (
    <div className="w-[354px] h-[75px] gap-2 mb-7">
      <div className="w-[125px] h-[19px] font-Rubik font-normal text-base leading-[1.2] text-gray-400">
        Email Address
      </div>
      <>
        <div>
          <input
            type="email"
            id="email"
            value={pemail}
            onChange={handleEmailChange}
            className="w-[334px] h-[48px] rounded-lg bg-gray-200 mt-2 pl-2"
          />
        </div>
      </>
    </div>
  );
};

export default EmailForm;
