import React, { useState, useContext } from 'react';
import { GalleryContext } from './GalleryContext';
import './style.css';

const GallerySearch = () => {
  const [text, setText] = useState('');
  const { searchImages } = useContext(GalleryContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchImages(text);
    setText('');
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="search-button">
        <i className="material-icons">search</i>
      </button>
    </form>
  );
};

export default GallerySearch;
