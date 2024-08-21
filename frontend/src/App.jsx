import "./App.css";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
    <div className="text-[#14b9b9] text-xl ml-5 pt-4 font-extrabold flex flex-row ">
      <img src="./chat-box.png" width="30px" className="mr-3"/>
      VIBEZ</div>
      <div className='p-4 h-screen flex items-center justify-center'>
        <Home/>
      </div>
    </>
  );
}

export default App;
