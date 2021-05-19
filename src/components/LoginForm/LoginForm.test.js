import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./";

describe("LoginForm", () => {
	const onClickLogin = jest.fn();
	render(<LoginForm onClickLogin={onClickLogin} />);

	it("fill login form and click login button", () => {
		const id = "Testing User Id";
		const userId = screen.getByPlaceholderText("Id");
		fireEvent.change(userId, { target: { value: id } });

		const name = "Testing User";
		const userName = screen.getByPlaceholderText("Name");
		fireEvent.change(userName, { target: { value: name } });

		const loginButton = screen.getByRole("button");
		fireEvent.click(loginButton);
		const loginRequest = {
			name: name,
			apiKey: process.env.REACT_APP_API_KEY,
		};
		expect(onClickLogin).toBeCalledWith(loginRequest);
	});
});
