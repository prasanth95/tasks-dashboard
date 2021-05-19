import { getToken } from "../utils/StorageUtils";

export function networkCall(url, type, request) {
	const endpoint = `${process.env.REACT_APP_BASE_URL}/${url}`;
	let options = { method: type };
	switch (type) {
		case "GET":
			options = {
				...options,
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			};
			break;
		case "POST":
		case "PUT":
		case "DELETE":
			options = {
				...options,
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${getToken()}`,
				},
				body: JSON.stringify(request),
			};
			break;
		default:
			break;
	}
	return fetch(endpoint, options)
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw response;
		})
		.then((json) => json);
}
