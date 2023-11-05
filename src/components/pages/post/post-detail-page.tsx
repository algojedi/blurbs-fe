import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { sanitizeHtml } from '../../../util/util';
import { useGetPost } from '../../../hooks/useGet';
import { useDeletePost } from '../../../hooks/useDeletePost';
import Tag from '../../molecules/tag/tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

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

  const {
    mutate: deletePost,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useDeletePost();

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

  const dummyTags = ['tag1', 'tag2', 'tag3'];
  const displayTags = (
    <section>
      {dummyTags.map((tag, index) => {
        return (
          <section key={index} className='d-flex justify-content-between p-1'>
            <Tag name={tag} />{' '}
            <div role='button' onClick={() => handleDeleteTag(tag)}>
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </section>
        );
      })}
    </section>
  );

  const handleDeleteTag = (tag: string) => {
    console.log({ tag });
    // TODO: ajax call to delete tag from post
  };

  const postHTML = sanitizeHtml(post?.htmlContent ?? '');
  // parent class of ql-editor is required to render styles
  return (
    <section className='d-flex'>
      <div className='ql-editor'>
        <div dangerouslySetInnerHTML={{ __html: postHTML }} />
      </div>
      {displayTags}
    </section>
  );
};

export default PostDetailPage;
