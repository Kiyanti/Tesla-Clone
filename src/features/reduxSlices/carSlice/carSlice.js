import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [
    { id: 0, car: "Model S" },
    { id: 1, car: "Model 3" },
    { id: 2, car: "Model X" },
    { id: 3, car: "Model Y" },
  ],
};

export const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.carSlice.cars;

export default carSlice.reducer;
