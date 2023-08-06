import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Post } from '../../../types/types';
import { ThemeContext } from '../../../context/theme-provider';
import PostListItem from '../../molecules/post-list-item';
import './post-list.scss';
import DeleteModal from '../delete-modal/delete-modal';
import { useDeletePost } from '../../../hooks/useDeletePost';

export type PostListProps = { classNames?: string; posts?: Post[] };

const PostList: React.FC<PostListProps> = ({ classNames, posts }) => {
  const { theme } = useContext(ThemeContext);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState<number | null>(null);

  // TODO!: state needs to be managed by the parent component

  const { mutate, isLoading, isError, error, isSuccess } = useDeletePost();


  // create useEffect to invalidate the query cache when a post is deleted
  useEffect(() => {
    if (isSuccess) {
      console.log('Post deleted successfully');
      // need to refetch
    }
  }, [isSuccess]);

  // TODO: apply these somewhere
  const cardClassNames =
    'card card-link mb-3 link-unstyled ' + theme === 'dark'
      ? 'bg-dark text-white'
      : '';

  const handleEditBtnClick = () => {
    console.log('Edit button clicked');
    setIsEditMode((p) => !p);
  };

  const handleDeletePost = (id: number) => {
    console.log('Delete post clicked');
    setPostToDelete(id);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (postToDelete !== null) {
      console.log('Post with ID ' + postToDelete + ' will be deleted.');
      //  perform the actual deletion of the post using the postToDelete ID.
      mutate(postToDelete);
    }
    setShowDeleteModal(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  const createPostLink = (
    <NavLink to={`/posts/create`}>
      <FontAwesomeIcon icon={faPlus} className='mr-2' />
    </NavLink>
  );

  const postsList = posts ? (
    posts.map((post) => (
      <div className='d-flex align-items-center' key={post.id} >
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
          <NavLink to={`/posts/${post.id}`} key={post.id}>
            <PostListItem post={post} />
          </NavLink>
        </div>
      </div>
    ))
  ) : (
    <div>No posts</div>
  );

  // TODO: create a toast for when a post is not deleted successfully

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
      {showDeleteModal && <div className='modal-overlay'></div>}
      <DeleteModal
        show={showDeleteModal}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
      {isError && <div>Oops ... something went wrong when deleting post</div>}
    </div>
  );
};
export default PostList;
