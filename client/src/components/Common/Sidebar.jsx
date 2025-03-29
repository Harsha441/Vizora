import React from "react";

const Sidebar = () => {
	let sidebarLinks = [
		{ link: "/dashboard", label: "Home" },
		{ link: "/datasources", label: "Data Sources" },
		{ link: "/reports", label: "Reports" },
		{ link: "/visual-reports", label: "Visual Reports" },
		{ link: "/settings", label: "Settings" },
	];
	return (
		<aside className="w-64 bg-gray-100 p-4">
			<ul>
				{sidebarLinks.map((link) => (
					<li key={link.label} className="p-2 hover:bg-gray-200 rounded">
						<a href={link.link}>{link.label}</a>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default Sidebar;
