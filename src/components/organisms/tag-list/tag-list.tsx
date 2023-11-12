import React, { useContext } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TagType } from '../../../types/types';
import { ThemeContext } from '../../../context/theme-provider';
import './tag-list.scss';
import Tag from '../../molecules/tag/tag';

export type TagListProps = {
  classNames?: string;
  tags?: TagType[];
  handleDeleteTag: (name: string) => void;
};

const TagList: React.FC<TagListProps> = ({
  classNames,
  tags,
  handleDeleteTag,
}) => {
  const { theme } = useContext(ThemeContext);

  const displayTags = tags && tags.length ? (
    <section className='p-3'>
      {tags.map((tag, index) => {
        return (
          <section key={index} className='d-flex justify-content-between p-1'>
            <Tag name={tag.name} />{' '}
            <div role='button' onClick={() => handleDeleteTag(tag.name)}>
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </section>
        );
      })}
    </section>
  ) : (
    <section className='text-danger h6 text-center'>No tags assigned</section>
  );

  return displayTags;
};

export default TagList;
