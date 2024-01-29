import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosInstance";

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
export const login = createAsyncThunk("/auth/login", async(data)=>{
    try {
        const res = axiosInstance.post("user/login", data);
        toast.promise(res, {
            loading: "Wait! Authenticating Credentials",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to Login"
        });
        return (await res).data;
    } catch(e) {
        toast.error(e?.response?.data?.message);
    }
});

export const logout = createAsyncThunk("/auth/logout", async()=> {
    try {
        const res = axiosInstance.get("user/logout");
        toast.promise(res, {
            loading: "Wait! Logging Out!",
            success: (data) => {
                console.log(data);
                return data?.data?.message;
            },
            error: "Failed to Logout"
        });
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

const authSlice = createSlice({
    name : 'auth',
    reducers : {},
    initialState,
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            localStorage.setItem("data", JSON.stringify(action?.payload?.user));
            localStorage.setItem("role", action?.payload?.role);
            localStorage.setItem("isLoggedIn", true);
            state.data = action?.payload?.user;
            state.role = action?.payload?.role;
            state.isLoggedIn = true;
        })
        .addCase(logout.fulfilled, (state) => {
            localStorage.clear();
            state.data = {};
            state.role = "";
            state.isLoggedIn = false;
        })
    }

});

// eslint-disable-next-line no-empty-pattern
export const {} = authSlice.actions;
export default authSlice.reducer;