import { useContext, useEffect, useState } from 'react';
import PostList from '../../organisms/post-list/post-list';
import { ThemeContext } from '../../../context/theme-provider';
import { useGetPosts } from '../../../hooks/useGet';
import { useDeletePost } from '../../../hooks/useDeletePost';
import DeleteModal from '../../organisms/delete-modal/delete-modal';
import './posts-list-page.scss';

const PostsListPage = () => {
  const { isDark } = useContext(ThemeContext);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState<number | null>(null);
  const {
    data: posts,
    isLoading: postsAreLoading,
    isError: postsIsError,
    error: postsError,
    refetch,
  } = useGetPosts();
  const {
    mutate: deletePost,
    isError: deletePostIsError,
    isSuccess: deletePostIsSuccess,
  } = useDeletePost();

  useEffect(() => {
    if (deletePostIsSuccess) {
      console.log('Post deleted successfully');
      refetch();
    }
  }, [deletePostIsSuccess, refetch]);

  const handleDeletePost = (id: number) => {
    console.log('Delete post clicked');
    setPostToDelete(id);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    if (postToDelete !== null) {
      deletePost(postToDelete);
    }
    setShowDeleteModal(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  if (postsIsError) {
    console.log(postsError?.message);
    return <div className='text-danger'>Oops ... error loading posts</div>;
  }

  // TODO: create spinner component
  if (postsAreLoading) {
    return <div>...loading</div>;
  }

  return (
    <div className='p-3'>
      <PostList posts={posts} handleDeletePost={handleDeletePost} />
      {showDeleteModal && <div className='modal-overlay'></div>}
      <DeleteModal
        show={showDeleteModal}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
      {deletePostIsError && (
        <div>Oops ... something went wrong when deleting post</div>
      )}
    </div>
  );
};

export default PostsListPage;
