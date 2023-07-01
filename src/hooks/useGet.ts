import { useQuery } from 'react-query';
import { GET_POSTS_URL, apiClient } from '../api/api';
import { Post } from '../types/types';

export const POSTS_QUERY_KEY = 'PostsList';
export const POST_QUERY_KEY = 'Post';

export const useGetPosts = () => {
  const data =  useQuery<Post[], Error>(POSTS_QUERY_KEY, () => apiClient.get<Post[]>(GET_POSTS_URL));
  return data;
};

export const useGetPost = (id : string) => {
  const url = `${GET_POSTS_URL}/${id}`;
  return useQuery<Post, Error>(POST_QUERY_KEY, () => apiClient.get<Post>(url));
};
