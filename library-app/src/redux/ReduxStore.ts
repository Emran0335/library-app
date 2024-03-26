import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "../redux/slices/AuthenticationSlice";
import modalReducer from "../redux/slices/ModalSlice";
import bookReducer from "../redux/slices/BookSlice"

export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    modal: modalReducer,
    book: bookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
