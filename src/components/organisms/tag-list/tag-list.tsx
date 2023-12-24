import React, { useContext } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TagType } from '../../../types/types';
import { ThemeContext } from '../../../context/theme-provider';
import './tag-list.scss';
import Tag from '../../molecules/tag/tag';

export type TagListProps = {
  classNames?: string;
  tags: TagType[];
  editable?: boolean;
  horiztontal?: boolean;
  handleDeleteTagName?: (name: string) => void;
  handleDeleteTag?: (tagId: number) => void;
};

const TagList: React.FC<TagListProps> = ({
  classNames,
  tags,
  editable,
  horiztontal,
  handleDeleteTag,
}) => {
  const { theme } = useContext(ThemeContext);

  if (!tags.length) {
    return (
      <section className='text-danger h6 text-center'>No tags assigned</section>
    );
  }

  const displayTagsHorizontal = (
    <section className='tags-container d-flex'>
      {tags.map((tag, i) => {
        return (
          <section key={i} className='d-flex justify-content-between p-1'>
            <Tag name={tag.name} />{' '}
          </section>
        );
      })}
    </section>
  );

  const displayTagsVertical = (
    <section className='p-3 tags-container'>
      {tags.map((tag, i) => {
        return (
          <section key={i} className='d-flex justify-content-between p-1'>
            <Tag name={tag.name} />{' '}
            {editable && tag.id && handleDeleteTag && (
              <div
                role='button'
                onClick={() =>
                  tag.id && handleDeleteTag && handleDeleteTag(tag.id)
                }
              >
                <FontAwesomeIcon icon={faTrash} />
              </div>
            )}
          </section>
        );
      })}
    </section>
  );

  return horiztontal ? displayTagsHorizontal : displayTagsVertical;
};

export default TagList;
