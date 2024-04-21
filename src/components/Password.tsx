import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "./Eyes/EyeFilledIcon";
import { EyeSlashFilledIcon } from "./Eyes/EyeSlashFilledIcon";

interface PasswordFormProps {
  ppassword: string;
  psetPassword: React.Dispatch<React.SetStateAction<string>>;
}

const PasswordForm: React.FC<PasswordFormProps> = ({ ppassword, psetPassword }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isErrorMessage, setIsErrorMessage] = useState<string>("");

  const toggleVisibility = () => setIsVisible(!isVisible);
  const size: string = "lg";
  const placement: "outside" = "outside";

  const checkPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password: string = e.target.value;
    psetPassword(password);

    if (password.length < 8) {
      setIsErrorMessage("Incorrect Password");
    } else {
      setIsErrorMessage("");
    }
  };

  return (
    <Input
      label="Password"
      labelPlacement={placement}
      value={ppassword}
      onChange={checkPassword}
      placeholder="Enter your password"
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      size={size as any} // Using 'as any' to bypass the type check temporarily
      className="font-Rubik font-normal b-color"
      color="default"
      errorMessage={isErrorMessage}
    />
  );
};

export default PasswordForm;
