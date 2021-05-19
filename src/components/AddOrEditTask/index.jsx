import React, { useState } from "react";

import {
	TaskContainer,
	TaskHeader,
	InputField,
	Button,
	ButtonText,
	ErrorMessage,
} from "./styledComponents";

function AddOrEditTask(props) {
	const initialValue = props.taskName || "";
	const [task, setTask] = useState(initialValue);
	const [isValidTaskName, setIsValidTaskName] = useState(true);

	const onChangeTask = (event) => {
		setTask(event.target.value);
		setIsValidTaskName(true);
	};

	const onKeyDown = (event) => {
		if (event.keyCode === 13) {
			onClickAddOrEditTask();
		}
	};

	const onClickAddOrEditTask = () => {
		const { onClickAddOrEditTask } = props;
		const trimmedTask = task.trim()
		setTask(trimmedTask)
		if (trimmedTask.length > 2) {
			onClickAddOrEditTask({ id: props.taskId, name: trimmedTask });
		} else {
			setIsValidTaskName(false);
		}
	};

	const renderValidationError = () => {
		if (!isValidTaskName) {
			return (
				<ErrorMessage>
					Task Name should have minimum 3 characters
				</ErrorMessage>
			);
		}
		return <ErrorMessage />;
	};

	return (
		<TaskContainer>
			<TaskHeader data-testid='addOrEditTask'>
				{props.taskId ? "Edit Task" : "+ New Task"}
			</TaskHeader>
			<InputField
				placeholder='Task Name'
				value={task}
				onChange={onChangeTask}
				onKeyDown={onKeyDown}
			/>
			<Button onClick={onClickAddOrEditTask}>
				<ButtonText>{props.taskId ? "Edit Task" : "+ New Task"}</ButtonText>
			</Button>
			{renderValidationError()}
		</TaskContainer>
	);
}

export default AddOrEditTask;
