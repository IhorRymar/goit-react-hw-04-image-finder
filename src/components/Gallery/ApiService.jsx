const KEY = '28192905-9c9bb1b5a8af58fc3dabc837e';
const BASE_URL = 'https://pixabay.com/api';

const fetchImages = (query, page, perPage) => {
  const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${perPage}&key=${KEY}`;

  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Oops! Nothing found'));
  });
};

export default fetchImages;
