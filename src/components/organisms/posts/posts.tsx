import React, { useContext } from 'react';
import { Post } from '../../../types/types';
import { ThemeContext } from '../../../context/theme-provider';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './posts.scss';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export type PostsProps = { classNames?: string; posts?: Post[] };

const Posts: React.FC<PostsProps> = ({ classNames, posts }) => {
  const { theme } = useContext(ThemeContext);

  // TODO: apply these somewhere
  const cardClassNames =
    'card card-link mb-3 link-unstyled ' + theme === 'dark'
      ? 'bg-dark text-white'
      : '';

  return (
    <div className={classNames}>
      <div className="d-flex justify-content-between">
      <h3 className='title'>Posts</h3>
      <button className="btn-primary btn">
            <FontAwesomeIcon
              icon={faPlus}
              className='mx-2'
              // onClick={() => handleDeletePost(post?.id)}
            />

      </button>
      </div>
      {posts ? (
        posts.map((post) => (
          <NavLink to={`/posts/${post.id}`} key={post.id}>
            <div className='card-body link-unstyled card-link'>
              <p className='card-text'>{post.quillContent}</p>
            </div>
          </NavLink>
        ))
      ) : (
        <div>No posts</div>
      )}
    </div>
  );
};
export default Posts;
