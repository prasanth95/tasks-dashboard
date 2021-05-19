import styled from "styled-components";

import EditIcon from "../../icons/EditIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import { BaseText } from "../../styleGuide/Typography";
import { desktop } from "../../utils/MediaQueries";

export const TasksContainer = styled.div`
	margin-top: 16px;
	margin-bottom: 12px;
	background-color: #ffffff;
	box-shadow: 0px 3px 6px #00000014;
	width: 100%;

	${desktop} {
		border-radius: 12px;
		max-width: 960px;
	}
`;

export const TaskContainer = styled.div`
	padding: 24px 12px 24px 0px;
	margin-left: 16px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
	border-bottom: 2px solid #e8e8e8;
	:last-child {
		border-bottom: none;
	}

	${desktop} {
		margin-left: 24px;
		margin-right: 24px;
	}
`;

export const TaskNameContainer = styled.div`
	display: flex;
	flex-direction: row;
	cursor: pointer;
`;

export const Checkbox = styled.input`
	border: 2px solid #95a4ab;
	border-radius: 4px;
	width: 19px;
	min-width: 19px;
	height: 19px;
`;

export const TaskName = styled(BaseText)`
	text-align: left;
	font-size: 20px;
	line-height: 28px;
	padding-left: 12px;
	padding-right: 24px;
	color: ${(props) => (props.isCompleted ? "#537178" : "#5285ec")};
	text-decoration: ${(props) => props.isCompleted && "line-through"};
`;

export const Icons = styled.div`
	display: flex;
	flex-direction: row;
`;

export const EditButton = styled(EditIcon)`
	cursor: pointer;
`;

export const DeleteButton = styled(DeleteIcon)`
	cursor: pointer;
	margin-left: 16px;
`;

export const Separator = styled.hr`
	height: 2px;
	background-color: #e8e8e8;
`;
