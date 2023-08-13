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
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
}

function renderGallery(images) {
    const markup = images.map(galleryTemplate).join('')
    refs.galleryList.innerHTML = markup;
}

renderGallery(galleryItems)


document.querySelectorAll('.gallery__item').forEach((item, idx) =>
    item.onclick = (event) => {
        event.preventDefault();
        basicLightbox.create(`
		<img width="1400" height="900" src="${galleryItems[idx].original}">
	`).show()
    })

console.log(galleryItems);
