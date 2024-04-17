import React from "react";

function Button({ pemail, ppassword }) {
  const submit = () => {
    console.log(pemail, ppassword);
  };
  return (
    <div className=" h-[48px] gap-2.5 bg-green-600 px-[32px] py-[10px] rounded-lg">
      <button
        onClick={submit}
        className="font-Rubik text-base leading-none font-medium text-center text-white"
      >
        Login
      </button>
    </div>
  );
}

export default Button;
