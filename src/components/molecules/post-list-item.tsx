import React from 'react';
import { NavLink } from 'react-router-dom';
import { Post } from '../../types/types';

export type PostListItemProps = { post: Post; classNames?: string };

const PostListItem: React.FC<PostListItemProps> = ({ classNames, post }) => {
  return (
    <div className={classNames}>
      <span>{post.appUser.name}</span>
      <span>{post.creationDate}</span>
    </div>
  );
};

export default PostListItem;
