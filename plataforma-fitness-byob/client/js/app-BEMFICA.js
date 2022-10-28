import {} from "./Tools/bootstrap-bundle.js";
import {} from "./Tools/swiper-bundle.js";
import { InitialContentView } from "./View/InitialContent-view.js";
import { NewUserView } from "./View/NewUser-view.js";
import { NavbarView } from "./View/Navbar-view.js";
import { TipsView } from "./View/Tips-view.js";
import { ProfileInitialView } from "./View/ProfileInitial-view.js";

const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

let initialContent = document.querySelector('[data-initial-content]');
if(initialContent) {
    initialContent = new InitialContentView('[data-initial-content]');
    initialContent.update();
    initialContent.navigation();
}

let newUser = document.querySelector('[data-form-new-user]');
if (newUser) {
    newUser = new NewUserView('[data-form-new-user]');
    newUser.update();
    newUser.navigation();
}

let navbar = document.querySelector('[data-navbar]');
if(navbar){
    navbar = new NavbarView('[data-navbar]');
    navbar.update();
}

let tips = document.querySelector('[data-tips]');
if(tips) {
    tips = new TipsView('[data-tips]');
    tips.update();
    tips.navigation();
    tips.collapsible();
}

let profileInitial = document.querySelector('[data-profile-initial]');
if(profileInitial) {
    profileInitial = new ProfileInitialView('[data-profile-initial]');
    profileInitial.update();
    profileInitial.navigation();
}