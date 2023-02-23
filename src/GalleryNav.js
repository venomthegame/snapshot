import React, { useContext } from 'react';
import { GalleryContext } from './GalleryContext';
import './style.css';

const GalleryNav = () => {
  const { category, updateCategory } = useContext(GalleryContext);

  const handleClick = (value) => {
    updateCategory(value);
  };

  return (
    <nav className="main-nav">
      <ul>
        <li
          className={category === 'mountain' ? 'active' : ''}
          onClick={() => handleClick('mountain')}
        >
          Mountain
        </li>
        <li
          className={category === 'beach' ? 'active' : ''}
          onClick={() => handleClick('beach')}
        >
          Beach
        </li>
        <li
          className={category === 'bird' ? 'active' : ''}
          onClick={() => handleClick('bird')}
        >
          Bird
        </li>
        <li
          className={category === 'food' ? 'active' : ''}
          onClick={() => handleClick('food')}
        >
          Food
        </li>
      </ul>
    </nav>
  );
};

export default GalleryNav;
