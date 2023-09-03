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

// Ініціалізація бібліотеки SimpleLightbox
const lightbox = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  onShow: (instance) => {
    document.addEventListener("keydown", handleKeyDown);
    instance.on("close", () => {
      document.removeEventListener("keydown", handleKeyDown);
    });
  },
});

function handleKeyDown(event) {
  if (event.key === "Escape") {
    lightbox.close();
  }
}
