import { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { API_URL, deletePost } from '../../../api/api';
import { Delta as TypeDelta } from 'quill';
import Editor, { EditorProps } from '../../organisms/editor/editor';

export type SavePostProps = {
  value?: TypeDelta;
  valueHTML: string;
};

const AddPostPage = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<TypeDelta>();
  const [valueHTML, setValueHTML] = useState<string>('');

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

  const handleSavePost = async ({ value, valueHTML }: SavePostProps) => {
    console.log('Save post');
    console.log({ value, valueHTML });
    // send post request to server
    const body = {
      userId: 1,
      quillContent: JSON.stringify(value),
      htmlContent: valueHTML,
    };
    // TODO: use custom hook
    const reply = await fetch(`${API_URL}/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await reply.json();
    // TODO: navigate to posts page on success
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
