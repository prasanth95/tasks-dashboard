import styled from "styled-components";

import { BaseText } from "../../styleGuide/Typography";
import SearchIcon from "../../icons/SearchIcon";
import { desktop } from "../../utils/MediaQueries";

export const DashboardContainer = styled.div`
	height: 100vh;
	overflow: ${(props) => props.isModalOpened && "hidden"};
`;

export const ContentContainer = styled.div`
	background-color: #f4f4f6;
	min-height: 100vh;
	padding-top: 72px;
	display: flex;
	flex-direction: column;
	overflow: ${(props) => props.isModalOpened && "hidden"};
	${(props) => {
		if (props.isPageLoading) {
			return {
				"justify-content": "center",
				"align-items": "center",
			};
		}
	}}

	${desktop} {
		justify-content: ${(props) =>
			(props.isTasksEmpty || props.isPageLoading) && "center"};
		align-items: center;
		padding-bottom: 24px;
	}
`;

export const NoTasksContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 158px;
	width: 100%;
	margin-top: 12px;
	background-color: #ffffff;
	box-shadow: 0px 3px 6px #0000000a;

	${desktop} {
		width: 304px;
		border-radius: 12px;
	}
`;

export const NoTaskText = styled(BaseText)`
	text-align: center;
	font-size: 20px;
	line-height: 28px;
	color: #537178;
	margin-bottom: 12px;
`;

export const AddNewTaskButton = styled.button`
	border: 0;
	border-radius: 8px;
	height: 40px;
	margin-top: 8px;
	background-color: #5285ec;
	cursor: pointer;

	${desktop} {
		margin-top: 0;
		margin-left: 12px;
	}
`;

export const ButtonText = styled(BaseText)`
	font-size: 14px;
	line-height: 18px;
	color: #ffffff;
	padding: 11px 22px;
`;

export const AddOrEditTaskModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #00000033;
	height: 100vh;
	padding-top: 84px;
	z-index: 100000;

	${desktop} {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const TasksHeader = styled.div`
	display: flex;
	flex-direction: column;
	margin: 30px 15px 0;
	position: relative;

	${desktop} {
		flex-direction: row;
		width: 100%;
		max-width: 960px;
		justify-content: space-between;
		align-items: center;
	}
`;

export const TasksHeading = styled(BaseText)`
	text-align: center;
	font-size: 20px;
	line-height: 24px;
	color: #537178;
`;

export const TaskOptions = styled.div`
	display: flex;
	flex-direction: column;
	${desktop} {
		flex-direction: row;
		position: relative;
	}
`;

export const SearchBar = styled.input`
	border: 0;
	border-radius: 8px;
	height: 40px;
	padding: 11px 0px 11px 46px;
	background: #d9dfeb;
	margin-top: 8px;

	${desktop} {
		margin-top: 0;
		width: 244px;
	}
`;

export const SearchButton = styled(SearchIcon)`
	position: absolute;
	top: 45px;
	left: 16px;

	${desktop} {
		top: 12px;
	}
`;
