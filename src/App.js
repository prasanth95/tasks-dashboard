import React, { useReducer, useEffect, useState } from "react";

import DashboardPage from "./containers/DashboardPage";
import LoginPage from "./containers/LoginPage";
import UserContext from "./UserContext";
import { setUserData, getUserData, clearStorage } from "./utils/StorageUtils";

const initialState = {
	isUserLoggedIn: false,
	name: "",
	userPic: "",
};

const reducer = (state, action) => {
	switch (action.type) {
		case "LOGIN":
			const { token, image } = action.payload;
			setUserData({
				token: token.token,
				name: token.name,
				image: image,
			});
			return {
				...state,
				isUserLoggedIn: true,
				name: token.name,
				userPic: image,
			};
		case "LOGOUT":
			clearStorage();
			return {
				...state,
				isUserLoggedIn: false,
				name: "",
				userPic: "",
			};
		default:
			return state;
	}
};
function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [isPageLoading, setPageLoading] = useState(true);

	const setStateValues = () => {
		getUserData().token.token &&
			dispatch({
				type: "LOGIN",
				payload: getUserData(),
			});
		setPageLoading(false);
	};

	useEffect(() => {
		setStateValues();
	}, []);

	if (isPageLoading) {
		return null;
	}

	return (
		<UserContext.Provider value={{ state, dispatch }}>
			<div className='App'>
				{state.isUserLoggedIn ? <DashboardPage /> : <LoginPage />}
			</div>
		</UserContext.Provider>
	);
}

export default App;
