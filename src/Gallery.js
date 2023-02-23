import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryNav from './GalleryNav';
import GallerySearch from './GallerySearch';
import GalleryItem from './GalleryItem';
import { GalleryContext } from './GalleryContext';
import './style.css';

const Gallery = () => {
  const [category, setCategory] = useState('mountain');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_FLICKR_API_KEY}&tags=${category}&per_page=24&format=json&nojsoncallback=1`;
      try {
        const response = await axios.get(url);
        console.log(process.env.REACT_APP_FLICKR_API_KEY);
        const data = response.data;
       // console.log("data" , data);
        setImages(response.data.photos.photo);
        // console.log(response.data.photos.photo);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchImages();
  }, [category]);

  const searchImages = async (text) => {
    setLoading(true);
    setSearchTerm(text);
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${process.env.REACT_APP_FLICKR_API_KEY}&tags=${text}&per_page=24&format=json&nojsoncallback=1`;
    try {
      const response = await axios.get(url);
      setImages(response.data.photos.photo);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const updateCategory = (value) => {
    setCategory(value);
  };

  return (
    <GalleryContext.Provider
      value={{
        category,
        images,
        loading,
        searchTerm,
        searchImages,
        updateCategory,
      }}
    >
      <div className="container">
        <GalleryNav />
        <GallerySearch />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="photo-list">
            {images.map((image) => (
              <GalleryItem key={image.id} image={image} />
            ))}
          </ul>
        )}
      </div>
    </GalleryContext.Provider>
  );
};

export default Gallery;
