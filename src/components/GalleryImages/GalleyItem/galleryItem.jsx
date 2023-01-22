import { GalleryImageG, GalleryItemG } from './galleryItem.styled';
import { Modal } from 'components/Modal/modal';
import { useState } from 'react';

export const GalleyItem = ({ id, webformatURL, largeImageURL }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <GalleryItemG key={id} onClick={toggleModal}>
        <GalleryImageG src={webformatURL} alt="" />
      </GalleryItemG>
      {modal && <Modal largeImageURL={largeImageURL} onClose={toggleModal} />}
    </>
  );
};
