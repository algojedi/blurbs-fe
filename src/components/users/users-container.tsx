import React, { createContext, useState } from 'react';

interface UserContextProps {
	user: AppUser | null;
	login: (name: string) => void;
	logout: () => void;
}

export const UserContext = createContext<UserContextProps>({
	user: null,
	login: () => { },
	logout: () => { },
});

const UserContainer: React.FC = () => {
	const [user, setUser] = useState<AppUser | null>(null);

	const login = (name: string) => {
		const newUser: AppUser = { id: 1, name };
		setUser(newUser);
	};

	const logout = () => {
		setUser(null);
	};

	return (
		<UserContext.Provider value={{ user, login, logout }}>
			<UserPresenter />
		</UserContext.Provider>
	);
};

export default UserContainer;
