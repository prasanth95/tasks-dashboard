import styled from "styled-components";

import { BaseText } from "../../styleGuide/Typography";
import { desktop } from "../../utils/MediaQueries";

export const Dashboard = styled.div`
	display: flex;
	flex-direction: column;
	${desktop} {
		flex-direction: row;
		justify-content: space-between;
		margin-top: 10px;
	}
`;

export const DetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	height: 158px;
	width: 100%;
	margin-top: 12px;
	background-color: #ffffff;
	box-shadow: 0px 3px 6px #0000000a;
	padding-left: 32px;

	${desktop} {
		width: 304px;
		margin-right: 24px;
		border-radius: 12px;
		:last-child {
			margin-right: 0;
		}
	}
`;

export const Heading = styled(BaseText)`
	font-size: 20px;
	line-height: 24px;
	color: #537178;
`;

export const TasksStatusContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
`;

export const CompletedTasks = styled(BaseText)`
	text-align: left;
	font-size: 64px;
	line-height: 78px;
	color: #5285ec;
`;

export const TotalTasks = styled(BaseText)`
	text-align: left;
	font-size: 20px;
	line-height: 24px;
	color: #8f9ea2;
`;

export const LatestTasksContainer = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-left: 20px;
	padding-right: 12px;
`;

export const LatestTask = styled.li`
	span {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
	}
`;

export const TaskName = styled(BaseText)`
	font-size: 14px;
	line-height: 26px;
	color: #8f9ea2;
	text-decoration: ${(props) => props.isCompleted && "line-through"};
`;
