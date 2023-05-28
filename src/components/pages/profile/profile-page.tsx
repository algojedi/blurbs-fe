import React from 'react';
import { AppUser } from '../../../types/types';

const defaultUser : AppUser = {
	id: 0,
	name: 'John Doe',
	// avatar: 'https://example.com/avatar.jpg',
};

export type ProfilePageProps = {
	user?: AppUser;
};

const ProfilePage = (props : ProfilePageProps) => {
	const user = props.user ?? defaultUser;
	return (
		<div className="container mt-5">
			<div className="card">
				<div className="card-header">
					<h2>User Profile</h2>
				</div>
				<div className="card-body">
					<div className="row">
						<div className="col-md-6">
							<h4>Name: {user.name}</h4>
						</div>
						<div className="col-md-6">
							<img src="../../../assets/no-image.png" alt="User Avatar" className="img-fluid" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
