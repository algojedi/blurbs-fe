import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Delta as TypeDelta } from 'quill';
import Editor from '../../organisms/editor/editor';
import { useCreatePost } from '../../../hooks/useCreatePost';
import { PostRequest, Tag } from '../../../types/types';
import './add-post-page.scss';
import { isValidTag } from './utils';

export type SavePostProps = {
  value?: TypeDelta;
  valueHTML: string;
};

const AddPostPage = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<TypeDelta>();
  const [valueHTML, setValueHTML] = useState<string>('');
  const [tag, setTag] = useState<string>('');
  const [tags, setTags] = useState<Tag[]>([]);
  const {
    mutate,
    isLoading: isCreatePostLoading,
    isError: isCreatePostError,
    isSuccess: isCreatePostSuccess,
    error: createPostError,
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
      return;
    }
  });

  const handleAddTag = () => {
    if (!isValidTag(tag, tags)) {
      console.log('invalid tag');
      return;
    }
    console.log({ tag })
    setTags((p) => [...p, { name : tag } ]);
    setTag('');
  };

  const handleCancelPost = () => {
    console.log('Cancel post');
    navigate('/posts');
  };

  const handleSavePost = async ({ value, valueHTML }: SavePostProps) => {
    console.log('Save post');
    console.log({ value, valueHTML });
    // send post request to server
    const body: PostRequest = {
      userId: 1,
      quillContent: JSON.stringify(value),
      htmlContent: valueHTML,
      tags: tags,
    };
    mutate(body);
  };

  return (
    <div className='add-post-page d-flex justify-content-center'>
      <Editor
        // handleSavePost={handleSavePost}
        value={value}
        setValue={setValue}
        setValueHTML={setValueHTML}
      />
      <div className='d-flex flex-column justify-content-between'>
        <div className='tag-form d-flex flex-column align-items-center form-group p-3 flex-grow-1'>
          <input
            type='text'
            className='form-control-sm tag-form__input w-50'
            placeholder='Enter here...'
            value={tag}
            onChange={(e) => setTag(e.target.value)} 
          />
          <button
            className='btn-sm btn btn-outline-primary w-50 mt-2'
            onClick={handleAddTag}
          >
            Add Tag
          </button>
        </div>
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
      </div>
    </div>
  );
};

export default AddPostPage;
