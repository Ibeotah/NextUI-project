// @ts-ignore
import airvend from "./assets/Images/icon-airvend.svg";
import "./index.css";
import Login from "./components/Card1";

function App() {
  return (
    <div className="p-5 md:p-0 flex items-center justify-center border border-red-500 w-screen h-screen">
      <div className="flex flex-col items-center gap-5 w-full border border-blue-500">
        <img src={airvend} alt="Airvend" />
        <Login />
      </div>
    </div>
  );
}

export default App;
