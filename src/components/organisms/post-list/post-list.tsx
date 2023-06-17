import React, { useContext } from 'react';
import { Post } from '../../../types/types';
import { ThemeContext } from '../../../context/theme-provider';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PostListItem from '../../molecules/post-list-item';
import './post-list.scss';

export type PostListProps = { classNames?: string; posts?: Post[] };

const PostList: React.FC<PostListProps> = ({ classNames, posts }) => {
  const { theme } = useContext(ThemeContext);

  // TODO: apply these somewhere
  const cardClassNames =
    'card card-link mb-3 link-unstyled ' + theme === 'dark'
      ? 'bg-dark text-white'
      : '';

  return (
    <div className='p-3'>
      <div className='d-flex justify-content-between'>
        <h3 className='title'>Posts</h3>
        <NavLink to={`/posts/create`}>
          <FontAwesomeIcon
            icon={faPlus}
            className='mr-2'
          />
        </NavLink>
      </div>
      {posts ? (
        posts.map((post) => (
          <NavLink to={`/posts/${post.id}`} key={post.id}>
            <PostListItem post={post} />
          </NavLink>
        ))
      ) : (
        <div>No posts</div>
      )}
    </div>
  );
};
export default PostList;
