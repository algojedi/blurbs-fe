import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { API_URL } from '../../../api';
import { Post } from '../../../types/types';
import { ThemeContext } from '../../../context/theme-provider';
import { Link } from 'react-router-dom';

const fetchPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

export type PostsProps = { classNames?: string };

const Posts: React.FC<PostsProps> = ({ classNames }) => {
  const { theme } = useContext(ThemeContext);

  const { data, isLoading, isError, error } = useQuery<Post[], Error>(
    'posts',
    fetchPosts,
  );

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  const cardClassNames =
    'card mb-3 link-unstyled ' + theme === 'dark' ? 'bg-dark text-white' : '';

  return (
    <div className={classNames}>
      <h3 className='title'>Posts</h3>
      {data ? (
        data.map((post) => (
          <Link
						to={`/posts/${post.id}`}
            key={post.id}
            className={cardClassNames}
          >
            <div className='card-body link-unstyled'>
              <h3 className='card-title'>{post.title}</h3>
              <p className='card-text'>{post.content}</p>
            </div>
          </Link>
        ))
      ) : (
        <div>No posts</div>
      )}
    </div>
  );
};
export default Posts;
