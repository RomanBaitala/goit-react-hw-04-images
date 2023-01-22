import { useEffect } from 'react';
import { Overlay, ModalS, ExitCross } from './modal.styled';

export const Modal = ({ onClose, largeImageURL }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  const handleKeydown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdrop = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return (
    <>
      <Overlay onClick={handleBackdrop}>
        <ModalS>
          <ExitCross size="24px" onClick={onClose} />
          <img src={largeImageURL} alt="" />
        </ModalS>
      </Overlay>
    </>
  );
};
