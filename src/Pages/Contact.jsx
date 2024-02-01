import { useState } from "react";
import toast from "react-hot-toast";
import HomeLayout from "../HomeLayout";
import { isEmail } from "../Helpers/checkValidation";
import axiosInstance from "../Helpers/axiosInstance";

function Contact() {
  const [userInput, setUserInput] = useState({
    name:"",
    email:"",
    message:"",
  });

  function handleUserInput(e) {
    const {name, value} = e.target;
    setUserInput({
      ...userInput,
      [name]: value
    })
  }

  async function handleUserSubmit(e) {
    e.preventDefault();
    if(!userInput.name || !userInput.email || !userInput.message) {
      toast.error("All Fields are required")
      return;
    }

    if(!isEmail(userInput.email)) {
      toast.error("Invalid Email");
      return;
    }

    try {
      const response = axiosInstance.post("/contact", userInput);
      toast.promise(response, {
        loading: "Submiting your message...",
        success: "Message submitted successfully",
        error: "Failed to submit message, try again"
      });
      const contactResponse = await response;
      if(contactResponse?.data?.success) {
        setUserInput({
          name:"",
          email:"",
          message:"",
        });
      }
    } catch (error) {
      toast.error(error.message);
      return;
    }
  }
  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[100vh]">

      <form 
        noValidate
        onSubmit={handleUserSubmit}
        className="flex flex-col items-center justify-center gap-2 p-5 rounded-md shadow-[0_0_10px_black] text-white w-[22rem]">
        <h1 className="text-3xl font-semibold">
          Contact Form
        </h1>
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="name" className="text-xl font-semibold">
            Name
          </label>
          <input 
            className="bg-transparent border px-2 py-1 rounded-sm"
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            onChange={handleUserInput}
            value={userInput.name}
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="email" className="text-xl font-semibold">
            Email
          </label>
          <input 
            className="bg-transparent border px-2 py-1 rounded-sm"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your Email"
            onChange={handleUserInput}
            value={userInput.email}
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <label htmlFor="message" className="text-xl font-semibold">
            Message
          </label>
          <textarea 
            className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40"
            id="message"
            name="message"
            placeholder="Enter your Message"
            onChange={handleUserInput}
            value={userInput.message}
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-600 hover:bg-yellow-500 ease-in-out w-full transition-all duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
        >
          Submit
        </button>

      </form>

      </div>
    </HomeLayout>
  )
}

export default Contact;