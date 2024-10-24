import { configureStore } from "@reduxjs/toolkit";
import {persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import darkModeReducer from "./slices/darkModeSlice";
import darkModeReducer from "./slice/darkModeSlice"


const persistConfig = {
  key: "root",
  storage,
};



const store = configureStore({
  reducer: {       
    darkmode: darkModeReducer,  
  },
});


const persistor = persistStore(store);

export { store, persistor };