import React, { useContext } from 'react';
import { Post } from '../../types/types';
import { convertTimestampToDateTime } from '../../util/util';
import { ThemeContext } from '../../context/theme-provider';


export type PostListItemProps = { post: Post; classNames?: string };

const PostListItem: React.FC<PostListItemProps> = ({ classNames, post }) => {
	const { theme } = useContext(ThemeContext);
  return (
    <div className='d-flex justify-content-between hover-light px-2 py-1'>
      <div className='' style={{ color : theme.text.color.primary}}>{post.appUser.name}</div>
      <div style={{ color : theme.text.color.secondary}}>{convertTimestampToDateTime(post.creationDate)}</div>
    </div>
  );
};

export default PostListItem;
