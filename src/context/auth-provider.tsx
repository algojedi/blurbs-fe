import React, { createContext, useState } from 'react';
import { AppUser } from '../types/types';

interface AuthContextProps {
	user: AppUser | null;
	login: (user: AppUser) => void;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
	user: null,
	login: () => { return },
	logout: () => { return },
});

type AuthProviderProps = {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = useState<AppUser | null>(null);

	const login = (user: AppUser) => {
		setUser(user);
	};

	const logout = () => {
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
