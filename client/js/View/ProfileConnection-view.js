import { View } from './View.js';
import { } from '../Tools/swiper-bundle.js';

export class ProfileConnectionView extends View {
    template() {return `
    <div class="connection-header">
      <h2 class="connection-title"> Check out your friends evolution </h2>
      <a href="connections.html">
        <span>Go to connections page</span>
        <svg class="connection-expand-icon"><use xlink:href="./images/icons.svg#icon-expand"></use></svg>
      </a>
    </div>
    <div class="swiper swiper-connection">
      <div class="swiper-wrapper">
      ${this.connectionSelection.map(item => {return `
          <div class="swiper-slide">

            <div class="card" style="width: 18rem;">
                <img src="${item.image}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.content}</p>
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

    get connectionSelection(){
        return [
            {id: 1,
            image: "./images/example-image.jpg",
            name: "Name person 1",
            content: `
            Last record: information <br>
            Last protocol: information <br>
            New photos: date
            `},
            {id: 2, 
            image: "./images/example-image.jpg",
            name: "Name person 2",
            content: `
            Last record: information <br>
            Last protocol: information <br>
            New photos: date
            `},
            {id: 3, 
            image: "./images/example-image.jpg",
            name: "Name person 3",
            content: `
            Last record: information <br>
            Last protocol: information <br>
            New photos: date
            `},
            {id: 4, 
            image: "./images/example-image.jpg",
            name: "Name person 4",
            content: `
            Last record: information <br>
            Last protocol: information <br>
            New photos: date
            `},
            {id: 5, 
            image: "./images/example-image.jpg",
            name: "Name person 5",
            content: `
            Last record: information <br>
            Last protocol: information <br>
            New photos: date
            `}
        ]
    }

    navigation() {
        const swiper = new Swiper('.swiper-connection', {
            
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