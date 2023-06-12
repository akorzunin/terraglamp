import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { bookingFormSlice } from "./reducers/bookingFormReduser";

const rootReducer = combineReducers({
  bookingForm: bookingFormSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
