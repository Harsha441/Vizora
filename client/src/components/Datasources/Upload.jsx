import React from "react";

const Upload = ({
	handleDrop,
	handleFileChange,
	selectedFile,
	type,
	handleSaveFile,
	handleChangeFileInputs,
}) => {
	return (
		<form onSubmit={handleSaveFile}>
			{/* Drag & Drop Area */}
			<div
				className="border-dashed border-2 border-gray-300 p-6 text-center mt-4 rounded-lg cursor-pointer h-56 flex items-center justify-center"
				onDrop={handleDrop}
				onDragOver={(e) => e.preventDefault()}
			>
				<input
					type="file"
					onChange={handleFileChange}
					className="hidden"
					id="fileInput"
					accept={type}
				/>
				<label htmlFor="fileInput" className="cursor-pointer">
					<p className="text-gray-600">
						Drag & drop a file here, or{" "}
						<span className="text-blue-500">browse</span>
					</p>
				</label>
			</div>

			{/* Display Selected File */}
			{selectedFile && (
				<div className="mt-4 p-2 border border-gray-200 rounded">
					<p className="text-sm text-gray-700">{selectedFile.name}</p>
				</div>
			)}

			<div>
				<textarea
					name="fileDescription"
					placeholder="Enter description"
					className="mt-4 border-gray-500 border p-2 rounded w-full"
					onChange={handleChangeFileInputs}
				/>
			</div>
		</form>
	);
};

export default Upload;
