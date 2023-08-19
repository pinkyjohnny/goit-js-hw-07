import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    galleryList: document.querySelector(".gallery"),
    galleryLink: document.querySelector('.gallery__link')
}


function galleryTemplate(galleryItems) {
    const preview = galleryItems.preview;
    const original = galleryItems.original;
    const description = galleryItems.description;

    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
}

function renderGallery(images) {
    const markup = images.map(galleryTemplate).join('')
    refs.galleryList.insertAdjacentHTML("afterbegin", markup)

}

renderGallery(galleryItems)

let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
});

