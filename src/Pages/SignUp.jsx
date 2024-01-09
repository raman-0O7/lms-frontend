import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import HomeLayout from "../HomeLayout";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { createAccount } from "../Redux/Slices/authSlice";

function SignUp() {
  const [previewImage, setPreviewImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: ""
  });

  function handleUserInput(e) {
    const {name, value} = e.target;
    setSignupData({
      ...signupData,
      [name] : value
    });
  }

  function getImage(e) {
    e.preventDefault();
    const uploadImage = e.target.files[0];

    if(uploadImage) {
      setSignupData({
        ...signupData,
        avatar: uploadImage
      });
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadImage);
      fileReader.addEventListener("load", function() {
        console.log(this.result);
        setPreviewImage(this.result);
      })
    }
  }

  async function createNewAccount(e) {
    e.preventDefault();
    if(!signupData.name || !signupData.password || !signupData.email || !signupData.avatar) {
      toast.error("Please fill all the details");
      return;
    }
    if(signupData.name.length <= 5){
      toast.error("Name should be atleast of 5 characters");
      return;
    }
    if(!signupData.email.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)) {
      toast.error("Invlaid email");
      return;
    }
    if(!signupData.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)) {
      toast.error("Password should be 8 Characters long with atleast 1 uppercase and 1 number and 1 lowercase");
      return;
    }

    const formData = new FormData();
    formData.append("name", signupData.name);
    formData.append("password", signupData.password);
    formData.append("email", signupData.email);
    formData.append("avatar", signupData.avatar);

    //dispatch create accout action
    const res = await dispatch(createAccount(formData));
    if(res?.payload?.success) {
      console.log(res.payload);
      navigate("/");
    }

    setSignupData({
      name: "",
      email: "",
      password:"",
      avatar:""
    });
    setPreviewImage("");
  }
  return (
    <HomeLayout >
      <div className="flex items-center justify-center h-screen">
        <form onSubmit={createNewAccount} noValidate className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
          <h1 className="text-center text-2xl font-bold">Registration Page</h1>
          <label htmlFor="image-upload" className="cursor-pointer">
            {previewImage ? (
              <img src={previewImage} alt="Persons Image" className="w-24 h-24 rounded-full m-auto" />
            ) : (
              <BsPersonCircle className="w-24 h-24 rounded-full m-auto"/>
            )}

          </label>
          <input type="file" className="hidden" id="image-upload" accept=".jpg, .jpeg, .png, .svg" onChange={getImage} name="avatar"/>
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-semibold">Full Name</label>
            <input type="text" required name="name" id="name" placeholder="Enter your Name" value={signupData.name} onChange={handleUserInput} className="bg-transparent px-2 py-1 border" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold">Email</label>
            <input type="email" required name="email" id="email" value={signupData.email} onChange={handleUserInput} placeholder="Enter your Email" className="bg-transparent px-2 py-1 border" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-semibold">Password</label>
            <input type="password" required name="password" id="password" value={signupData.password} onChange={handleUserInput} placeholder="Enter your password" className="bg-transparent px-2 py-1 border" />
          </div>
          
          <button className="bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer">
              Create account
          </button>
          <p className="text-center">
            Already have account? <Link to="/login" className="link text-accent cursor-pointer">Login</Link>
          </p>
        </form>

      </div>
    </HomeLayout>
  )
}

export default SignUp;