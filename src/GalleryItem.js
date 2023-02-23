import React from 'react';
import { Link } from 'react-router-dom';
import GalleryDetail from './GalleryDetail';
import './style.css';

const GalleryItem = ({ image }) => {
  console.log(image);
  const author = image.ownername;

  return (
    <li>
      <Link to={`/image/${image.id}`}>
        <GalleryDetail image={image} />
      </Link>
    </li>
  );
};

export default GalleryItem;

