import React from "react";
import { Input } from "@nextui-org/react";

interface EmailProps {
  pemail: string;
  psetEmail: React.Dispatch<React.SetStateAction<string>>;
}

const Email: React.FC<EmailProps> = ({ pemail, psetEmail }) => {
  const placement: "outside" = "outside";
  // const placement: string = "outside";
  const size: string = "lg";

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    psetEmail(event.target.value);
  };
  
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   console.log("Email submitted:", pemail);
  // };

  return (
    <div className="max-w-[354px] h-[75px] gap-2">
      <Input
        key={`${placement}-${size}`}
        // key:string[]={[placement, size]}
        type="email"
        label="Email Address"
        labelPlacement={placement}
        placeholder="Enter email address"
        value={pemail}
        onChange={handleEmailChange}
        size={size as any}
        className="font-Rubik font-normal"
        // color="#9B9B9B"
        color="default"
      />
    </div>
  );
};

export default Email;
