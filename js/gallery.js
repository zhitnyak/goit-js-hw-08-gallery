import images from "./gallery-items.js";

//1.2.зарендерим разметку в контейнер galleryBox ч/з insertAdjacentHTML в ul
const galleryBox = document.querySelector(".js-gallery");
const imgMarkup = createGallery(images);

galleryBox.insertAdjacentHTML("beforeend", imgMarkup);

//2.1вешаем на на контейнер слушателя
galleryBox.addEventListener("click", onBoxClick);

//1создаем разметку, заполняем HTML шаблон
function createGallery(images) {
  //1.1.возвращаем карточку с разметкой
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
//2.реализуем делегирование
function onBoxClick(evt) {
  //2.1.если это не элемент gallery__image, то мы выходит их ф-ции
  const ImgEl = evt.target.classList.contains(".gallery__image");
  if (!ImgEl) {
    return;
  }
  //2.2.теперь нужно найти и выбрать текущее изображение (сначала нужно снять активный класс - т.к он может быть уже выбран)
  const currentActivEl = document.querySelector(".gallery__item.is-active");
  //2.3.пишем услоевие - если есть такой класс, то удаляем его
  if (currentActivEl) {
    currentActivEl.classlist.remove("is-active");
  }

  //2.4.исходный эл-т, на котором произошло событие
  const galeryEl = evt.target;
  //2.5.ищем предка с аналогичным селектором
  const parentEl = galeryEl.closest(".gallery__item");
  //2.6.на этого найденного предка добавляем класс
  parentEl.classList.add("is-active");
}
const openModalBtn = document.querySelector('[data-action="close-lightbox"]');
openModalBtn.addEventListener("click", onOpenModal);
penModalBtn.addEventListener("click", onCloseModal);

function onOpenModal(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
    document.body.classList.add("is-open");
  }
}

function onCloseModal() {
  evt.preventDefault();
  if (evt.target.nodeName === "IMG") {
    return;
    document.body.classList.remove("is-open");
  }
}
