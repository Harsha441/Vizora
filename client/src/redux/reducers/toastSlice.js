import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const toastSlice = createSlice({
	name: "toast",
	initialState: {},
	reducers: {
		showToast: (_, action) => {
			const { message, type } = action.payload;
			if (type === "success") toast.success(message);
			else if (type === "error") toast.error(message);
			else if (type === "info") toast.info(message);
			else toast(message);
		},
	},
});

export const { showToast } = toastSlice.actions;
export default toastSlice.reducer;
