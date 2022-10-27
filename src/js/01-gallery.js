
import { galleryItems } from '././gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);

const galleryContainer = document.querySelector('div.gallery');
const cards = createGalleryPictures(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cards);

function createGalleryPictures(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
    return `
    <a class="gallery__item"  href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>`
}).join('')
};
console.log(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay: 250});
// galleryContainer.addEventListener(`click`, toClickGallery)

// function toClickGallery(e){
//     // e.preventDefault();
//     if (!e.target.classList.contains('gallery__image')) {
//         return
//     }
// };
 


// const galleryContainer = document.querySelector('.gallery');
// const cards = createGalleryPictures(galleryItems);

// galleryContainer.insertAdjacentHTML('beforeend', cards);

// function createGalleryPictures(galleryItems) {
//     return galleryItems.map(({preview, original, description}) => {
//     return `
//     <a class="gallery__item"  href="${original}">
//     <img class="gallery__image" src="${preview}" alt="${description}"/>
//     </a>`
// }).join('')
// };

// let lightbox = new SimpleLightbox('.gallery a', {captionsData:"alt", captionDelay: 250});

