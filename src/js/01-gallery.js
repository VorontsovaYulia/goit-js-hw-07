import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryUl = document.querySelector(".gallery");
const markup = createGalleryItems(galleryItems);

function createGalleryItems(items) {
    return items.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join("");
}

galleryUl.insertAdjacentHTML("beforeend", markup)

galleryUl.addEventListener("click", onClick);

function onClick(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains("gallery__image")) { 
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
    `)

    instance.show()

    const visible = basicLightbox.visible()

    if (visible) {
        document.addEventListener("keydown", onKey);

    function onKey(evt) {
    
    if (evt.code === "Escape") {
        instance.close() 
    }
    }
    document.removeEventListener("keydown", onKey);
}
}

