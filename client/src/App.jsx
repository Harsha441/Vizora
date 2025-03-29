import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import ProtectedRoute from "./pages/Authentication/ProtectedRoute";
import RedirectIfAuthenticated from "./pages/Authentication/RedirectIfAuthenticated";
import Dashboard from "./pages/Home/Dashboard";
import Layout from "./components/Common/Layout";
import DatasourcesPage from "./pages/Datasources/DatasourcesPage";
import Reports from "./pages/Reports/Reports";
import VisualReports from "./pages/VisualReports/VisualReports";
import Settings from "./pages/Settings/Settings";

function App() {
	return (
		<Routes>
			<Route element={<RedirectIfAuthenticated />}>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="*" element={<Navigate to="/login" replace />} />
			</Route>
			<Route element={<ProtectedRoute />}>
				<Route element={<Layout />}>
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/datasources" element={<DatasourcesPage />} />
					<Route path="/reports" element={<Reports />} />
					<Route path="/visual-reports" element={<VisualReports />} />
					<Route path="/settings" element={<Settings />} />
					{/* <Route path="*" element={<Navigate to="/dashboard" replace />} /> */}
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
