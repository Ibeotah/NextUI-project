import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import InputButton from "./component";
import airvend from "./assets/Images/icon-airvend.svg";
import "./index.css";
import Login from "./components/Card1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-[434px] w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <img src={airvend} alt="Airvend" />
        <Login />
      </div>
    </div>
  );
}

export default App;
