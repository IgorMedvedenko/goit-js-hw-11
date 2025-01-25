import { searchImages } from './pixabay-api.js';
import {
  renderImages,
  clearGallery,
  showLoader,
  hideLoader,
} from './render-functions.js';

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.search-form');

  searchForm.addEventListener('submit', async event => {
    event.preventDefault();

    const searchInput = event.target.elements.searchInput;
    const query = searchInput.value.trim();

    if (!query) {
      return;
    }

    clearGallery();
    showLoader();

    try {
      const images = await searchImages(query);
      renderImages(images);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      hideLoader();
      searchInput.value = '';
    }
  });
});
