import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cars:["Model s", "Model 3", "Model y", "Model x"]
}

const carsCreate=createSlice({
    name:"car",  
    initialState,
    reducers:{}
})

export const selectCars=state=>state.car.cars

export default carsCreate.reducer