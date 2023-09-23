import React, { MouseEventHandler, useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Post } from '../../../types/types';
import { ThemeContext } from '../../../context/theme-provider';
import PostListItem from '../../molecules/post-list-item';
import './post-list.scss';

export type PostListProps = {
  classNames?: string;
  posts?: Post[];
  handleDeletePost: (id: number) => void;
};

const PostList: React.FC<PostListProps> = ({
  classNames,
  posts,
  handleDeletePost,
}) => {
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

  const handlePostClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    if (isEditMode) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  const createPostLink = (
    <NavLink to={`/posts/create`}>
      <FontAwesomeIcon icon={faPlus} className='mr-2' />
    </NavLink>
  );

  const postsList =
    posts && posts?.length > 0 ? (
      posts.map((post) => (
        <div className='d-flex align-items-center' key={post.id}>
          {isEditMode && (
            <div
              role='button'
              className='post-list-item_name_delete-icon'
              onClick={() => handleDeletePost(post.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </div>
          )}
          <div className='w-100'>
            <NavLink to={`/posts/${post.id}`} key={post.id} aria-disabled='true' 
           onClick={handlePostClick} 
            >
              <PostListItem post={post} />
            </NavLink>
          </div>
        </div>
      ))
    ) : (
      <div className='text-center text-secondary h4'>No posts to display</div>
    );

  return (
    <div className='p-3'>
      <div className='post-list-options d-flex justify-content-between'>
        <button
          className='post-list-options_edit-btn btn btn-outline-secondary btn-sm'
          onClick={handleEditBtnClick}
        >
          {isEditMode ? 'Done' : 'Edit'}
        </button>
        {isEditMode || createPostLink}
      </div>
      <div className=''>
        <h3 className='title'>Posts</h3>
      </div>
      {postsList}
    </div>
  );
};

export default PostList;
