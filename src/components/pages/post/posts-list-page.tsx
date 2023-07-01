import { useContext } from 'react';
import PostList from '../../organisms/post-list/post-list';
import { ThemeContext } from '../../../context/theme-provider';
import { useGetPosts } from '../../../hooks/useGet';

const PostsListPage = () => {
  const { isDark } = useContext(ThemeContext);
  const { data: posts, isLoading, isError, error } = useGetPosts();

  if (isError) {
    console.log(error?.message);
    return <div className='text-danger'>Oops ... error loading posts</div>;
  }

  const listOfPosts = isLoading ? (
    <div>...loading</div>
  ) : (
    <PostList posts={posts} />
  );

  return <div className='p-3'>{listOfPosts}</div>;
};

export default PostsListPage;
