import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

function createGalleryItem(item) {
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

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
}

const galleryMarkup = galleryItems.map(createGalleryItem);
galleryList.append(...galleryMarkup);

galleryList.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.tagName !== "IMG") {
    return;
  }

  const source = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
    <img src="${source}" width="800" height="600">
  `,
    {
      onShow: () => {
        document.addEventListener("keydown", handleKeyDown);
      },
      onClose: () => {
        document.removeEventListener("keydown", handleKeyDown);
      },
    }
  );

  instance.show();

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
});
