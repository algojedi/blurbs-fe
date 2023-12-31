import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Delta as TypeDelta } from 'quill';
import Editor from '../../organisms/editor/editor';
import { useCreatePost } from '../../../hooks/useCreatePost';
import { PostRequest, TagType } from '../../../types/types';
import './add-post-page.scss';
import { isValidPost, isValidTag } from './utils';
import Tag from '../../molecules/tag/tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import TagList from '../../organisms/tag-list/tag-list';

export type SavePostProps = {
  value?: TypeDelta;
  valueHTML: string;
};

const AddPostPage = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<TypeDelta>();
  const [valueHTML, setValueHTML] = useState<string>('');
  const [tag, setTag] = useState<string>('');
  // const [tags, setTags] = useState<Tag[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const {
    mutate,
    isLoading: isCreatePostLoading,
    isError: isCreatePostError,
    isSuccess: isCreatePostSuccess,
    error: createPostError,
  } = useCreatePost();
  const [createPostErrorMessage, setCreatePostErrorMessage] =
    useState<string>('');

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
    if (isCreatePostError) {
      // TODO: display better error message
      const errorMessage = createPostError?.message;
      setCreatePostErrorMessage(errorMessage);
    }
  });

  const handleAddTag = () => {
    if (!isValidTag(tag, tags)) {
      console.log('invalid tag');
      return;
    }
    console.log({ tag });
    // setTags((p) => [...p, { name : tag } ]);
    setTags((p) => [...p, tag]);
    setTag('');
  };

  const handleDeleteTagName = (tag: string) => {
    setTags((p) => p.filter((t) => t !== tag));
  };

  const handleCancelPost = () => {
    console.log('Cancel post');
    navigate('/posts');
  };

  const handleSavePost = async ({ value, valueHTML }: SavePostProps) => {
    console.log({ value, valueHTML });
    if (!isValidPost(valueHTML)) {
      console.log('invalid post');
      setCreatePostErrorMessage('Invalid post');
      return;
    }
    // send post request to server
    const body: PostRequest = {
      userId: 1,
      quillContent: JSON.stringify(value),
      htmlContent: valueHTML,
      tags: tags,
    };
    mutate(body);
  };

  const errorMessageComponent = (
    <section className='text-danger'>{createPostErrorMessage}</section>
  );

  const tagList : TagType[] = tags.map((t) => {
    return { name: t };
  });

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
            placeholder='Tag name ...'
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
            <TagList tags={tagList} handleDeleteTagName={handleDeleteTagName} />
            {errorMessageComponent}
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
