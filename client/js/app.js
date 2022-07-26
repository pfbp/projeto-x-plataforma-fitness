import {} from "./Tools/bootstrap-bundle.js";
import { InitialView } from "./View/Initial-view.js";
import { NewUserView } from "./View/NewUser-view.js";
import { NavbarView } from "./View/Navbar-view.js";
import { TipsView } from "./View/Tips-view.js";
import { ProfileUserView } from "./View/ProfileUser-view.js";
import { ProfileContentView } from "./View/ProfileContent-view.js";
import { ProfileRecordView } from "./View/ProfileRecord-view.js";
import { ProfileConnectionView } from "./View/ProfileConnection-view.js";

let initial = document.querySelector('[data-initial-content]');
if(initial) {
    initial = new InitialView('[data-initial-content]');
    initial.update();
    initial.navigation();
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
}

let profileInitial = document.querySelector('[data-profile-user]');
if(profileInitial) {
    profileInitial = new ProfileUserView('[data-profile-user]');
    profileInitial.update();
    profileInitial.navigation();
}

let profileConnection = document.querySelector('[data-profile-connection]');
if(profileConnection) {
    profileConnection = new ProfileConnectionView('[data-profile-connection]');
    profileConnection.update();
    profileConnection.navigation();
}

let profileRecord = document.querySelector('[data-profile-record]');
if(profileRecord) {
    profileRecord = new ProfileRecordView('[data-profile-record]');
    profileRecord.update();
    profileRecord.navigation();
}

let profileContent = document.querySelector('[data-profile-content]');
if(profileContent) {
    profileContent = new ProfileContentView('[data-profile-content]');
    profileContent.update();
    profileContent.navigation();
}
