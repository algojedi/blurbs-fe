import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { Post } from '../../../types/types';
import { deletePost, fetchPost } from '../../../api/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const PostDetailPage = () => {
  const { postId } = useParams<{ postId: string }>();

	// TODO: react router loader may be better option
  if (!postId) throw new Error('Post id is not defined');
	const navigate = useNavigate()

  const {
    data: post,
    isLoading: isLoadingPost,
    isError: isErrorPost,
    error: errorPost,
  } = useQuery<Post, Error>(['post', postId], () => fetchPost(+postId));

  const deletePostMutation = useMutation((id: number) => {
    return deletePost(id);
  });

  useEffect(() => {
    if (isErrorPost) {
      console.error(errorPost);
    }
  }, [isErrorPost, errorPost]);

  useEffect(() => {
    if (deletePostMutation.isSuccess) {
      console.log('Post deleted successfully');
			navigate('/posts')
    }
  }, [deletePostMutation.isSuccess, navigate]);

  if (isErrorPost) {
    // TODO: render error page
    console.log({ error: errorPost?.message });
    return <div>Error loading post details...</div>;
  }

  if (isLoadingPost) {
    // TODO: create spinner component
    return <div>Loading post details...</div>;
  }

  const handleEditPost = (id?: number) => {
    console.log('Edit post ' + id);
  };

  const handleDeletePost = (id?: number) => {
    if (!id) throw new Error('Post id is not defined');
    deletePostMutation.mutate(id);
    const { isLoading, isSuccess, isError, error, data } = deletePostMutation;
    console.log({ isLoading, isSuccess, isError, error, data });
  };

  return (
    <div className='container'>
      <div className='card'>
        <div className='card-body'>
          <h4 className='card-title'>{post?.title}</h4>
          <p className='card-text'>{post?.content}</p>
          <p className='card-text'>Author: {post?.appUser.name}</p>
          <p className='card-text'>Creation Date: {post?.creationDate}</p>
          <p className='card-text'>Avg Rating: {post?.averageRating ?? 'unrated'}</p>
          <div className='d-flex justify-content-end'>
            <FontAwesomeIcon
              className='mx-2'
              icon={faEdit}
              onClick={() => handleEditPost(post?.id)}
            />
            <FontAwesomeIcon
              icon={faTrash}
              className='mx-2'
              onClick={() => handleDeletePost(post?.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;
