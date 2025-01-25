import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function createGalleryMarkup(images) {
  const li = document.createElement(`li`);
  li.classList.add(`gallery-item`);
  const a = document.createElement(`a`);
  a.classList.add(`gallery-link`);
  a.href = image.original;
  const img = document.createElement(`img`);
  img.classList.add(`gallery-image`);
  img.src = image.preview;
  img.alt = image.description;
  li.appendChild(a);
  a.appendChild(img);

  return li;
}
const fragment = document.createDocumentFragment();
images.forEach(image => {
  const li = createImageMarkup(image);
  fragment.appendChild(li);
});
gallery.appendChild(fragment);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: `alt`,
  captionPosition: `bottom`,
});

export function showMessage(message, type = 'error') {
  iziToast[type]({
    title: 'Повідомлення',
    message,
    position: 'topRight',
  });
}
