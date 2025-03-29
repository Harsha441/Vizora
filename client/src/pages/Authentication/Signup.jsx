import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import useApi from "../../hooks/useApi";
import API_URLS from "../../constants/apiUrls";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { showToast } from "../../redux/reducers/toastSlice";

const Signup = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		firstName: "",
		lastName: "",
	});
	let dispatch = useDispatch();
	const [showPassword, setShowPassword] = useState(false);

	let { request } = useApi();

	let navigate = useNavigate();

	const handleChangeInput = (e) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSignup = async (e) => {
		e.preventDefault();
		try {
			let data = await request("POST", API_URLS.AUTH.SIGNUP, formData);
			dispatch(showToast({ message: data?.message, type: data?.status }));
			if (data?.status === "success") {
				navigate("/dashboard");
			} else {
			}
		} catch (error) {}
	};

	return (
		<div className="h-[100vh] w-full flex flex-col md:flex-row items-center justify-center md:justify-normal">
			<div className="w-md-1/2 px-10 md:px-52 ">
				<h1 className="text-xl font-semibold">Sign Up to Vizora</h1>
				<p className="text-sm mt-1">
					Already have an account?{" "}
					<a className="hover:underline font-blue" href="/login">
						Login
					</a>
				</p>
				<form onSubmit={handleSignup} className="mt-4">
					<div className="flex flex-col md:flex-row md:items-center md:gap-2">
						<div>
							<label htmlFor="firstName">First Name</label>
							<div className="relative mt-1">
								<span className="absolute left-0 inset-y-0 flex items-center pl-3">
									<CgProfile className="text-gray-400" />
								</span>
								<input
									id="firstName"
									type="text"
									name="firstName"
									required
									className="w-full pl-10 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
									value={formData.firstName}
									onChange={handleChangeInput}
								/>
							</div>
						</div>
						<div>
							<label htmlFor="lastName">Last Name</label>
							<div className="relative mt-1">
								<span className="absolute left-0 inset-y-0 flex items-center pl-3">
									<CgProfile className="text-gray-400" />
								</span>
								<input
									id="lastName"
									className="w-full pl-10 border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
									type="text"
									name="lastName"
									value={formData.lastName}
									onChange={handleChangeInput}
									required
								/>
							</div>
						</div>
					</div>
					<div className="mb-2 mt-2">
						<label htmlFor="email">Email</label>
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
					<div className="mb-2">
						<label htmlFor="password" className="block ">
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
									<button type="button" onClick={() => setShowPassword(false)}>
										<LuEyeClosed className="text-gray-600" />
									</button>
								) : (
									<button type="button" onClick={() => setShowPassword(true)}>
										<LuEye className="text-gray-600" />
									</button>
								)}
							</span>
						</div>
					</div>
					<div className="w-full flex  justify-end mt-4">
						<button
							className="bg-gray-700 text-white px-4 py-2 rounded-md"
							type="submit"
						>
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
