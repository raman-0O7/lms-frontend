import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./Slices/authSlice";
import courseSliceReducer from "./Slices/courseSlice";

const store = configureStore({
    reducer : {
        auth : authSlice,
        course: courseSliceReducer
    },
    devTools: true,
})

export default store;