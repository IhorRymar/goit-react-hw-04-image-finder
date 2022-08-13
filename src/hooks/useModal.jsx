import { useState } from 'react';

const useModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentImageUrl, setCurrentImageUrl] = useState(null);
  const [currentImageDescription, setCurrentImageDescription] = useState(null);

  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  const openModal = e => {
    if (e.target.nodeName === 'IMG') {
      setShowModal(prevShowModal => !prevShowModal);
      setCurrentImageUrl(e.target.dataset.large);
      setCurrentImageDescription(e.target.alt);
    }
  };

  return {
    openModal,
    toggleModal,
    showModal,
    currentImageUrl,
    currentImageDescription,
  };
};

export default useModal;
