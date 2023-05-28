import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Post } from '../../../types/types';
import { API_URL } from '../../../api/api';

const PostDetailPage = () => {
	const { postId } = useParams<{ postId: string }>();

	const { data: post, isLoading, isError, error } = useQuery<Post, Error>(
		['post', postId],
		async () => {
			const response = await fetch(`${API_URL}/posts/${postId}`);
			if (!response.ok) {
				throw new Error('Failed to fetch post details');
			}
			return response.json();
		}
	);

	console.log({ post, isLoading, isError, error })

	useEffect(() => {
		// You can perform additional actions based on the query state if needed
		if (isError) {
			console.error(error);
		}
	}, [isError, error]);

	return (
		<div className="container">
			{isLoading ? (
				<div>Loading post details...</div>
			) : isError ? (
				<div>Error: {error?.message}</div>
			) : (
				<div className="card">
					<div className="card-body">
						<h2 className="card-title">{post?.title}</h2>
						<p className="card-text">{post?.content}</p>
						<p className="card-text">Author: {post?.appUser.name}</p>
						<p className="card-text">Creation Date: {post?.creationDate}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default PostDetailPage;