import { useMutation, QueryClient } from 'react-query';
import { Post, PostRequest } from '../types/types';
import { DELETE_POST_URL, POST_POST_URL, apiClient } from '../api/api';
import { POSTS_QUERY_KEY } from './useGet';

export const CREATE_POST_QUERY_KEY = 'createPost';

const queryClient = new QueryClient();

const createPost = async (postData: PostRequest) => {
  return await apiClient.post<Post>(POST_POST_URL, postData);
};

const deletePost = async (id: number) => {
  const url = DELETE_POST_URL + '/' + id;
  return await apiClient.delete<Post>(url);
};

export const useCreatePost = () => {
  return useMutation<Post, Error, PostRequest>(createPost, {
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
