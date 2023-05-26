import React from 'react';
import { useQuery } from 'react-query';
import { API_URL } from '../../api';
import { Post } from '../../types/types';

const fetchPosts = async () => {
	const response = await fetch(`${API_URL}/posts`);
	if (!response.ok) {
		throw new Error('Failed to fetch posts');
	}
	return response.json();
};

 export type PostsProps = { classname? : string}

	const Posts: React.FC<PostsProps> = ({ classname }) => {

	const { data, isLoading, isError, error } = useQuery<Post[], Error>('posts', fetchPosts);

	if (isLoading) {
		return <div>Loading posts...</div>;
	}

	if (isError) {
		return <div>Error: {error?.message}</div>;
	}

	const defaultData: Post[] = [];
	if (!data) {
		defaultData.push({ id: 1, title: 'Post 1', content: 'Post 1 content', creationDate: new Date().toString(), appUser: { id: 1, name: 'John Doe' } })
	}

	return (
		<div>
			<h2>Posts</h2>
			{(data || defaultData).map((post) => (
				<div key={post.id}>
					<h3>{post.title}</h3>
					<p>{post.content}</p>
				</div>
			))}
		</div>
	);
};
export default Posts