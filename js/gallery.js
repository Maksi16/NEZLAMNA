import { Fancybox } from "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.esm.js";
import inputJson from "./gallery.json" assert { type: "json" }

function createGalleryItem() {
  const gallery = document.querySelector('.carousel')

  for (let i = 0; i < Object.keys(inputJson).length; i++) {
    gallery.innerHTML += `<a data-fancybox="demo" href="${inputJson[i].image_url}">
    ${inputJson[i].title} <img class="rounded" src="${inputJson[i].image_url}" /></a>`
  }
}

createGalleryItem()

Fancybox.bind('[data-fancybox="gallery"]', {
    dragToClose: false,
  
    Toolbar: false,
    closeButton: "top",
  
    Image: {
      zoom: false,
    },
  
    on: {
      initCarousel: (fancybox) => {
        const slide = fancybox.Carousel.slides[fancybox.Carousel.page];
  
        fancybox.$container.style.setProperty(
          "--bg-image",
          `url("${slide.$thumb.src}")`
        );
      },
      "Carousel.change": (fancybox, carousel, to, from) => {
        const slide = carousel.slides[to];
  
        fancybox.$container.style.setProperty(
          "--bg-image",
          `url("${slide.$thumb.src}")`
        );
      },
    },
  });
//   https://fancyapps.com/docs/ui/fancybox/