import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');


  
function createItem(array) {
    return galleryItems.reduce((acc, item) => acc + `<a class="gallery__item" href="${item.original}"> <img class="gallery__image" src = "${item.preview}" alt = "${item.description}"> </a>`, "");
};
gallery.insertAdjacentHTML("afterbegin", createItem(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
});

