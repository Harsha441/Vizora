import React from "react";

const AddButton = ({ label, onClick }) => {
	return (
		<button className="hover:bg-gray-200 p-2 rounded" onClick={onClick}>
			+ {label}
		</button>
	);
};

export default AddButton;
