import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetailPage = () => {
	const { postId } = useParams<{ postId: string }>();

	// Fetch post details using the postId parameter

	// Placeholder content to display post details
	const post = {
		id: postId,
		title: 'Sample Post Title',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	};
	console.log({ post })

	return (
		<div className="container">
			<div className="card">
				<div className="card-body">
					<h2 className="card-title">{post.title}</h2>
					<p className="card-text">{post.content}</p>
				</div>
			</div>
		</div>
	);
};

export default PostDetailPage;
