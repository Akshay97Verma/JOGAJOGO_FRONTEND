import { configureStore } from "@reduxjs/toolkit";
import {persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import darkModeReducer from "./slice/darkModeSlice";
import authSlice from "./slice/authSlice";
import serviceAuthSlice from "./slice/serviceAuthSlice"
import userSlice from "./slice/user/getUserSlice";

const persistConfig = {
  key: "root",
  storage,
};

const auth = persistReducer(
  { ...persistConfig, key: "auth" },
  authSlice
);

const serviceAuth = persistReducer(
  { ...persistConfig, key: "authservice" },
  serviceAuthSlice
);

const getUser = persistReducer(
  { ...persistConfig, key: "getUser" },
  userSlice
);

const store = configureStore({
  reducer: {       
    darkmode: darkModeReducer, 
    auth: auth,
    authservice:serviceAuth,
    getUser:getUser
  },
});


const persistor = persistStore(store);

export { store, persistor };