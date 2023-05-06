import axios from 'axios';

const API_KEY = '34337580-4a6e8b796eace0e632a6af18e';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchPhoto = async (inputText, page) => {
  const response = await axios.get(
    `?key=${API_KEY}&q=${inputText}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
  );
  return response.data;
};
