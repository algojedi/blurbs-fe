import React from 'react';
import { Post } from '../../types/types';

type PostsPresenterProps = {
	data: Post[] | undefined;
	isLoading: boolean;
	isError: boolean;
	error: Error | null;
}

const PostsPresenter: React.FC<PostsPresenterProps> = ({ data, isLoading, isError, error }) => {
	if (isLoading) {
		return <div>Loading posts...</div>;
	}

	if (isError) {
		return <div>Error: {error?.message}</div>;
	}

	return (
		<div>
			<h2>Posts</h2>
			{data?.map((post) => (
				<div key={post.id}>
					<h3>{post.title}</h3>
					<p>{post.content}</p>
				</div>
			))}
		</div>
	);
};

export default PostsPresenter;
