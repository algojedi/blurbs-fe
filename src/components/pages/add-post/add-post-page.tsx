import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Delta as TypeDelta } from 'quill';
import Editor from '../../organisms/editor/editor';
import { useCreatePost } from '../../../hooks/useCreatePost';
import { PostRequest } from '../../../types/types';

export type SavePostProps = {
  value?: TypeDelta;
  valueHTML: string;
};

const AddPostPage = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<TypeDelta>();
  const [valueHTML, setValueHTML] = useState<string>('');
  const { mutate, isLoading: isCreatePostLoading, isError: isCreatePostError,
    isSuccess: isCreatePostSuccess, error: createPostError
  } = useCreatePost();

  console.log({ isCreatePostLoading, isCreatePostError });
  /* DELETE POST
  const deletePostMutation = useMutation((id: number) => {
    return deletePost(id);
  });

  useEffect(() => {
    if (deletePostMutation.isSuccess) {
      console.log('Post deleted successfully');
      navigate('/posts');
    }
  }, [deletePostMutation.isSuccess, navigate]);

  const handleDeletePost = (id?: number) => {
    if (!id) throw new Error('Post id is not defined');
    deletePostMutation.mutate(id);
    const { isLoading, isSuccess, isError, error, data } = deletePostMutation;
    console.log({ isLoading, isSuccess, isError, error, data });
  };
  */

  useEffect(() => {
    if (isCreatePostSuccess) {
      console.log('Post created successfully');
      navigate('/posts');
      return
    }
  })

  const handleSavePost = async ({ value, valueHTML }: SavePostProps) => {
    console.log('Save post');
    console.log({ value, valueHTML });
    // send post request to server
    const body : PostRequest = {
      userId: 1,
      quillContent: JSON.stringify(value),
      htmlContent: valueHTML,
    };
    // TODO: use custom hook
    mutate(body); 
  };

  return (
    <div className='add-post-page d-flex'>
      <div className='post-options'>
        <div className='d-flex justify-content-end px-4 mb-4 mt-1'>
          <button
            className='btn btn-primary'
            onClick={() => handleSavePost({ value, valueHTML })}
          >
            SAVE
          </button>
        </div>
      </div>
      <Editor
        // handleSavePost={handleSavePost}
        value={value}
        setValue={setValue}
        setValueHTML={setValueHTML}
      />
    </div>
  );
};

export default AddPostPage;
