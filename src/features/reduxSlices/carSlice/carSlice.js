import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    cars: ["Model S", "Model 3", "Model X", "Model Y"]
}

export const carSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {}
})

export const selectCars = (state) => state.carSlice.cars;

export default carSlice.reducer