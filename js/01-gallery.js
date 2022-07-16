import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
  
function createItem(array) {
    return galleryItems.reduce((acc, item) => acc + `<li clas="gallery__item"> <a class="gallery__link" href="${item.original}"> <img class="gallery__image" src = "${item.preview}" data-source ="${item.original}" alt = "${item.description}"> </a> </li>`, "");
};
gallery.insertAdjacentHTML("afterbegin", createItem(galleryItems));

gallery.addEventListener('click', onModalOpen);

function onModalOpen(event) {
    event.preventDefault();
    let modal = basicLightbox.create(`<img src="${event.target.parentNode.href}" width="800" height="600">`);
    modal.show();
    window.addEventListener("keydown", onModalClose);
    function onModalClose(evt) {
        if (evt.code === 'Escape') {
            modal.close();
        }
        window.removeEventListener("keydown", onModalClose)
    }
}



