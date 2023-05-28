import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { Post } from '../../../types/types';
import { API_URL, deletePost } from '../../../api/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const PostDetailPage = () => {
  const { postId } = useParams<{ postId: string }>();

  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useQuery<Post, Error>(['post', postId], async () => {
    const response = await fetch(`${API_URL}/posts/${postId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post details');
    }
    return response.json();
  });

  console.log({ post, isLoading, isError, error });

  useEffect(() => {
    // You can perform additional actions based on the query state if needed
    if (isError) {
      console.error(error);
    }
  }, [isError, error]);

  const handleEditPost = (id?: number) => {
    console.log('Edit post ' + id);
  };

	const deletePostMutation = useMutation((id: number) => {
		return deletePost(id)
	});

	const handleDeletePost = (id?: number) => {
		if (!id) throw new Error('Post id is not defined');
		deletePostMutation.mutate(id);
		const {isLoading, isSuccess, isError, error, data } =	deletePostMutation
		console.log({ isLoading, isSuccess, isError, error, data })
	};


  return (
    <div className='container'>
      {isLoading ? (
        <div>Loading post details...</div>
      ) : isError ? (
        <div>Error: {error?.message}</div>
      ) : (
        <div className='card'>
          <div className='card-body'>
            <h2 className='card-title'>{post?.title}</h2>
            <p className='card-text'>{post?.content}</p>
            <p className='card-text'>Author: {post?.appUser.name}</p>
            <p className='card-text'>Creation Date: {post?.creationDate}</p>
            <div className='d-flex justify-content-end'>
                <FontAwesomeIcon className='mx-2'
                  icon={faEdit}
                  onClick={() => handleEditPost(post?.id)}
                />
              <FontAwesomeIcon
                icon={faTrash} className='mx-2'
                onClick={() => handleDeletePost(post?.id)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetailPage;
