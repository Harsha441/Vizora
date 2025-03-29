import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice.js";
import toastSlice from "./reducers/toastSlice.js";

export const store = configureStore({
	reducer: {
		user: userSlice,
		toast: toastSlice,
	},
});
