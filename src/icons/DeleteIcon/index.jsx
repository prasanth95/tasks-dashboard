import * as React from "react";

function DeleteIcon(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={16}
			height={18.13}
			viewBox='0 0 16 18.13'
			{...props}
		>
			<path
				d='M15 1.13h-4v-1c-.145-.291-.675 0-1 0H6c-.325 0-.857-.292-1 0v1H1a1.577 1.577 0 00-1 1v1c0 .316.684 0 1 0h14c.316 0 1 .316 1 0v-1a1.577 1.577 0 00-1-1zm-13 16c.057.9 1.095 1 2 1h8c.9 0 1.943-.1 2-1l1-12H1z'
				fill='#647278'
			/>
		</svg>
	);
}

export default DeleteIcon;
