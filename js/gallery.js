import images from "./gallery-items.js";

const galleryBox = document.querySelector(".js-gallery");
const imgMarkup = createGallery(images);

galleryBox.insertAdjacentHTML("beforeend", imgMarkup);

// function createImg(images) {}
// console.log(createGallery(images));

function createGallery(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
    })
    .join("");
}

// console.log(createCardsMarkcup)
