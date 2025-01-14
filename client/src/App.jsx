import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import Dashboard from "./pages/Dashboard";

// Simulated authentication check
const isAuthenticated = () => {
	console.log("Inside isAuthenticated");
	console.log(document.cookie);
	// Replace this with a real authentication check
	return document.cookie.includes("token"); // Check if token exists in cookies
};

// ProtectedRoute Component
const ProtectedRoute = ({ children }) => {
	return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

function App() {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
			<Route
				path="/dashboard"
				element={
					<ProtectedRoute>
						<Dashboard />
					</ProtectedRoute>
				}
			/>
			<Route path="*" element={<Navigate to="/login" replace />} />
		</Routes>
	);
}

export default App;
