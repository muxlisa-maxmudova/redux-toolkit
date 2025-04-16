import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice.js";

export const store = configureStore({
        reducer: {
            counter:counterSlice,
        }
    })