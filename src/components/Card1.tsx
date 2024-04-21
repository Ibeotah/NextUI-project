import { useState } from "react";
import EmailForm from "./Email";
import PasswordForm from "./Password";
import CheckBox from "./CheckBox";
import Button from "./Button";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("jjfffff");

  const [resetClicked, setResetClicked] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(email, "Email submitted");
    console.log(password, "Password submitted");
  };
  const onClick = (email: string, password: string) => {
    console.log(email, password);
  };

  const handleResetClick = () => {
    setResetClicked(!resetClicked);
  };

  return (
    <div className="w-full max-w-[434px]">
      <form
        className=" bg-white rounded-xl flex flex-col p-10 gap-[30px]"
        onSubmit={handleSubmit}
      >
        <h3 className="w-[65px] h-[32px] font-Rubik font-medium leading-[31.68px]">
          Login
        </h3>
        <EmailForm pemail={email} psetEmail={setEmail} />
        <PasswordForm ppassword={password} psetPassword={setPassword} />

        <CheckBox />

        <Button onClick={onClick} />
      </form>
      <br />
      <p
        className={` font-Rubik font-medium text-center text-[14px] leading-[14px] text-white cursor-pointer ${
          resetClicked ? "animate-pulse" : ""
        }`}
        onClick={handleResetClick}
      >
        Reset Password
      </p>
    </div>
  );
};

export default Login;
