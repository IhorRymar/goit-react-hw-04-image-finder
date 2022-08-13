import Searchbar from './Gallery/Searchbar';
import ImageGallery from './Gallery/ImageGallery';
import Modal from './Gallery/Modal';
import Button from './Gallery/Button';
import Spiner from './Gallery/Spiner';

import useGetImages from '../hooks/useGetImages';
import useModal from '../hooks/useModal';

function App() {
  const {
    getSearchRequest,
    incrementPage,
    totalImages,
    isLoading,
    images,
    error,
  } = useGetImages();

  const {
    openModal,
    toggleModal,
    showModal,
    currentImageUrl,
    currentImageDescription,
  } = useModal();

  return (
    <>
      <Searchbar onSubmit={getSearchRequest} />

      {images && <ImageGallery images={images} openModal={openModal} />}

      {isLoading && <Spiner />}

      {images && images.length >= 12 && images.length < totalImages && (
        <Button incrementPage={incrementPage} />
      )}

      {showModal && (
        <Modal
          onClose={toggleModal}
          currentImageUrl={currentImageUrl}
          currentImageDescription={currentImageDescription}
        />
      )}

      {error && <p>{error}</p>}
    </>
  );
}

export default App;
