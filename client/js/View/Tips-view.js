import { View } from './View.js';
import { } from '../Tools/swiper-bundle.js';

export class TipsView extends View {
    template() {return `
    <div class="tips">
    <div class="tips-header">
        <span> Tips </span>
        <svg class="tips-icon tips-icon--off hide" data-tip-hide><use xlink:href="./images/icons.svg#icon-switch-off"></use></svg>
        <svg class="tips-icon tips-icon--on" data-tip-show><use xlink:href="./images/icons.svg#icon-switch-on"></use></svg>
    </div>
    <div class="swiper swiper-tips" data-tip-container>
      <div class="swiper-wrapper">
      ${this.tipsSelection.map(item => {return `
          <div class="swiper-slide tip-slide">
              <p>
              ${item.content}
              </p>
          </div>
        `}).join("")}
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    `}

    get tipsSelection(){
        return [
            {id: 1, content: `
            Fill your profile with personal information and preferences. <br>
            Track your evolution with records of your body information. <br>
            Input you protocols for dieting, exercises and suplementation. <br>
            Share your success with your friends and check their evolution. <br>
            `},
            {id: 2, content: `
            Choose the advanced profile if you want to record more then only default information, such as weight, bodyfat and bodyparts diameters. <br>
            In advanced profile you can input more body composition, laboratory results such as hormon levels and healthy indicators.
            `},
            {id: 3, content: `
            Check the dashboard to see great views of your evolution.
            `},
            {id: 4, content: `
            Check your profile page to follow the information of your connections and usefull contents to guide you. <br>
            You will be abble to see the comparison with your connections checked with "compare" tool. <br>
            The content will fit your preferences and your behavior.
            `}
        ]
    }

    navigation() {
        const swiper = new Swiper('.swiper-tips', {
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
       
        
        let tipContainer = document.querySelector('[data-tip-container]');
        let closeHide = document.querySelector('[data-tip-hide]');
        let closeShow = document.querySelector('[data-tip-show]')
        closeHide.addEventListener('click', () => {
            tipContainer.classList.toggle('hide-tips');
            closeHide.classList.toggle('hide');
            closeShow.classList.toggle('hide');
        });
        closeShow.addEventListener('click', () => {
          tipContainer.classList.toggle('hide-tips');
          closeHide.classList.toggle('hide');
          closeShow.classList.toggle('hide');
      });
    }
}
