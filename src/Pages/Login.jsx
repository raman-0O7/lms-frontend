import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../HomeLayout";
import { login } from "../Redux/Slices/authSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleUserInput(e) {
    const {name, value} = e.target;
    setLoginData({
      ...loginData,
      [name] : value
    });
  }


  async function onLogin(e) {
    e.preventDefault();
    if(!loginData.password || !loginData.email) {
      toast.error("Please fill all the details");
      return;
    }


    //dispatch create accout action
    const res = await dispatch(login(loginData));
    if(res?.payload?.success) {
      console.log(res.payload);
      navigate("/");
    }

    setLoginData({
      email: "",
      password:"",
    });
  }
  return (
    <HomeLayout >
      <div className="flex items-center justify-center h-screen">
        <form onSubmit={onLogin} noValidate className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
          <h1 className="text-center text-2xl font-bold">Login Page</h1>
    
          
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold">Email</label>
            <input type="email" required name="email" id="email" value={loginData.email} onChange={handleUserInput} placeholder="Enter your Email" className="bg-transparent px-2 py-1 border" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-semibold">Password</label>
            <input type="password" required name="password" id="password" value={loginData.password} onChange={handleUserInput} placeholder="Enter your password" className="bg-transparent px-2 py-1 border" />
          </div>
          
          <button className="bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer">
              Login
          </button>
          <p className="text-center">
            Do not Have an Account? <Link to="/signup" className="link text-accent cursor-pointer"></Link>
          </p>
        </form>

      </div>
    </HomeLayout>
  )
}

export default Login;