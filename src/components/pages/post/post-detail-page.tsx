import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { sanitizeHtml } from '../../../util/util';
import { useGetPost } from '../../../hooks/useGet';
import { useDeletePost } from '../../../hooks/useDeletePost';

const PostDetailPage = () => {
  const { postId } = useParams<{ postId: string }>();

  if (!postId) throw new Error('Post id is not defined');
  const navigate = useNavigate();
  // const [showEditor, setShowEditor] = useState(false);

  const {
    data: post,
    isLoading: isLoadingPost,
    isError: isErrorPost,
    error: errorPost,
  } = useGetPost(postId);

  const { mutate : deletePost, isLoading, isError, isSuccess, error } = useDeletePost();

  useEffect(() => {
    if (isErrorPost) {
      console.error(errorPost);
    }
  }, [isErrorPost, errorPost]);

  useEffect(() => {
    if (isSuccess) {
      // TODO: is this condition neccessary?
      console.log('Post deleted successfully');
      navigate('/posts');
    }
  }, [isSuccess, navigate]);

  /* DELETE POST
  const handleDeletePost = (id?: number) => {
    if (!id) throw new Error('Post id is not defined');
    deletePost(id);
    console.log({ isLoading, isSuccess, isError, error });
  };
  */

  if (isErrorPost) {
    // TODO: render error page
    console.log({ error: errorPost?.message });
    return <div>Error loading post details...</div>;
  }

  if (isLoadingPost) {
    // TODO: create spinner component
    return <div>Loading post details...</div>;
  }

  const postHTML = sanitizeHtml(post?.htmlContent ?? '');
  return <div dangerouslySetInnerHTML={{ __html: postHTML }} />;
};

export default PostDetailPage;
