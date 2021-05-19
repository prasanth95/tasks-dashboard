import {
	TasksContainer,
	TaskContainer,
	TaskNameContainer,
	Checkbox,
	TaskName,
	Icons,
	EditButton,
	DeleteButton,
} from "./styledComponents";

function Tasks(props) {
	const onClickDelete = (id) => {
		const userConfirmedDelete = window.confirm(
			"Are you sure you want to delete the task?"
		);
		if (userConfirmedDelete) {
			const { onClickDelete } = props;
			onClickDelete(id);
		}
	};

	const onClickCompleted = (id, completedStatus) => {
		const { onClickUpdate } = props;
		onClickUpdate(id, {
			completed: completedStatus,
		});
	};

	const renderTasks = () => {
		const { tasks, searchInput } = props;
		return tasks.map((task) => {
			const searchInputInLowerCase = searchInput.toLowerCase();
			if (task.name.toLowerCase().includes(searchInputInLowerCase)) {
				return (
					<TaskContainer key={task._id}>
						<TaskNameContainer
							onClick={() => onClickCompleted(task._id, !task.completed)}
						>
							<Checkbox
								type='checkbox'
								checked={task.completed}
								onChange={() =>
									onClickCompleted(task._id, !task.completed)
								}
							/>
							<TaskName isCompleted={task.completed}>
								{task.name}
							</TaskName>
						</TaskNameContainer>
						<Icons>
							<EditButton
								data-testid='editIcon'
								onClick={() => props.onClickEdit(task._id, task.name)}
							/>
							<DeleteButton
								data-testid='deleteIcon'
								onClick={() => onClickDelete(task._id)}
							/>
						</Icons>
					</TaskContainer>
				);
			}
			return null;
		});
	};
	return <TasksContainer>{renderTasks()}</TasksContainer>;
}

export default Tasks;
