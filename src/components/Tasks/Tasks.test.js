import { render, screen, fireEvent } from "@testing-library/react";
import Tasks from "./";

describe("Tasks", () => {
	const onClickDelete = jest.fn();
	const onClickUpdate = jest.fn();
	const onClickEdit = jest.fn();
	const searchInput = "";
	const tasks = [
		{
			name: "First Task",
			completed: false,
			_id: "1",
		},
		{
			name: "Second Task",
			completed: false,
			_id: "2",
		},
	];

	let confirmSpy = jest.spyOn(window, "confirm");
	let renderResult
	beforeEach(() => {
		renderResult = render(
			<Tasks
				onClickDelete={onClickDelete}
				onClickUpdate={onClickUpdate}
				onClickEdit={onClickEdit}
				searchInput={searchInput}
				tasks={tasks}
			/>
		);
	});

	it("update task completion status", () => {
		const task1 = screen.getByText(tasks[0].name);
		fireEvent.click(task1);

		const updateRequest = {
			completed: !tasks[0].completed,
		};
		expect(onClickUpdate).toBeCalledWith(tasks[0]._id, updateRequest);
	});

	it("edit task completion status", () => {
		const editIconTestId = "editIcon";
		const task2EditIcon = screen.getAllByTestId(editIconTestId)[1];
		fireEvent.click(task2EditIcon);

		expect(onClickEdit).toBeCalledWith(tasks[1]._id, tasks[1].name);
	});

	it("delete task completion status on confirmation", () => {
		confirmSpy.mockImplementation(jest.fn(() => true));

		const deleteIconTestId = "deleteIcon";
		const task2DeleteIcon = screen.getAllByTestId(deleteIconTestId)[1];
		fireEvent.click(task2DeleteIcon);

		expect(onClickDelete).toBeCalledWith(tasks[1]._id);
	});

	it("delete task completion status on confirmation not given", () => {
		confirmSpy.mockImplementation(jest.fn(() => false));

		const deleteIconTestId = "deleteIcon";
		const task2DeleteIcon = screen.getAllByTestId(deleteIconTestId)[1];
		fireEvent.click(task2DeleteIcon);

		expect(onClickDelete).toBeCalledTimes(0);
	});

	it("render tasks based on search input", () => {
		renderResult.rerender(
			<Tasks
				onClickDelete={onClickDelete}
				onClickUpdate={onClickUpdate}
				onClickEdit={onClickEdit}
				searchInput='first'
				tasks={tasks}
			/>
		);
		const displayedTasks = screen.getAllByTestId("editIcon");
		expect(displayedTasks.length).toBe(1);
	});
});
