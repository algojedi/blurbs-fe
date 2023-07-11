
import React, { useContext } from 'react';
// import { ThemeContext } from '../../context/theme-provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './tag.scss';

export type TagProps = {
	name: string;
  classNames?: string;
};

const Tag: React.FC<TagProps> = ({ classNames, name, }) => {
  // const { theme } = useContext(ThemeContext);
  return (
    <div className='tag text-light bg-secondary px-1 rounded small'>
			{ name }
    </div>
  );
};

export default Tag;
