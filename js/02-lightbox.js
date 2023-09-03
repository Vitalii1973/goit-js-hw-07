// Імпорт масиву galleryItems з файлу gallery-items.js.

import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Вивід масиву galleryItems в консоль для перевірки.

console.log(galleryItems);
// Отримуємо посилання на елемент списку ul.gallery у DOM-дереві.

const galleryList = document.querySelector(".gallery");

// Створення функції createGalleryItem, яка буде використовуватися для створення розмітки для кожного елемента галереї.

function createGalleryItem(item) {
  // Створюємо елемента <li> для елемента галереї
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  // Створюємо елементи <a> для зображення
  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;
  link.setAttribute("data-lightbox", "image-set");

  // Створюємо елементи <img> для зображення
  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.alt = item.description;
  image.setAttribute("data-title", item.description);

  // Додаємо елементи до DOM-структури
  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
}
// Створюємо масив galleryMarkup, який містить створені елементи галереї за допомогою функції createGalleryItem.
const galleryMarkup = galleryItems.map(createGalleryItem);
galleryList.append(...galleryMarkup);

// Ініціалізовуємо бібліотеку SimpleLightbox
const lightbox = new SimpleLightbox(".gallery__link", {
  captions: true, // Увімкнули підписи
  captionDelay: 250, // Затримка перед показом підпису
});
