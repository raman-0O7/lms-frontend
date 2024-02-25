import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
  courseData : []
};

export const getAllCourses = createAsyncThunk("/course/get", async() => {
  try {
    const response = axiosInstance.get("courses");
    toast.promise(response, {
      loading: "Courses are loading..",
      success: () => {
        console.log(response);
        return "Courses fetched successfully"
      },
      error: "Failed in fetching course details"
    });
    return (await response).data?.courses;
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
});

export const createNewCourse = createAsyncThunk("/course/create", async (data) => {
  try {
    const formData = new FormData();
    formData.append("title", data?.title);
    formData.append("description", data?.description);
    formData.append("createdBy", data?.createdBy);
    formData.append("category", data?.category);
    formData.append("thumbnail", data?.thumbnail);

    const response = axiosInstance.post("/courses", formData);
    toast.promise(response, {
      loading: "Wait, Course is creating right a way..",
      success: "Course created successfully",
      error: "Failed to create course"
    });

    return (await response).data;

  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
})

const courseSlice = createSlice({
  name: "course",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllCourses.fulfilled, (state, action) => {
      if(action.payload) {
        state.courseData = [...action.payload];
      }
    })
  }
});


export default courseSlice.reducer;

