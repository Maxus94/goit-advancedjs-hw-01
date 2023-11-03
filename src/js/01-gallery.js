// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
//console.log(SimpleLightbox);
//console.log(galleryItems);

let markUp = "";
galleryItems.forEach(
  ({ preview, original, description }) =>
    (markUp += `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>
`)
);

const ul = document.querySelector(".gallery");

ul.innerHTML = markUp;

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
