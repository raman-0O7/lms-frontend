import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import HomeLayout from "../../HomeLayout";
import { createNewCourse } from "../../Redux/Slices/courseSlice";

function CourseCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userInput, setUserInput] = useState({
    title: "",
    description: "",
    thumbnail: null,
    createdBy: "",
    previewImage: "",
    category: "",
  });

  function handleImageUpload(e) {
    e.preventDefault();
    const uploadImage = e.target.files[0];
    if(uploadImage) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadImage);
      fileReader.addEventListener("load", function() {
        setUserInput({
          ...userInput,
          previewImage: this.result,
          thumbnail: uploadImage
        })
      })
    }
  }

  function handleUserInput(e) {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name] : value
    })
  }

  async function onFormSubmit(e) {
    e.preventDefault();

    if(!userInput.title || !userInput.description || !userInput.createdBy || !userInput.category || !userInput.thumbnail) {
      toast.error("All Field Are Mandatory");
      return;
    }

    const response = await dispatch(createNewCourse(userInput));
    if(response?.payload) {
      setUserInput({
        title: "",
        description: "",
        thumbnail: null,
        createdBy: "",
        previewImage: "",
        category: "",
      });

      navigate("/courses");   
    }
  }
  return (
    <HomeLayout>
      <div className="flex justify-center items-center h-[100vh]">
        <form
          onSubmit={onFormSubmit}
          className="flex flex-col text-white justify-center gap-5 rouded-lg p-4 w-[700px] my-10 shadow-[0_0_10px_black] relative"
        >
          <Link className="absolute top-8 text-2xl link text-accent cursor-pointer">
            <AiOutlineArrowLeft />
          </Link>

          <h1 className="text-center text-2xl font-bold">
            Create New Course
          </h1>

          <main className="grid grid-cols-2 gap-x-10">
            <div className="gap-y-6">
              <div className="">
                <label htmlFor="image_uploads" className="cursor_pointer">
                  {userInput.previewImage ? (
                    <img 
                      src={userInput.previewImage}
                      className="w-full h-44 m-auto border"
                    />
                  ) : (
                    <div className="w-full h-44 m-auto flex items-center justify-center border">
                      <h1 className="font-bold text-lg">Upload your course thumbnail</h1>
                    </div>
                  )}
                </label>
                <input 
                  className="hidden"
                  type="file"
                  onChange={handleImageUpload}
                  accept=".jpg, jpeg, .png"
                  name="image_uploads"
                  id="image_uploads"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="title" className="text-lg font-semibold ">Course Title</label>
                <input 
                  type="text"
                  id="title"
                  name="title"
                  onChange={handleUserInput}
                  value={userInput.title}
                  required
                  placeholder="Enter Course Title"
                  className="bg-transparent px-2 py-1 border"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-col gap-1">
                <label htmlFor="createdBy" className="text-lg font-semibold ">Course Instructor</label>
                <input 
                  type="text"
                  id="createdBy"
                  name="createdBy"
                  onChange={handleUserInput}
                  value={userInput.createdBy}
                  required
                  placeholder="Enter Course Instructor"
                  className="bg-transparent px-2 py-1 border"
                />
              </div>     
              <div className="flex flex-col gap-1">
                <label htmlFor="category" className="text-lg font-semibold ">Course Category</label>
                <input 
                  type="text"
                  id="category"
                  name="category"
                  onChange={handleUserInput}
                  value={userInput.category}
                  required
                  placeholder="Enter Course Category"
                  className="bg-transparent px-2 py-1 border"
                />
              </div>     
              <div className="flex flex-col gap-1">
                <label htmlFor="description" className="text-lg font-semibold ">Course description</label>
                <textarea 
                  type="text"
                  id="description"
                  name="description"
                  onChange={handleUserInput}
                  value={userInput.description}
                  required
                  placeholder="Enter Course description"
                  className="bg-transparent px-2 py-1 border overflow-y-scroll resize-none h-24"
                />
              </div>     
            </div>
          </main>
          <button 
            type="submit"
            className="w-full rounded-sm text-lg font-semibold bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 py-2 ">
            Create Course 
          </button>
        </form>

      </div>
    </HomeLayout>
  )
}
export default CourseCreate;