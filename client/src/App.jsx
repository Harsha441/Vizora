import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/Authentication/ProtectedRoute";
import RedirectIfAuthenticated from "./pages/Authentication/RedirectIfAuthenticated";

function App() {
	return (
		<Routes>
			<Route element={<RedirectIfAuthenticated />}>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="*" element={<Navigate to="/login" replace />} />
			</Route>
			<Route
				path="/dashboard"
				element={
					<ProtectedRoute>
						<Dashboard />
					</ProtectedRoute>
				}
			/>
		</Routes>
	);
}

export default App;
