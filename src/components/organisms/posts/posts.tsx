import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { fetchPosts } from '../../../api/api';
import { Post } from '../../../types/types';
import { ThemeContext } from '../../../context/theme-provider';
import { NavLink } from 'react-router-dom';
import './posts.scss';

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

	// TODO: apply these somewhere
  const cardClassNames =
    'card card-link mb-3 link-unstyled ' + theme === 'dark' ? 'bg-dark text-white' : '';

            // className={cardClassNames}
  return (
    <div className={classNames}>
      <h3 className='title'>Posts</h3>
      {data ? (
        data.map((post) => (
          <NavLink
            to={`/posts/${post.id}`}
            key={post.id}
          >
            <div className='card-body link-unstyled card-link'>
              <h3 className='card-title'>{post.title}</h3>
              <p className='card-text'>{post.content}</p>
            </div>
          </NavLink>
        ))
      ) : (
        <div>No posts</div>
      )}
    </div>
  );
};
export default Posts;
