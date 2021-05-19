import { useContext } from "react";
import { toast } from 'react-toastify';

import LoginForm from "../../components/LoginForm";
import UserContext from "../../UserContext";
import { networkCall } from "../../utils/APIUtils";

import { LoginPageContainer } from "./styledComponents";

function LoginPage() {
	const { dispatch } = useContext(UserContext);

	const login = (requestObject) => {
		networkCall("login", "POST", requestObject)
			.then(function (response) {
				if (response.token) {
					dispatch({
						type: "LOGIN",
						payload: response,
					});
				}
			})
			.catch(function (error) {
				toast(error.statusText);
			});
	};

	const onClickLogin = (requestObject) => {
		login(requestObject);
	};

	return (
		<LoginPageContainer>
			<LoginForm onClickLogin={onClickLogin} />
		</LoginPageContainer>
	);
}

export default LoginPage;
