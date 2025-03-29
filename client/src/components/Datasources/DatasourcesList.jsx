import React from "react";
import { BsFiletypeCsv, BsFiletypeXlsx, BsFiletypeJson } from "react-icons/bs";

const DatasourcesList = ({ setSelectedSource }) => {
	let filesList = [
		{ name: "CSV", type: ".csv", icon: <BsFiletypeCsv size={50} /> },
		{ name: "Excel", type: ".xlsx", icon: <BsFiletypeXlsx size={50} /> },
		{ name: "JSON", type: ".json", icon: <BsFiletypeJson size={50} /> },
	];
	return (
		<div>
			<div>
				<h2 className="text-lg font-semibold">Files</h2>
				<div className="flex flex-wrap gap-4 mt-2">
					{filesList?.map((file) => {
						return (
							<button
								onClick={() => setSelectedSource(file)}
								key={file.name}
								className="p-4 flex flex-col items-center justify-center border border-gray-100 rounded hover:bg-gray-100"
							>
								<div>{file.icon}</div>
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default DatasourcesList;
