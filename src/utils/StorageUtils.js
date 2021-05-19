const USER_TOKEN = "token";
const USER_NAME = "name";
const USER_PIC = "user_pic";

export function setUserData(data) {
	setToken(data.token);
	setName(data.name);
	setPic(data.image);
}

export function getUserData() {
	return {
		token: {
			token: getToken(),
			name: getName(),
		},
		image: getPic(),
	};
}

export function setToken(value) {
	sessionStorage.setItem(USER_TOKEN, value);
}

export function getToken() {
	return sessionStorage.getItem(USER_TOKEN);
}

export function setName(value) {
	sessionStorage.setItem(USER_NAME, value);
}

export function getName() {
	return sessionStorage.getItem(USER_NAME);
}

export function setPic(value) {
	sessionStorage.setItem(USER_PIC, value);
}

export function getPic() {
	return sessionStorage.getItem(USER_PIC);
}

export function clearStorage() {
	sessionStorage.clear();
}
