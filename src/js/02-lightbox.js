import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryUl = document.querySelector(".gallery");
const markup = createGalleryItems(galleryItems);

function createGalleryItems(items) {
    return items.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
    }).join("");
}

galleryUl.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: "alt",
});
