import React from 'react';
import { useQuery } from 'react-query';
import { API_URL } from '../../api';
import PostsPresenter from './posts-presenter';
import { Post } from '../../types/types';

const fetchPosts = async () => {
	const response = await fetch(`${API_URL}/posts`);
	if (!response.ok) {
		throw new Error('Failed to fetch posts');
	}
	return response.json();
};

const PostsContainer: React.FC = () => {
	const { data, isLoading, isError, error } = useQuery<Post[]>('posts', fetchPosts);

	return <PostsPresenter data={data} isLoading={isLoading} isError={isError} error={error} />;
};

export default PostsContainer;
