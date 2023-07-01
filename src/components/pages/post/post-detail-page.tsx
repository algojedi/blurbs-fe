import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { deletePost } from '../../../api/api';
import { sanitizeHtml } from '../../../util/util';
import { useGetPost } from '../../../hooks/useGet';

const PostDetailPage = () => {
  const { postId } = useParams<{ postId: string }>();

  // TODO: react router loader may be better option
  if (!postId) throw new Error('Post id is not defined');
  const navigate = useNavigate();
  const [showEditor, setShowEditor] = useState(false);

  const {
    data: post,
    isLoading: isLoadingPost,
    isError: isErrorPost,
    error: errorPost,
  } = useGetPost(postId);

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
      navigate('/posts');
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

  const handleDeletePost = (id?: number) => {
    if (!id) throw new Error('Post id is not defined');
    deletePostMutation.mutate(id);
    const { isLoading, isSuccess, isError, error, data } = deletePostMutation;
    console.log({ isLoading, isSuccess, isError, error, data });
  };

  const postHTML = sanitizeHtml(post?.htmlContent ?? '');

  return <div dangerouslySetInnerHTML={{ __html: postHTML }} />;
};

export default PostDetailPage;
