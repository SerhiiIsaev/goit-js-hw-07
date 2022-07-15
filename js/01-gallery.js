import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

    
function createItem(array) {
    return galleryItems.reduce((acc, item) => acc + `<li clas="gallery__item"> <a class="gallery__link" href="large-image.jpg"> <img class="gallery__image" src = "${item.preview}" data-source ="${item.original}" alt = "${item.description}"> </a> </li>`, "");
}
gallery.insertAdjacentHTML("afterbegin", createItem(galleryItems))
debugger
gallery.addEventListener('click', onModalOpen);

