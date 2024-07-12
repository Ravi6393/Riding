// src/redux/bookingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  confirmed: false,
  name: '',
  email: '',
  phone: '',
  date: '',
  time: '',
  horseName: '',
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    bookHorse: (state, action) => {
      return {
        ...state,
        ...action.payload,
        confirmed: true,
      };
    },
    resetBooking: (state) => initialState,
  },
});

export const { bookHorse, resetBooking } = bookingSlice.actions;
export default bookingSlice.reducer;

