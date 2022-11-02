import { View } from './View.js';
import { } from '../Tools/swiper-bundle.js';

export class ProfileContentView extends View {
    template() {return `
    <div class="content-header">
      <h2 class="content-title"> Great content choosen for you </h2>
      <a href="content.html">
        <span>Go to content page</span>
        <svg class="content-expand-icon"><use xlink:href="./images/icons.svg#icon-expand"></use></svg>
      </a>
    </div>
    <div class="swiper swiper-content">
      <div class="swiper-wrapper">
      ${this.contentSelection.map(item => {return `
          <div class="swiper-slide">

            <div class="card" style="width: 18rem;">
                <img src="${item.image}" class="card-img-top" alt="${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.content}</p>
                    <a href="${item.link}" class="btn btn-primary"> Visit site</a>
                </div>
            </div>
          </div>
        `}).join("")}
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    `}

    get contentSelection(){
        return [
            {id: 1,
            image: "./images/example-image.jpg",
            title: "Title for the image 1",
            link: "https://www.youtube.com",
            content: `
            Text for the image. <br>
            Brief description for the content of the image. <br>
            Go see. <br>
            `},
            {id: 2, 
            image: "./images/example-image.jpg",
            title: "Title for the image 2",
            link: "https://www.youtube.com",
            content: `
            Text for the image. <br>
            Brief description for the content of the image. <br>
            Go see. <br>
            `},
            {id: 3, 
            image: "./images/example-image.jpg",
            title: "Title for the image 3",
            link: "https://www.youtube.com",
            content: `
            Text for the image. <br>
            Brief description for the content of the image. <br>
            Go see. <br>
            `},
            {id: 4, 
            image: "./images/example-image.jpg",
            title: "Title for the image 4",
            link: "https://www.youtube.com",
            content: `
            Text for the image. <br>
            Brief description for the content of the image. <br>
            Go see. <br>
            `},
            {id: 5, 
            image: "./images/example-image.jpg",
            title: "Title for the image 5",
            link: "https://www.youtube.com",
            content: `
            Text for the image. <br>
            Brief description for the content of the image. <br>
            Go see. <br>
            `}
        ]
    }

    navigation() {
        const swiper = new Swiper('.swiper-content', {
            
            slidesPerView: 1,
            spaceBetween: 10,
            breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
                },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
                },
            960: {
                slidesPerView: 3,
                spaceBetween: 30
                },
            1280: {
                slidesPerView: 4,
                spaceBetween: 40
                }
            },

            direction: 'horizontal',
            speed: 800,
            spaceBetween: 100,
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          });
    }
}