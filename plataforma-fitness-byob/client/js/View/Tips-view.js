import { View } from './View.js';

export class TipsView extends View {
    template() {return `
    <div class="tips" data-tip-container>
        <div class="tips__header">
            <button class="tips__reduced--button" data-toggle="tips">&#8505</button>
            <button class="tips__close--button" data-tip-close>&#88</button>
        </div>
        <div class="tips--collapse" data-toggle="collapse-tips">
            <div class="tips__slideshow--container">
            ${this.tipsSelection.map(item => {return `
                <div class="tips__slideshow--slide fade-tip" data-tip-slide>
                    <p>
                    ${item.content}
                    </p>
                </div>
                `}).join("")}
                <div class="tips__prev--button" data-tip-prev>&#10094</div>
                <div class="tips__next--button" data-tip-next>&#10095</div>
            </div>
            <div class="tips__dot">
            ${this.tipsSelection.map(item => {return `
                <span class="tips__dot--items" data-tip-dot></span>
            `}).join("")}
            </div>
        </div>
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
        let slideIndex;
        if(!slideIndex) {
            slideIndex=0;
        }
        this.showSlide(slideIndex);
        let prev = document.querySelector('[data-tip-prev]');
        let next = document.querySelector('[data-tip-next]');
        prev.addEventListener('click', () => {
            slideIndex--;
            slideIndex <= 0 ? slideIndex = 0 : slideIndex = slideIndex;
            this.showSlide(slideIndex);
        });
        
        next.addEventListener('click', () => {
            slideIndex++;
            slideIndex >= (this.tipsSelection.length-1) ? slideIndex = this.tipsSelection.length-1 : slideIndex = slideIndex;
            this.showSlide(slideIndex);
        });
        
        let dots = document.querySelectorAll('[data-tip-dot]');
        for (let i=0; i<dots.length; i++) {
            dots[i].addEventListener('click', () => {
                slideIndex = i;
                this.showSlide(slideIndex);
            });
        }
        
        let tipContainer = document.querySelector('[data-tip-container]');
        let close = document.querySelector('[data-tip-close]');
        close.addEventListener('click', () => {
            tipContainer.classList.add('hide-tips');
        });
    }
    
    showSlide(slideIndex) {
        let slides = document.querySelectorAll('[data-tip-slide]');
        let dots = document.querySelectorAll('[data-tip-dot]');
        for (let i = 0; i < slides.length; i++) {
            i === slideIndex ? slides[i].classList.add("active-tip") : slides[i].classList.remove("active-tip");
        }
        for (let i = 0; i < dots.length; i++) {
            i === slideIndex ? dots[i].classList.add("active-dot") : dots[i].classList.remove("active-dot");
        }
    }

    collapsible() {
        let tipToggler = document.querySelector('[data-toggle="tips"]');
        tipToggler.addEventListener('click', () => {

        let tipCollapse = document.querySelector('[data-toggle="collapse-tips"]');
        tipCollapse.classList.toggle("collapse-tip")});
    }
}