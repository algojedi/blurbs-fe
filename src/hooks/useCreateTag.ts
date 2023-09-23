import { useMutation } from 'react-query';
import { Tag, TagRequest } from '../types/types';
import { POST_TAG_URL, apiClient } from '../api/api';

export const CREATE_TAG_QUERY_KEY = 'createTag';

// const queryClient = new QueryClient();

const createTag = async (tagData: TagRequest) => {
  // return await apiClient.post<Tag>(POST_TAG_URL, tagData);
  // TODO: remove this mock
  return Promise.resolve({ id: 1, name: 'test' });
};

export const useCreateTag = () => {
  return useMutation<Tag, Error, TagRequest>(createTag, {
    onSuccess: (tagData) => {
      // invalidate the query cache for 'posts'
      // queryClient.invalidateQueries(TAG_QUERY_KEY);
      console.log('tagData', tagData)
    },
    onError: (error) => {
      // handle error
      console.log({ error });
    },
  });
};
