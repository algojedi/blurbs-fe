import { useContext } from "react";
import Posts from "../../organisms/posts/posts";
import { ThemeContext } from "../../../context/theme-provider";


const PostsListPage = () => {

	const { isDark } = useContext(ThemeContext);
	return (
		<div className = 'p-3'>
      <h1 className='h2 text-center'>All Posts</h1>
      <div className='text'>It's a {isDark ? 'Dark' : 'Light'} theme</div>
      <Posts />
	</div> )
}

export default PostsListPage;