import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./";

describe("Header rendered with user details and Logout", () => {
	const onClickLogout = jest.fn();
	const name = "Testing User";
	const image = "/profile/user-pic.jpg";
	beforeEach(() => {
		render(
			<Header name={name} image={image} onClickLogout={onClickLogout} />
		);
	});

	it("header contains user name", () => {
		const userName = screen.getByText(name);
		expect(userName).toBeInTheDocument();
	});

	it("header contains user pic", () => {
		const userPic = screen.getByAltText("userPic");
		expect(userPic).toBeInTheDocument();
		expect(userPic.src).toContain(image);
	});

	it("header contains logout button", () => {
		const logOutButton = screen.getByText("Logout");
		expect(logOutButton).toBeInTheDocument();
	});

	it("logout button click", () => {
		const logOutButton = screen.getByText("Logout");
		fireEvent.click(logOutButton);
		expect(onClickLogout).toBeCalled();
	});
});
