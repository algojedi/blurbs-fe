import { fetchData } from "../util/ajax";

export const API_URL = 'http://localhost:8080/api';

export const fetchPosts = () => fetchData(`${API_URL}/posts`); 
export const fetchPost =  async (id: number) => await fetchData(`${API_URL}/posts/${id}`);


export const deletePost = async (id: number) => fetch(`${API_URL}/posts/${id}`, {
			method: 'DELETE',
		})