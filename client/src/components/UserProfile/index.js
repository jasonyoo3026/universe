import React from "react";
import { Image } from 'semantic-ui-react';

import { useAuth0 } from "@auth0/auth0-react";

const UserProfile = () => {
	const { user } = useAuth0();
	const { nickname, picture } = user;
	const renderProfileImage = () => (
		<Image src={picture} alt="User Profile" size="small" avatar />
	);
	const renderWelcomeMessage = () => <h3>Welcome, {nickname}!</h3>;
	return (
		<main className="user-profile-container">
			{renderProfileImage()}
			{renderWelcomeMessage()}
		</main>
	);
};

export default UserProfile;
