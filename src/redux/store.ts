import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter";
//import logger from "./midleware/logger";
import logger from "redux-logger";



const store = configureStore({
    reducer: {
        counter :counterReducer,
        
    },
    //middleware:[logger]
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
});

export default store;


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch