import axios from 'axios';

const API_KEY = '48410810-6cc12cd8ef8f80f7e97e53d15';

export async function fetchImages(query) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data.hits;
}
