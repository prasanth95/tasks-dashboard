import styled from "styled-components";

import { BaseText } from "../../styleGuide/Typography";
import { desktop } from "../../utils/MediaQueries";

export const MainContainer = styled.header`
	width: 100%;
	height: 72px;
	padding: 12px 24px;
	box-shadow: 0px 3px 6px #00000029;
	background-color: #ffffff;
	position: fixed;
	z-index: 10000;
`;

export const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	${desktop} {
		max-width: 960px;
		margin: auto;
	}
`;

export const UserImageWithName = styled.div`
	display: flex;
	align-items: center;
`;

export const UserImage = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 24px;
	background-color: #e8ecec;
	object-fit: cover;
`;

export const UserName = styled(BaseText)`
	margin-left: 16px;
	font-size: 16px;
	line-height: 19px;
	color: #6d8187;
`;

export const LogoutText = styled(UserName)`
	cursor: pointer;
`;
