import {
	MainContainer,
	HeaderContainer,
	UserImageWithName,
	UserImage,
	UserName,
	LogoutText,
} from "./styledComponents";

function Header(props) {
	const { image, name, onClickLogout } = props;
	return (
		<MainContainer>
			<HeaderContainer>
				<UserImageWithName>
					<UserImage
						alt='userPic'
						src={`https://dev-dl.tdcx.com:3092${image}`}
					/>
					<UserName>{name}</UserName>
				</UserImageWithName>
				<LogoutText onClick={onClickLogout}>Logout</LogoutText>
			</HeaderContainer>
		</MainContainer>
	);
}

export default Header;
