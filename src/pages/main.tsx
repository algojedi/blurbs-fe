import React from 'react';
import PostsContainer from '../components/posts/posts-container';
import UsersContainer from '../components/users/users-container';

const MainComponent: React.FC = () => {
	return (
		<div>
			<h1>Main Component</h1>
			<PostsContainer />
			<UsersContainer />
		</div>
	);
};

export default MainComponent;
