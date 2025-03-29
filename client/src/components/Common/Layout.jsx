import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

const Layout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Header */}
			<Header />

			{/* Main Content */}
			<div className="flex flex-1">
				{/* Sidebar */}
				<Sidebar />

				{/* Dynamic Content */}
				<main className="flex-1 p-4">
					<Outlet />
				</main>
			</div>

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default Layout;
