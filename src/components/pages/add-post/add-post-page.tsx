import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Delta as TypeDelta } from 'quill';
import Editor from '../../organisms/editor/editor';
import { useCreatePost } from '../../../hooks/useCreatePost';
import { PostRequest } from '../../../types/types';
import './add-post-page.scss';

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

  // console.log({ isCreatePostLoading, isCreatePostError });
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

  const handleAddTag = () => {
    console.log('Add tag');
  }

  const handleCancelPost = ()  => {
    console.log('Cancel post');
    navigate('/posts');
  }

  const handleSavePost = async ({ value, valueHTML }: SavePostProps) => {
    console.log('Save post');
    console.log({ value, valueHTML });
    // send post request to server
    const body : PostRequest = {
      userId: 1,
      quillContent: JSON.stringify(value),
      htmlContent: valueHTML,
    };
    mutate(body); 
  };

  return (
    <div className='add-post-page d-flex justify-content-center'>
      <div className='post-options'>
        <div className='d-flex flex-column p-2'>
          <button
            className='btn btn-sm btn-primary m-1'
            onClick={() => handleSavePost({ value, valueHTML })}
          >
            SAVE
          </button>
          <button
            className='btn btn-sm btn-danger m-1'
            onClick={handleCancelPost}
          >
            CANCEL
          </button>
        </div>
      </div>
      <Editor
        // handleSavePost={handleSavePost}
        value={value}
        setValue={setValue}
        setValueHTML={setValueHTML}
      />
      <div className="tag-form d-flex flex-column align-items-center form-group p-3 flex-grow-1">
        <input type="text" className="form-control tag-form__input w-50" placeholder='Enter Tag...'/>
        <button className="btn-sm btn btn-primary w-50 mt-2" onClick={handleAddTag}>Add</button>
      </div>
    </div>
  );
};

export default AddPostPage;
