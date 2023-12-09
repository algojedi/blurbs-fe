import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { sanitizeHtml } from '../../../util/util';
import { useGetPost } from '../../../hooks/useGet';
import { useDeletePost } from '../../../hooks/useDeletePost';
import { useDeleteTag } from '../../../hooks/useDeleteTag';
import TagList from '../../organisms/tag-list/tag-list';
import './post-detail-page.scss';

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
    refetch,
  } = useGetPost(postId);

  const {
    mutate: deletePost,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useDeletePost();

  const {
    mutate: deleteTag,
    isLoading: isLoadingDeleteTag,
    isError: isErrorDeleteTag,
    isSuccess: isSuccessDeleteTag,
    error: errorDeleteTag,
  } = useDeleteTag();

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

  const handleDeleteTag = (tagId: number) => {
    console.log('delete tag: ', tagId);
    const parsedPostId = parseInt(postId, 10);
    if (!isNaN(parsedPostId)) {
      deleteTag({ tagId, postId: parsedPostId });
      // TODO: refetch is not working
      refetch();
      
    } else {
      console.error('Invalid postId:', postId);
      // TODO: display error message
    }
  };

  const postHTML = sanitizeHtml(post?.htmlContent ?? '');

  // parent class ql-editor is required to render styles
  return (
    <section className='d-flex mt-3 p-3'>
      <section className='ql-editor w-75 test-border-red mx-3 editor-sizing'>
        <div dangerouslySetInnerHTML={{ __html: postHTML }} />
      </section>
      <TagList tags={post && post.tags} handleDeleteTag={handleDeleteTag} />
    </section>
  );
};

export default PostDetailPage;
