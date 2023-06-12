import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingForm } from "../../api/client";
import dayjs from "dayjs/esm";

interface StateBookingForm extends BookingForm {
  firstNameError: string | null;
  lastNameError: string | null;
  phoneError: string | null;
  emailError: string | null;
  isFormValid: boolean;
}

const initialState: StateBookingForm = {
  first_name: "",
  firstNameError: null,
  last_name: "",
  lastNameError: null,
  email: "",
  emailError: null,
  phone: "",
  phoneError: null,
  tent_type: BookingForm.tent_type.PRISMA,
  check_in_date: "",
  check_out_date: "",
  adults: 1,
  children: 0,
  total_members: 0,
  isFormValid: false,
};

export const bookingFormSlice = createSlice({
  name: "bookingForm",
  initialState,
  reducers: {
    setFormFirstName: (state, action: PayloadAction<string>) => {
      if (action.payload.length < 3) {
        return {
          ...state,
          firstNameError: "First name must be at least 3 characters",
        };
      }
      return { ...state, first_name: action.payload, firstNameError: null };
    },
    setFormLastName: (state, action: PayloadAction<string>) => {
      if (action.payload.length < 3) {
        return {
          ...state,
          lastNameError: "Last name must be at least 3 characters",
        };
      }
      return { ...state, last_name: action.payload, lastNameError: null };
    },
    setFormPhone: (state, action: PayloadAction<string>) => {
      if (!action.payload.match(/^\+?[0-9]\d{1,20}$/i)) {
        return { ...state, phoneError: "Invalid phone number" };
      }
      return { ...state, phone: action.payload, phoneError: null };
    },
    setFormEmail: (state, action: PayloadAction<string>) => {
      if (!action.payload.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
        return { ...state, emailError: "Invalid email address" };
      }
      return { ...state, email: action.payload, emailError: null };
    },
    setFormCheckInDate: (state, action: PayloadAction<string>) => {
      if (dayjs(action.payload).isValid()) {
        return { ...state, check_in_date: dayjs(action.payload).format() };
      }
    },
    setFormCheckOutDate: (state, action: PayloadAction<string>) => {
      if (dayjs(action.payload).isValid()) {
        return {
          ...state,
          check_out_date: dayjs(action.payload).format(),
        };
      }
    },
    setFormAdults: (state, action: PayloadAction<number>) => {
      // add validation according to tent type
      return { ...state, adults: action.payload };
    },
    validateForm: (state) => {
      if (
        !state.firstNameError &&
        !state.lastNameError &&
        !state.phoneError &&
        !state.emailError
      ) {
        return { ...state, isFormValid: true };
      }
      return { ...state, isFormValid: false };
    },
  },
});

export const {
  setFormFirstName,
  setFormLastName,
  setFormPhone,
  setFormEmail,
  setFormCheckInDate,
  setFormCheckOutDate,
  setFormAdults,
  validateForm,
} = bookingFormSlice.actions;

export default bookingFormSlice.reducer;
