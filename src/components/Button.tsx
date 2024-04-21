import React from "react";

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <div className="flex flex-row justify-center h-[48px] gap-2.5 bg-green-600 rounded-lg">
      <button
        onClick={onClick}
        className="font-Rubik text-base leading-none font-medium text-center text-white"
      >
        Login
      </button>
    </div>
  );
};

export default Button;
