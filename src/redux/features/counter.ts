import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export type CounterState = {
    count: number;
}
const initialState:CounterState ={
    count: 0
}
const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers:{
        increment :(state)=>{
            state.count++
        },
        decrement :(state)=>{
            state.count--
        },
        incrementsByValue : (state ,action:PayloadAction<number>)=>{
            state.count += action.payload;
        },
        reset :(state)=>{
            state.count = 0
        }
        
    }
});

export const { increment, decrement  ,incrementsByValue,reset} = counterSlice.actions;
export default counterSlice.reducer;