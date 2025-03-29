import React from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { showToast } from "../../redux/reducers/toastSlice";
import useApi from "../../hooks/useApi";
import API_URLS from "../../constants/apiUrls";

const Header = () => {
	let { request } = useApi();
	let dispatch = useDispatch();
	let navigate = useNavigate();
	const handleLogout = async () => {
		try {
			let data = await request("POST", API_URLS.AUTH.LOGOUT);
			dispatch(showToast({ message: data?.message, type: data?.status }));
			navigate("/login");
		} catch (error) {}
	};
	return (
		<div className="flex justify-between items-center p-2">
			<div>Vizora</div>
			<button
				className="bg-blue-500 text-white p-2 rounded"
				onClick={handleLogout}
			>
				logout
			</button>
		</div>
	);
};

export default Header;
