import React, { useContext, useState } from 'react';
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
  const [isEditMode, setIsEditMode] = useState(false);

  // TODO: apply these somewhere
  const cardClassNames =
    'card card-link mb-3 link-unstyled ' + theme === 'dark'
      ? 'bg-dark text-white'
      : '';

  const handleEditBtnClick = () => {
    console.log('Edit button clicked');
    setIsEditMode((p) => !p);
  };

  return (
    <div className='p-3'>
      <div className='post-list-options d-flex justify-content-between'>
        <button
          className='post-list-options_edit-btn btn btn-outline-secondary btn-sm'
          onClick={handleEditBtnClick}
        >
          Edit
        </button>
        <NavLink to={`/posts/create`}>
          <FontAwesomeIcon icon={faPlus} className='mr-2' />
        </NavLink>
      </div>
      <div className=''>
        <h3 className='title'>Posts</h3>
      </div>
      {posts ? (
        posts.map((post) => (
          <NavLink to={`/posts/${post.id}`} key={post.id}>
            <PostListItem post={post} isEditable={isEditMode} />
          </NavLink>
        ))
      ) : (
        <div>No posts</div>
      )}
    </div>
  );
};
export default PostList;
