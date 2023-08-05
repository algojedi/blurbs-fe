import React, { useContext } from 'react';
import { Post } from '../../types/types';
import { convertTimestampToDateTime } from '../../util/util';
import { ThemeContext } from '../../context/theme-provider';
import './post-list-item.scss';
import Tag from './tag/tag';

export type PostListItemProps = {
  post: Post;
  // isEditable: boolean;
  classNames?: string;
};

const PostListItem: React.FC<PostListItemProps> = ({
  classNames,
  // isEditable,
  post,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className='d-flex justify-content-between hover-light px-2 py-1'>
      <div className='post-list-item_name d-flex'>
        <div className='' style={{ color: theme.text.color.primary }}>
          {post.appUser.name}
        </div>
      </div>
      <Tag name='test-tag' />
      <div style={{ color: theme.text.color.secondary }}>
        {convertTimestampToDateTime(post.creationDate)}
      </div>
    </div>
  );
};

export default PostListItem;
