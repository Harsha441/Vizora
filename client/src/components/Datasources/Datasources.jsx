import React, { useState } from "react";
import AddButton from "../Common/AddButton";
import Modal from "../Common/Modal";
import DatasourcesList from "./DatasourcesList";
import Upload from "./Upload";
import _ from "lodash";
import useApi from "../../hooks/useApi";
import API_URLS from "../../constants/apiUrls";
import UserDatasources from "./UserDatasources";

const Datasources = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedSource, setSelectedSource] = useState("");
	const [selectedFile, setSelectedFile] = useState(null);
	const [fileDetails, setFileDetails] = useState({
		fileName: "",
		fileDescription: "",
	});
	let { request, loading, error } = useApi();
	// Handle file selection
	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setSelectedFile(file);
	};

	// Handle file drop
	const handleDrop = (event) => {
		event.preventDefault();
		const file = event.dataTransfer.files[0];
		setSelectedFile(file);
	};

	const handleModalOpen = () => {
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	const handleSaveFile = async (e) => {
		// e.preventDefault();
		console.log("Calling save file function", {
			fileDetails,
			selectedFile,
			selectedSource,
		});

		const formData = new FormData();
		formData.append("file", selectedFile);
		formData.append("fileName", fileDetails.fileName);
		formData.append("fileDescription", fileDetails.fileDescription);
		formData.append("fileType", selectedSource.type);
		try {
			let response = await request(
				"POST",
				API_URLS.DATASOURCES.UPLOADFILE,
				formData,
				{ "Content-Type": "multipart/form-data" }
			);
			console.log({ response });
		} catch (error) {
			console.log({ error });
		}
	};

	const handleChangeFileInputs = (e) => {
		let { name, value } = e.target;
		setFileDetails((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<>
			<div>
				<h1>Datasources</h1>
			</div>
			<div className="flex items-center justify-between">
				<h2>Files</h2>
				<AddButton label="Datasource" onClick={handleModalOpen} />
			</div>
			<div>
				<UserDatasources/>
			</div>
			{/* Modal Component */}
			<Modal
				isOpen={isModalOpen}
				onClose={handleModalClose}
				title="Datasources"
				customFooter={!_.isEmpty(selectedSource)}
				modalFooter={
					<div className="flex item-center ">
						<input
							name="fileName"
							type="text"
							placeholder="Enter a name for the datasource"
							className="flex-1 mr-2 border rounded border-gray-500 p-2"
							onChange={handleChangeFileInputs}
						/>
						<button
							className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
							disabled={!selectedFile}
							type="button"
							onClick={handleSaveFile}
						>
							Save
						</button>
					</div>
				}
			>
				<div className="h-[60vh] ">
					{selectedSource ? (
						<Upload
							selectedFile={selectedFile}
							handleDrop={handleDrop}
							handleFileChange={handleFileChange}
							type={selectedSource?.type}
							handleChangeFileInputs={handleChangeFileInputs}
						/>
					) : (
						<DatasourcesList setSelectedSource={setSelectedSource} />
					)}
				</div>
			</Modal>
		</>
	);
};

export default Datasources;
