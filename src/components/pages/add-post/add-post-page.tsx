import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../../../api/api";
import Editor from "../../organisms/editor/editor";

const AddPostPage = () => {

	// TODO: react router loader may be better option
	const navigate = useNavigate()

  const deletePostMutation = useMutation((id: number) => {
    return deletePost(id);
  });

  useEffect(() => {
    if (deletePostMutation.isSuccess) {
      console.log('Post deleted successfully');
			navigate('/posts')
    }
  }, [deletePostMutation.isSuccess, navigate]);

  const handleDeletePost = (id?: number) => {
    if (!id) throw new Error('Post id is not defined');
    deletePostMutation.mutate(id);
    const { isLoading, isSuccess, isError, error, data } = deletePostMutation;
    console.log({ isLoading, isSuccess, isError, error, data });
  };


  return <Editor />
}

export default AddPostPage;