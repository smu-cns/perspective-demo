import { configureStore } from "@reduxjs/toolkit";
import PerspectiveReducer from "./perspectiveSlice";

export const store = configureStore({
  reducer: PerspectiveReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
