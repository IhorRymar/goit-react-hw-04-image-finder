import { useState, useEffect } from 'react';
import fetchImages from '../components/Gallery/ApiService';

const useGetImages = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query !== '') {
      setIsLoading(prevIsLoading => !prevIsLoading);

      fetchImages(query, page)
        .then(({ hits, totalHits }) => {
          const imagesArray = hits.map(hit => ({
            id: hit.id,
            description: hit.tags,
            smallImage: hit.webformatURL,
            largeImage: hit.largeImageURL,
          }));
          setTotalImages(totalHits);
          return imagesArray;
        })
        .then(imagesArray => {
          if (page === 1) {
            setImages(imagesArray);
          }
          return imagesArray;
        })
        .then(imagesArray => {
          if (page !== 1) {
            setImages(prevImages => [...prevImages, ...imagesArray]);
          }
        })
        .catch(error => setError(error))
        .finally(() => setIsLoading(prevIsLoading => !prevIsLoading));
    }
  }, [page, query]);

  const getSearchRequest = query => {
    setQuery(query);
    setPage(1);
  };

  const incrementPage = () => setPage(prevPage => prevPage + 1);

  return {
    getSearchRequest,
    incrementPage,
    totalImages,
    isLoading,
    images,
    error,
  };
};

export default useGetImages;
