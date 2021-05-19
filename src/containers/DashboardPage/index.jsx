import React, { useState, useEffect, useContext } from "react";
import { toast } from 'react-toastify';

import Header from "../../components/Header";
import AddOrEditTask from "../../components/AddOrEditTask";
import DashboardDetails from "../../components/DashboardDetails";
import Tasks from "../../components/Tasks";
import UserContext from "../../UserContext";
import { networkCall } from "../../utils/APIUtils";

import {
	DashboardContainer,
	ContentContainer,
	NoTasksContainer,
	NoTaskText,
	AddNewTaskButton,
	ButtonText,
	AddOrEditTaskModal,
	TasksHeader,
	TasksHeading,
	TaskOptions,
	SearchBar,
	SearchButton,
} from "./styledComponents";

const initialState = {
	tasksCompleted: 0,
	totalTasks: 0,
	latestTasks: [],
};

const editingTaskDetails = {
	id: "",
	name: "",
};

function DashboardPage() {
	const { state, dispatch } = useContext(UserContext);
	const [tasks, setTasks] = useState([]);
	const [shouldShowAddOrEditTask, setShouldShowAddOrEditTask] =
		useState(false);
	const [dashboardDetails, setDashboardDetails] = useState(initialState);
	const [searchInput, setSearchInput] = useState("");
	const [editTaskDetails, setEditTaskDetails] = useState(editingTaskDetails);
	const [isPageLoading, setPageLoading] = useState(true);

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		window.addEventListener("click", (event) => {
			event.stopPropagation();
			const addOrEditTaskCard =
				document.getElementById("add-edit-task-card");
			if (addOrEditTaskCard && event.target === addOrEditTaskCard) {
				setEditTaskDetails(editingTaskDetails);
				setShouldShowAddOrEditTask(false);
			}
		});
		return () => {
			window.removeEventListener("click", () => {});
		};
	}, []);

	const fetchData = () => {
		setPageLoading(true);
		let dashboardPromise = fetchDashboardDetails();
		let tasksPromise = fetchTasks();
		Promise.all([dashboardPromise, tasksPromise]).then(() => {
			setPageLoading(false);
		});
	};

	const fetchDashboardDetails = () => {
		return networkCall("dashboard", "GET")
			.then(function (response) {
				setDashboardDetails(response);
			})
			.catch(function (error) {
				toast(error.statusText);
			});
	};

	const fetchTasks = () => {
		return networkCall("tasks", "GET")
			.then(function (response) {
				setTasks(response.tasks);
			})
			.catch(function (error) {
				toast(error.statusText);
			});
	};

	const renderDashboardDetails = () => {
		const { totalTasks } = dashboardDetails;
		if (totalTasks > 0) {
			return <DashboardDetails details={dashboardDetails} />;
		}
	};

	const onClickAddTask = () => {
		setShouldShowAddOrEditTask(true);
	};

	const updateTask = (id, request) => {
		networkCall(`tasks/${id}`, "PUT", request)
			.then(function (response) {
				setEditTaskDetails(editingTaskDetails);
				shouldShowAddOrEditTask && setShouldShowAddOrEditTask(false);
				fetchData();
			})
			.catch(function (error) {
				toast(error.statusText);
			});
	};

	const editTask = (id, name) => {
		setEditTaskDetails({ id: id, name: name });
		setShouldShowAddOrEditTask(true);
	};

	const deleteTask = (id) => {
		networkCall(`tasks/${id}`, "DELETE")
			.then(function (response) {
				fetchData();
			})
			.catch(function (error) {
				toast(error.statusText);
			});
	};

	const renderAddTask = () => {
		return (
			<AddNewTaskButton onClick={onClickAddTask}>
				<ButtonText>+ New Task</ButtonText>
			</AddNewTaskButton>
		);
	};

	const onChangeSearchInput = (event) => {
		const value = event.target.value;
		setSearchInput(value);
	};

	const renderSearchBar = () => {
		return (
			<>
				<SearchBar
					placeholder='Search by task name'
					value={searchInput}
					onChange={onChangeSearchInput}
				/>
				<SearchButton />
			</>
		);
	};

	const renderTasks = () => {
		if (tasks.length > 0) {
			return (
				<>
					<TasksHeader>
						<TasksHeading>Tasks</TasksHeading>
						<TaskOptions>
							{renderSearchBar()}
							{renderAddTask()}
						</TaskOptions>
					</TasksHeader>
					<Tasks
						tasks={tasks}
						searchInput={searchInput}
						onClickUpdate={updateTask}
						onClickEdit={editTask}
						onClickDelete={deleteTask}
					/>
				</>
			);
		}
		return (
			<NoTasksContainer>
				<NoTaskText>You have no task.</NoTaskText>
				{renderAddTask()}
			</NoTasksContainer>
		);
	};

	const onClickLogout = () => {
		dispatch({ type: "LOGOUT" });
	};

	const addTask = (request) => {
		networkCall(`tasks`, "POST", request)
			.then(function (response) {
				setShouldShowAddOrEditTask(false);
				fetchData();
			})
			.catch(function (error) {
				toast(error.statusText);
			});
	};

	const onClickAddOrEditTask = (request) => {
		if (request.id) {
			updateTask(request.id, {
				name: request.name,
			});
		} else {
			addTask({ name: request.name });
		}
	};

	const renderContentContainer = () => {
		if (isPageLoading) {
			return (
				<ContentContainer isPageLoading={isPageLoading}>
					Loading...
				</ContentContainer>
			);
		}
		return (
			<ContentContainer
				isModalOpened={shouldShowAddOrEditTask}
				isTasksEmpty={tasks.length === 0}
			>
				{renderDashboardDetails()}
				{renderTasks()}
			</ContentContainer>
		);
	};

	return (
		<DashboardContainer isModalOpened={shouldShowAddOrEditTask}>
			<Header
				name={state.name}
				image={state.userPic}
				onClickLogout={onClickLogout}
			/>
			{shouldShowAddOrEditTask ? (
				<AddOrEditTaskModal id='add-edit-task-card'>
					<AddOrEditTask
						taskId={editTaskDetails.id}
						taskName={editTaskDetails.name}
						onClickAddOrEditTask={onClickAddOrEditTask}
					/>
				</AddOrEditTaskModal>
			) : null}
			{renderContentContainer()}
		</DashboardContainer>
	);
}

export default DashboardPage;
