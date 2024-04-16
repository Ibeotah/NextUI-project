import { useState } from "react";
import EmailForm from "./Email";
import PasswordForm from "./Password";
import CheckBox from "./CheckBox";
import Button from "./Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("jjfffff");
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const [resetClicked, setResetClicked] = useState(false); // Step 1

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== "correctPassword") {
      setIncorrectPassword(true);
      return;
    }

    console.log("Password submitted:", password);
  };

  const handleResetClick = () => {
    setResetClicked(!resetClicked);
  };

  return (
    <div>
      <form
        className="bg-white w-[434px] h-[476px] relative top-[46px] left-[273px] p-[40px] gap-[30px] rounded-xl"
        onSubmit={handleSubmit}
      >
        <h3 className="w-[65px] h-[32px] font-Rubik font-medium leading-[31.68px] mb-7">
          Login
        </h3>
        <EmailForm pemail={email} psetEmail={setEmail} />
        <PasswordForm
          ppassword={password}
          psetPassword={setPassword}
          pincorrectPassword={incorrectPassword}
          psetIncorrectPassword={setIncorrectPassword}
        />
        <CheckBox />
        <Button pemail={email} ppassword={password} />
      </form>
      <p
        className={`w-[108px] h-[14px] relative top-16 left-[420px]  font-Rubik font-medium text-center text-[14px] leading-[14px] text-white cursor-pointer ${
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
