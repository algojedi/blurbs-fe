import axios, { AxiosResponse } from 'axios';

export const API_URL = 'http://localhost:8080/api';
export const GET_POSTS_URL = `${API_URL}/posts`;
export const POST_POST_URL = `${API_URL}/post`;
export const DELETE_POST_URL = `${API_URL}/posts`;

// TODO: change deletePost to use api client
// export const deletePost = async (id: number) =>
//   axios(`${API_URL}/posts/${id}`, {
//     method: 'DELETE',
//   });

export const apiClient = {
  get: async <T>(url: string): Promise<T> => {
    const response: AxiosResponse<T> = await axios.get(url);
    return response.data;
  },
  post: async <T>(url: string, data: any): Promise<T> => {
    const response: AxiosResponse<T> = await axios.post(url, data);
    return response.data;
  },
  put: async <T>(url: string, data: any): Promise<T> => {
    const response: AxiosResponse<T> = await axios.put(url, data);
    return response.data;
  },
  delete: async <T>(url: string): Promise<T> => {
    const response: AxiosResponse<T> = await axios.delete(url);
    return response.data;
  },
};
