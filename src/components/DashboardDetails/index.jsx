import { Pie } from "react-chartjs-2";

import {
	Dashboard,
	DetailContainer,
	Heading,
	TasksStatusContainer,
	CompletedTasks,
	TotalTasks,
	LatestTasksContainer,
	LatestTask,
	TaskName,
} from "./styledComponents";

function DashboardDetails(props) {
	const { tasksCompleted, totalTasks, latestTasks } = props.details;

	const renderPieChart = () => {
		return (
			<DetailContainer>
				<Pie
					height={103}
					width={103}
					data={{
						labels: ["Completed Tasks", "Not Completed Tasks"],
						datasets: [
							{
								label: "Completed Tasks",
								backgroundColor: ["#5285EC", "#E8ECEC"],
								data: [tasksCompleted, totalTasks - tasksCompleted],
							},
						],
					}}
					options={{
						animation: false,
						legend: { display: false, position: "right" },
						maintainAspectRatio: false,
					}}
				/>
			</DetailContainer>
		);
	};

	const renderLatestTasks = () => {
		return (
			<DetailContainer>
				<Heading>Latest Created Tasks</Heading>
				<LatestTasksContainer>
					{latestTasks.map((task) => {
						return (
							<LatestTask key={task.name}>
								<TaskName isCompleted={task.completed}>
									{task.name}
								</TaskName>
							</LatestTask>
						);
					})}
				</LatestTasksContainer>
			</DetailContainer>
		);
	};

	const renderTasksStatus = () => {
		return (
			<DetailContainer>
				<Heading>Tasks Completed</Heading>
				<TasksStatusContainer>
					<CompletedTasks>{tasksCompleted}</CompletedTasks>
					<TotalTasks>/{totalTasks}</TotalTasks>
				</TasksStatusContainer>
			</DetailContainer>
		);
	};

	return (
		<Dashboard>
			{renderTasksStatus()}
			{renderLatestTasks()}
			{renderPieChart()}
		</Dashboard>
	);
}

export default DashboardDetails;
