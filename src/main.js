import { fetchImages } from './pixabay-api.js';
import { createGalleryMarkup, showMessage } from './render-functions.js';

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  const searchQuery = searchInput.value.trim();

  if (!searchQuery) {
    showMessage('Будь ласка, введіть запит для пошуку');
    return;
  }

  loader.classList.add('is-active');
  gallery.innerHTML = '';

  try {
    const images = await fetchImages(searchQuery);
    if (images.length === 0) {
      showMessage(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    } else {
      gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(images));
      new SimpleLightbox('.gallery a');
    }
  } catch (error) {
    showMessage('Виникла помилка при пошуку зображень');
  } finally {
    loader.classList.remove('is-active');
  }
});
