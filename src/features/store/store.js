import { configureStore } from "@reduxjs/toolkit";
import carSlice from "../reduxSlices/carSlice/carSlice";

export const store = configureStore({
    reducer: {carSlice}
});
