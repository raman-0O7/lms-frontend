import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";
import axios from "axios";

const initialState = {
    role : localStorage.getItem('role') || "",
    isLoggedIn : localStorage.getItem('isLoggedIn') || false,
    data : localStorage.getItem('data') || ""
};

export const createAccount = createAsyncThunk("/auth/signup", async(data)=>{
    try {
        const res = axiosInstance.post("user/register", data);
        toast.promise(res, {
            loading: "Wait! Creating your acoount",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create account"
        });
        return (await res).data;
    } catch(e) {
        toast.error(e?.response?.data?.message);
    }
})

const authSlice = createSlice({
    name : 'auth',
    reducers : {},
    initialState,

});

export const {} = authSlice.actions;
export default authSlice.reducer;