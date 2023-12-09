
import { useMutation, QueryClient } from 'react-query';
import { DELETE_TAG_URL, apiClient } from '../api/api';

export const DELETE_TAG_QUERY_KEY = 'deleteTag';

const queryClient = new QueryClient();

export type DeleteTagParams = {
  tagId: number;
  postId: number;
}

const deleteTag = async ({ tagId, postId }: DeleteTagParams) => {
  const url = `${DELETE_TAG_URL}/${tagId}/posts/${postId}`;
  return await apiClient.delete<void>(url);
};

export const useDeleteTag = () => {
  return useMutation<void, Error, DeleteTagParams>(
    ({ tagId, postId }) => deleteTag({ tagId, postId }),
    {
      onSuccess: () => {
        // Invalidate the query cache for 'posts'
        // queryClient.invalidateQueries(DELETE_POST_QUERY_KEY);
        console.log('success!');
      },
      onError: (error) => {
        // Handle error
        console.log({ error });
      },
    },
  );
};
