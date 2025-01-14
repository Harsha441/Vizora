import { createSlice } from "@reduxjs/toolkit";

import _ from "lodash";

let initialState = {
	firstName: "",
	lastName: "",
	email: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserData: (state, action) => {
			_.keys(action.payload)._.map((key) => {
				state[key] = action.payload[key];
			});
		},
	},
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
