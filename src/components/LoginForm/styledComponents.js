import styled from "styled-components";

import { BaseText } from "../../styleGuide/Typography";

export const LoginFormContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 296px;
	min-height: 250px;
	padding: 24px 24px;
	margin: 12px 12px;
	border-radius: 12px;
	box-shadow: 0px 3px 6px #00000029;
	background-color: #ffffff;
`;

export const FormHeader = styled(BaseText)`
	font-size: 20px;
	line-height: 24px;
	color: #537178;
	text-align: left;
	margin-bottom: 24px;
`;

export const InputField = styled.input`
	border: 0;
	border-radius: 8px;
	height: 40px;
	padding: 11px 0px 11px 16px;
	background: #eef1f8;
	margin-bottom: 12px;
`;

export const LoginButton = styled.button`
	border: 0;
	border-radius: 8px;
	height: 40px;
	background: #5285ec;
	cursor: pointer;
`;

export const ButtonText = styled(BaseText)`
	font-size: 14px;
	line-height: 18px;
	color: #ffffff;
`;

export const ErrorMessage = styled(BaseText)`
	font-size: 10px;
	line-height: 14px;
	color: red;
	height: 10px;
`;
