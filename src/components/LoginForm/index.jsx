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
	const [isValidForm, setIsValidForm] = useState(true);

	const onChangeId = (event) => {
		setId(event.target.value);
		setIsValidForm(true);
	};

	const onChangeName = (event) => {
		setName(event.target.value);
		setIsValidForm(true);
	};

	const onKeyDown = (event) => {
		if (event.keyCode === 13) {
			onClickLogin();
		}
	};

	const areFormFieldsValid = () => {
		const trimmedId = id.trim();
		const trimmedName = name.trim();
		setId(trimmedId);
		setName(trimmedName);
		return trimmedId.length > 2 && trimmedName.length > 2;
	};

	const onClickLogin = () => {
		if (areFormFieldsValid()) {
			const requestObject = {
				name: name.trim(),
				apiKey: process.env.REACT_APP_API_KEY,
			};

			const { onClickLogin } = props;
			onClickLogin(requestObject);
		} else {
			setIsValidForm(false);
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
			<InputField
				value={id}
				placeholder='Id'
				onChange={onChangeId}
				onKeyDown={onKeyDown}
			/>
			<InputField
				value={name}
				placeholder='Name'
				onChange={onChangeName}
				onKeyDown={onKeyDown}
			/>
			<LoginButton onClick={onClickLogin}>
				<ButtonText>Login</ButtonText>
			</LoginButton>
			{renderErrorMessage()}
		</LoginFormContainer>
	);
}

export default LoginForm;
