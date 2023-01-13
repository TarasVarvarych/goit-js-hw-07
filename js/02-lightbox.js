import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

function createGalleryMarkup(array) {
  return array
    .map(
      ({
        original,
        preview,
        description,
      }) => `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
    )
    .join("");
}

galleryEl.innerHTML = createGalleryMarkup(galleryItems);
var lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: 'alt',
});

galleryEl.addEventListener("click", onGalleryPictureClick);
function onGalleryPictureClick(e) {
  e.preventDefault();
}
