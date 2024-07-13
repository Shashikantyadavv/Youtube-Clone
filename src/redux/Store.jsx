import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { AuthReducer } from "./reducers/Auth.reducer";
import { homeVideoReducer } from "./reducers/Video.reducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  homeVideo: homeVideoReducer,
});

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // add your middleware here
});

export default store;
