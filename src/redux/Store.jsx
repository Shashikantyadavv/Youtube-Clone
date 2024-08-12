import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { AuthReducer } from "./reducers/Auth.reducer";
import {
  homeVideoReducer,
  selectedVideoReducer,
} from "./reducers/Video.reducer";
import { channelDetailReducer } from "./reducers/Channel.reducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  homeVideo: homeVideoReducer,
  selectedVideo: selectedVideoReducer,
  channelDetail : channelDetailReducer,
});

const store = configureStore({
  reducer: rootReducer,
  preloadedState: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // add your middleware here
});

export default store;
