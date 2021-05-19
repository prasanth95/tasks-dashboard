import React, { useState } from "react";

import {
	LoginFormContainer,
	FormHeader,
	InputField,
	LoginButton,
	ButtonText,
	ErrorMessage,
} from "./styledComponents";

function LoginForm(props) {
	const [id, setId] = useState("");
	const [name, setName] = useState("");
	const [isValidForm, setIsValidForm] = useState(true)

	const onChangeId = (event) => {
		setId(event.target.value);
		setIsValidForm(true)
	};

	const onChangeName = (event) => {
		setName(event.target.value);
		setIsValidForm(true)
	};

	const areFormFieldsValid = () => {
		return id.length > 2 && name.length > 2
	}

	const onClickLogin = () => {
		if (areFormFieldsValid()) {
			const requestObject = {
				name: name,
				apiKey: process.env.REACT_APP_API_KEY,
			};
	
			const { onClickLogin } = props;
			onClickLogin(requestObject);
		} else {
			setIsValidForm(false)
		}
	};

	const renderErrorMessage = () => {
		if (!isValidForm) {
			return (
				<ErrorMessage>
					Id and Name should have minimum 3 characters
				</ErrorMessage>
			);
		}
		return <ErrorMessage />;
	};

	return (
		<LoginFormContainer>
			<FormHeader>Login</FormHeader>
			<InputField value={id} placeholder='Id' onChange={onChangeId} />
			<InputField value={name} placeholder='Name' onChange={onChangeName} />
			<LoginButton onClick={onClickLogin}>
				<ButtonText>Login</ButtonText>
			</LoginButton>
			{renderErrorMessage()}
		</LoginFormContainer>
	);
}

export default LoginForm;
