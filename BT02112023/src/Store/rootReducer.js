import { combineReducers } from "redux";
import { btMovieBookingReducer } from "./BTMovieBooking/slice";


export const rootReduceer = combineReducers({
    btMovieBooking: btMovieBookingReducer,
})