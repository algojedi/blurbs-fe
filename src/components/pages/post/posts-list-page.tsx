import { useContext } from 'react';
import Posts from '../../organisms/posts/posts';
import { ThemeContext } from '../../../context/theme-provider';
import { useQuery } from 'react-query';
import { fetchPosts } from '../../../api/api';
import { Post } from '../../../types/types';

const PostsListPage = () => {
  const { isDark } = useContext(ThemeContext);
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery<Post[], Error>('posts', fetchPosts);

  if (isError) {
    console.log(error?.message);
    return <div className='text-danger'>Oops ... error loading posts</div>;
  }

  const result = isLoading ? <div>...loading</div> : <Posts posts={posts} />;

  return (
    <div className='p-3'>
      {result}
    </div>
  );
};

export default PostsListPage;
