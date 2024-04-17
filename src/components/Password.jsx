import React, { useState } from "react";

const PasswordForm = ({
  ppassword,
  psetPassword,
  pincorrectPassword,
  psetIncorrectPassword,
}) => {
  // const [password, setPassword] = useState("jjfffff");
  // const [incorrectPassword, setIncorrectPassword] = useState(false);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Check if the entered password is incorrect
  //   if (ppassword !== "correctPassword") {
  //     psetIncorrectPassword(true); // Set incorrectPassword state to true
  //     return; // Stop form submission
  //   }
  //   // If the password is correct, perform form submission logic here
  //   console.log("Password submitted:", ppassword);
  // };

  const handleChange = (event) => {
    psetPassword(event.target.value);
    psetIncorrectPassword(false); // Reset incorrectPassword state when input changes
  };

  return (
    <>
      <div className=" h-[97px] gap-2 mb-7">
        <div className="w-[95px] h-[19px] font-Rubik font-normal text-base leading-[1.2] text-gray-400">
          Password
        </div>
        <>
          <div>
            <input
              type={pincorrectPassword ? "text" : "password"}
              id="password"
              name="password"
              value={ppassword}
              onChange={handleChange}
              className="w-full h-[48px] rounded-lg bg-gray-200 mt-2 mb-2 pl-2"
            />
          </div>
          {pincorrectPassword && (
            <p className="text-red-500 w-[131px] h-[14px] font-Rubik font-light text-xs leading-[1.2] tracking-[0.2px]">
              Incorrect password
            </p>
          )}
        </>
      </div>
    </>
  );
};

export default PasswordForm;
