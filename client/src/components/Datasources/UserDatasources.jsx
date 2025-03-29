import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import API_URLS from "../../constants/apiUrls";

const UserDatasources = () => {
	const [datasources, setDatasources] = useState([]);
	useEffect(() => {
		getUserDatasources();
	}, []);

	let { request } = useApi();

	const getUserDatasources = async () => {
		try {
			let response = await request("POST", API_URLS.DATASOURCES.GETDATASOURCES);
			console.log({ response });
		} catch (error) {
			console.log({ error });
		}
	};

	return <div>UserDatasources</div>;
};

export default UserDatasources;
