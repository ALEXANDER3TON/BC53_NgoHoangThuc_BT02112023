import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chairBooking: [],
  chairBooked: [],
};

export const BTmovieBookingSlice = createSlice({
  name: "BTMovieBooking",
  initialState,
  reducers: {
    setChairBooking: (state, { payload }) => {
      const index = state.chairBooking.findIndex(
        (value) => value.soGhe === payload.soGhe
      );
      if (index !== -1) {
        state.chairBooking.splice(index, 1);
      } else {
        state.chairBooking.push(payload);
      }
    },
    setChairBooked: (state, {payload}) => {
        state.chairBooked = [...state.chairBooked,...state.chairBooking];
        state.chairBooking = [];
    },
    deleteChairBooking: (state, {payload}) => {
        const index = state.chairBooking.findIndex(value => value.soGhe === payload.soGhe)
        state.chairBooking.splice(index, 1)
    }
  },
});

export const {
  reducer: btMovieBookingReducer,
  actions: btMovieBookingActions,
} = BTmovieBookingSlice;
