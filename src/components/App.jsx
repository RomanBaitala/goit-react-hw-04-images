import { useState } from 'react';
import { GalleryImages } from './GalleryImages/galleryImages';
import { Searchbar } from './Searchbar/searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [query, setQuery] = useState('');

  return (
    <>
      <ToastContainer />
      <Searchbar searchByQuery={setQuery}></Searchbar>
      <GalleryImages query={query}></GalleryImages>
    </>
  );
};
