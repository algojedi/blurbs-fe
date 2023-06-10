import React, { useContext } from 'react';
import { Post } from '../../types/types';
import { convertTimestampToDateTime } from '../../util/util';
import { ThemeContext } from '../../context/theme-provider';

export type PostListItemProps = { post: Post; classNames?: string };

const PostListItem: React.FC<PostListItemProps> = ({ classNames, post }) => {
	const { theme } = useContext(ThemeContext);
  return (
    <div className={classNames}>
      <span style={{ color : theme.text.color.primary}}>{post.appUser.name}</span>
      <span style={{ color : theme.text.color.secondary}}>{convertTimestampToDateTime(post.creationDate)}</span>
    </div>
  );
};

export default PostListItem;
