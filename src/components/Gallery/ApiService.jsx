const KEY = '28192905-9c9bb1b5a8af58fc3dabc837e';
const BASE_URL = 'https://pixabay.com/api';
const FILTER = '&image_type=photo&orientation=horizontal&per_page=12';

const fetchImages = async (query, page = 1) => {
  const url = `${BASE_URL}?q=${query}&page=${page}&key=${KEY}${FILTER}`;

  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Oops! Nothing found'));
  });
};

export default fetchImages;
