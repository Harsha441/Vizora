import React from "react";

const Modal = ({
	isOpen,
	onClose,
	title,
	children,
	customFooter,
	modalFooter,
}) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
			<div className="bg-white p-6 rounded-lg shadow-lg w-96">
				{/* Modal Header */}
				<div className="flex justify-between items-center border-b pb-2">
					<h2 className="text-xl font-semibold">{title}</h2>
					<button
						onClick={onClose}
						className="text-gray-500 hover:text-gray-800"
					>
						X
					</button>
				</div>

				{/* Modal Content */}
				<div className="py-4">{children}</div>

				{/* Modal Footer */}
				{customFooter ? (
					modalFooter
				) : (
					<div className="flex justify-end">
						<button
							onClick={onClose}
							className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
						>
							Close
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Modal;
