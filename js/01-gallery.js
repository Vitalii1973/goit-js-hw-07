import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

function createGalleryItem(item) {
  // Створюємо елементи для кожного елемента галереї
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.alt = item.description;
  image.setAttribute("data-source", item.original);

  // З'єднуємо елементи у структуру
  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
}

const galleryMarkup = galleryItems.map(createGalleryItem);
// Додаємо створені елементи галереї до списку
galleryList.append(...galleryMarkup);

galleryList.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.tagName !== "IMG") {
    return;
  }

  const source = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
  `);

  instance.show();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    basicLightbox.close();
  }
});
