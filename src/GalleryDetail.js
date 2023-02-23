import React, { useState } from 'react';

import './style.css';




const GalleryDetail = ({ image }) => {
  console.log(image)
  const [showDetail, setShowDetail] = useState(false);

  const handleClick = () => {
    setShowDetail(!showDetail);
  };

  if (!image || !image.server) {
    return null; // or handle the error in some other way
  }

  return (
    <div className='main'>
    <li>
      <img
        src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_q.jpg`}
        alt={image.title}
        onClick={handleClick}
      />
      {showDetail && (
        <div className="detail">
          <img
            src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_z.jpg`}
            alt={image.title}
          />
        </div>
      )}
    </li>
    </div>
 
  );
};

export default GalleryDetail;
