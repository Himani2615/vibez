import "./App.css";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import { Route,Routes,Navigate } from "react-router-dom";
import {Toaster} from 'react-hot-toast';
import { useAuthContext } from "./context/AuthContext";


function App() {
  const {authUser} = useAuthContext();

  return (
    <>
    <div className="text-[#14b9b9] text-xl ml-5 pt-4 font-extrabold flex flex-row ">
      <img src="./chat-box.png" width="30px" className="mr-3"/>
      VIBEZ</div>


      <div className='p-4 h-screen flex items-center justify-center'>
        <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
          <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />

        </Routes>
        <Toaster/>
      </div>
    </>
  );
}

export default App;
