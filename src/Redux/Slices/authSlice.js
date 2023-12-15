import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    role : localStorage.getItem('role') || "",
    isLoggedIn : localStorage.getItem('isLoggedIn') || false,
    data : localStorage.getItem('data') || ""
};

const authSlice = createSlice({
    name : 'auth',
    reducers : {},
    initialState,

});

export const {} = authSlice.actions;
export default authSlice.reducer;