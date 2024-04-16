import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import InputButton from "./component";
import airvend from "./assets/Images/icon-airvend.svg";
import "./index.css";
import Login from "./components/Card1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <img
        src={airvend}
        alt="Airvend"
        className="absolute top-[20px] left-[615px] "
      />
      <Login />
    </>
  );
}

export default App;
