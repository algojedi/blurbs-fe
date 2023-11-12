
import React, { useContext } from 'react';
import './tag.scss';

export type TagProps = {
	name: string;
  classNames?: string;
  id?: number;
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
