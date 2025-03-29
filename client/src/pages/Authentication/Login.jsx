import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { useNavigate } from "react-router";
import useApi from "../../hooks/useApi";
import API_URLS from "../../constants/apiUrls";
import { useDispatch } from "react-redux";
import { showToast } from "../../redux/reducers/toastSlice";

const Login = () => {
	let navigate = useNavigate();
	let dispatch = useDispatch();

	let { request, loading, error } = useApi();

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [message, setMessage] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const handleChangeInput = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		const { email, password } = formData;
		try {
			let data = await request("POST", API_URLS.AUTH.LOGIN, {
				email,
				password,
			});
			dispatch(showToast({ message: data?.message, type: data?.status }));
			if (data?.status === "success") {
				navigate("/dashboard");
			}
			console.log(data);
		} catch (error) {
			console.log({ error });
		}
	};
	return (
		<div>
			<div className="h-[100vh] w-full flex flex-col md:flex-row items-center justify-center md:justify-normal">
				<div className="w-md-1/2 px-10 md:px-52 ">
					<div className="max-md-w-[500px] max-sm-w-full">
						<h1 className="text-center font-semibold text-xl mb-4">
							Welcome Back
						</h1>
						<form onSubmit={handleLogin}>
							<div className="mb-4">
								<label htmlFor="email" className=" font-medium ">
									Email
								</label>
								<div className="relative mt-1">
									<span className="absolute left-0 inset-y-0 flex items-center pl-3">
										<MdOutlineMail className="text-gray-400" />
									</span>
									<input
										type="email"
										id="email"
										placeholder="test@example.com"
										name="email"
										className="w-full pl-10 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
										value={formData.email}
										onChange={handleChangeInput}
										required
									/>
								</div>
							</div>
							<div className="mb-4">
								<label htmlFor="password" className="block font-medium ">
									Password
								</label>
								<div className="relative mt-1">
									<span className="absolute left-0 inset-y-0 flex items-center pl-3">
										<TbLockPassword className="text-gray-400" />
									</span>
									<input
										type={showPassword ? "text" : "password"}
										id="password"
										name="password"
										placeholder="*********"
										value={formData.password}
										className="w-full border px-10 border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
										onChange={handleChangeInput}
										required
									/>
									<span className="absolute right-0 inset-y-0 flex items-center pr-3">
										{showPassword ? (
											<button
												type="button"
												onClick={() => setShowPassword(false)}
											>
												<LuEyeClosed className="text-gray-600" />
											</button>
										) : (
											<button
												type="button"
												onClick={() => setShowPassword(true)}
											>
												<LuEye className="text-gray-600" />
											</button>
										)}
									</span>
								</div>
							</div>

							<button type="button" className="hover:underline text-sm">
								Forgot Password?
							</button>

							<div className="w-full flex  justify-end">
								<button
									className="bg-gray-700 text-white px-4 py-2 rounded-md"
									type="submit"
								>
									Login
								</button>
							</div>
							<div className="mt-2">
								<span className="text-sm">Don't have an account?</span>
								<button
									type="button"
									className="text-sm ml-1 hover:underline"
									onClick={() => navigate("/signup")}
								>
									Sign Up
								</button>
							</div>
						</form>
						{message && <p>{message}</p>}
					</div>
				</div>
				<div className="w-md-1/2 sm-hidden"></div>
			</div>
		</div>
	);
};

export default Login;
