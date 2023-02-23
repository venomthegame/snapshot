import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import apiKey from './config';
import './style.css';

export const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('mountain');

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${category}&per_page=24&format=json&nojsoncallback=1`;
      const response = await axios.get(url);
      setImages(response.data.photos.photo);
      setLoading(false);
    };

    fetchImages();
  }, [category]);

  const searchImages = async (text) => {
    setLoading(true);
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${text}&per_page=24&format=json&nojsoncallback=1`;
    const response = await axios.get(url);
    setImages(response.data.photos.photo);
    setLoading(false);
    setSearchTerm(text);
  };

  const updateCategory = (value) => {
    setCategory(value);
  };

  const contextValue = {
    images,
    loading,
    searchTerm,
    category,
    searchImages,
    updateCategory,
  };

  return (
    <GalleryContext.Provider value={contextValue}>
      {children}
    </GalleryContext.Provider>
  );
};
