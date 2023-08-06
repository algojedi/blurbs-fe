
import { useMutation, QueryClient } from 'react-query';
import { DELETE_POST_URL, apiClient } from '../api/api';

export const DELETE_POST_QUERY_KEY = 'deletePost';

const queryClient = new QueryClient();

const deletePost = async (id: number) => {
  const url = DELETE_POST_URL + '/' + id;
  return await apiClient.delete<void>(url);
};

export const useDeletePost = () => {
  return useMutation<void, Error, number>(deletePost, {
    onSuccess: () => {
      // invalidate the query cache for 'posts'
      // queryClient.invalidateQueries(DELETE_POST_QUERY_KEY);
      console.log('success!');
    },
    onError: (error) => {
      // handle error
      console.log({ error });
    },
  });
};
