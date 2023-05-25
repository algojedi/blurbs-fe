import React, { useContext } from 'react';
import { UserContext } from './UserContainer';

const UserPresenter: React.FC = () => {
	const { user, login, logout } = useContext(UserContext);

	const handleLogin = () => {
		login('John Doe');
	};

	const handleLogout = () => {
		logout();
	};

	return (
		<div>
			{user ? (
				<>
					<h3>Welcome, {user.name}!</h3>
					<button onClick={handleLogout}>Logout</button>
				</>
			) : (
        <>
					<h3>Please log
