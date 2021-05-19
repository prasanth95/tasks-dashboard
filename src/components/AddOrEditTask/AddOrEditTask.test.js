import { render, screen, fireEvent } from "@testing-library/react";
import AddOrEditTask from "./";

describe("AddOrEditTask", () => {
	const onClickAddOrEditTask = jest.fn();

	it("add task", () => {
    render(<AddOrEditTask onClickAddOrEditTask={onClickAddOrEditTask} />);

    const addOrEditTaskId = 'addOrEditTask'
    const addTaskHeading = screen.getByTestId(addOrEditTaskId)
		expect(addTaskHeading).toBeInTheDocument();

    const taskName = 'First Task'
    const addTaskInput = screen.getByPlaceholderText('Task Name')
    fireEvent.change(addTaskInput, {target: {value: taskName}})

    const addTaskButton = screen.getByRole('button')
    fireEvent.click(addTaskButton)
    const addTaskRequest = {
      name: taskName
    }
    expect(onClickAddOrEditTask).toBeCalledWith(addTaskRequest)
	});

  it('edit task', () => {
    const taskId = '123'
    const taskName = 'Editing Task'
    render(<AddOrEditTask taskId={taskId} taskName={taskName} onClickAddOrEditTask={onClickAddOrEditTask} />);

    const addOrEditTaskId = 'addOrEditTask'
    const addTaskHeading = screen.getByTestId(addOrEditTaskId)
		expect(addTaskHeading.innerHTML).toEqual('Edit Task');

    const editingTaskName = 'Editing Task Updated'
    const editTaskInput = screen.getByPlaceholderText('Task Name')
    fireEvent.change(editTaskInput, {target: {value:editingTaskName }})

    const editTaskButton = screen.getByRole('button')
    fireEvent.click(editTaskButton)
    const editTaskRequest = {
      name: editingTaskName,
      id: taskId
    }
    expect(onClickAddOrEditTask).toBeCalledWith(editTaskRequest)
  })
});
