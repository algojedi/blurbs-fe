import { useMutation, QueryClient } from 'react-query';
import { Post } from '../types/types';
import { POST_POST_URL, apiClient } from '../api/api';
import { POSTS_QUERY_KEY } from './useGet';

export const CREATE_POST_QUERY_KEY = 'createPost';

const queryClient = new QueryClient();

const createPost = async (postData: Post) => {
  return await apiClient.post<Post>(POST_POST_URL, postData);
};

export const useCreatePost = () => {
  return useMutation<Post, Error, Post>(createPost, {
    onSuccess: (postData) => {
      // invalidate the query cache for 'posts'
      queryClient.invalidateQueries(POSTS_QUERY_KEY);
      console.log('postData', postData);
    },
    onError: (error) => {
      // handle error
      console.log({ error });
    },
  });
};
