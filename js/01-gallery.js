import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
function createGalleryMarkup(array) {
  return array
    .map(
      (item) => `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`
    )
    .join("");
}

galleryEl.innerHTML = createGalleryMarkup(galleryItems);

galleryEl.addEventListener("click", onGalleryPictureClick);

function onGalleryPictureClick(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();
  const instance = basicLightbox.create(`
  <img src="${e.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  window.addEventListener("keydown", onBodyEsc);
  function onBodyEsc(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}
