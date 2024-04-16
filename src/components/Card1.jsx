import { useState } from "react";
// import Email from "./Email";
import EmailForm from "./Email";
import PasswordForm from "./Password";
import CheckBox from "./CheckBox";
import Button from "./Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("jjfffff");
  const [incorrectPassword, setIncorrectPassword] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (password !== "correctPassword") {
      setIncorrectPassword(true); 
      return; 
    }
    
    console.log("Password submitted:", password);
  };
  return (
    <>
      <form className="bg-white w-[434px] h-[476px] relative top-[62px] left-[273px] p-[40px] gap-[30px] rounded-xl" onSubmit={handleSubmit}>
        <h3 className="w-[65px] h-[32px] font-Rubik font-medium leading-[31.68px] mb-7">
          Login
        </h3>
        <EmailForm pemail={email} psetEmail ={setEmail} />
        <PasswordForm ppassword ={password} psetPassword = {setPassword} pincorrectPassword={incorrectPassword} psetIncorrectPassword ={setIncorrectPassword} />
        <CheckBox />
        <Button pemail={email} ppassword ={password}/>

      </form>
    </>
  );
};

export default Login;
