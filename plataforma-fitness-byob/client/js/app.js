import { NavbarView } from "./View/Navbar-view.js";
import { TipsView } from "./View/Tips-view.js";
import { ProfileInitialView } from "./View/ProfileInitial-view.js";

let navbar = new NavbarView('[data-navbar]');
if(navbar){
    navbar.update();
    navbar.collapsible();
}

let tips = new TipsView('[data-tips]');
if(tips) {
    tips.update();
    tips.navigation();
    tips.collapsible();
}

let profileInitial = new ProfileInitialView('[data-profile-initial]');
if(profileInitial) {
    profileInitial.update();
    profileInitial.navigation();
}