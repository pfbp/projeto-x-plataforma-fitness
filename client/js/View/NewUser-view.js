import { View } from './View.js';
import { CreateUserController } from '../Controller/CreateUser-controller.js';

export class NewUserView extends View {
    template() {return `
    <form class="newUser-form" data-form-new-user>
        <div class="form-title"><h1> Create your profile </h1></div>
        <div class="form-group">
            <div class="mb-3">
                <label class="form-label" for="newuser-username"> Username </label>
                <input class="form-control" id="newuser-username" type="text" required data-username-new-user>
                <span class="form-alert"> Username already exist. </span>
            </div>
            <div class="mb-3">
                <label class="form-label" for="newuser-email"> E-mail </label>
                <input class="form-control" id="newuser-email" type="email" placeholder="example@email.com" required data-email-new-user>
                <span class="form-alert"> E-mail invalid - the input should have a template as example@email.com </span>
                <span class="form-alert"> E-mail already registered - <a href=#>recover account</a>. </span>
            </div>
            <div class="mb-3">
                <label class="form-label" for="newuser-password"> Password </label>
                <input class="form-control" id="newuser-password" type="password" required data-password-new-user>
                <span class="form-alert"> Invalid password - it should contain: at least 8 digits; one number; one capital letter; one special character (! @ # $ % & *). </span>
            </div>
            <div class="mb-3">
                <label class="form-label" for="newuser-level" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip"
                data-bs-title="Advanced users will have more information to input and track, but will increase the complexity to use the app. You can change it anytime after creating your user."> Level
                <svg class="icon-question"><use xlink:href="./images/icons.svg#icon-question"></use></svg>
                </label>
                <select id="newuser-level" class="form-select" aria-label="Level of new user" data-level-new-user>
                    <option value="basic" selected> Basic </option>
                    <option value="advanced"> Advanced <option> 
                </select>
            </div>
        </div>
        <div class="form-group">
            <div class="mb-3">
                <label class="form-label" for="newuser-birthday"> Birth date </label>
                <input id="newuser-birthday" class="form-control" type="date" data-birthdate-new-user>
                <span class="form-helper" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip"
                 data-bs-title="The user age is required for some features to evaluate normal and abnormal states, such as performance and body fat. This information is optional."> Why we ask this information? 
                 <svg class="icon-question"><use xlink:href="./images/icons.svg#icon-question"></use></svg>
                 </span>
            </div>
            <div class="mb-3">
                <label class="form-label" for="newuser-gender"> Gender </label>
                <select id="newuser-gender" class="form-select" aria-label="Gender of new user" data-gender-new-user> 
                    <option value="none" selected> Don't want to inform </option>
                    <option value="male"> Male </option>
                    <option value="female"> Female </option>
                </select>
                <span class="form-helper" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip"
                data-bs-title="The user gender is required for some features to evaluate normal and abnormal states, such as performance and body fat. This information is optional."> Why we ask this information? 
                <svg class="icon-question"><use xlink:href="./images/icons.svg#icon-question"></use></svg>
                </span>
            </div>
            <div class="mb-3">
                <label class="form-label" for="newuser-race"> Race </label>
                <select id="newuser-race" class="form-select" aria-label="Race of new user" data-race-new-user>
                    <option value="none"selected> Don't want to inform </option>
                    <option value=""> American Indian or Alaska Native </option>
                    <option value=""> Asian </option>
                    <option value=""> Black or African American </option>
                    <option value=""> Hispanic or Latino </option>
                    <option value=""> Native Hawaiian or Other Pacific Islander </option>
                    <option value=""> White </option>
                </select>
                <span class="form-helper" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-custom-class="custom-tooltip"
                data-bs-title="The information is required for some singular laboratory exams information and will be used also to improve the experience of the user. This information is optional."> Why we ask this information? 
                <svg class="icon-question"><use xlink:href="./images/icons.svg#icon-question"></use></svg>
                </span>
            </div>
        </div>
        <div class="form-command">
            <button type=""submit" class="btn btn-primary" data-submit-new-user> Create my user </button>
            <a href="initial.html"> Back to initial page </a>
        </div>
    </form>
    `}

    navigation() {
        let submitButton = document.querySelector('[data-form-new-user]'); 
        let user = new CreateUserController();
        submitButton.addEventListener('submit', (event) => {
            user.addNewUser(event);
        }); 

        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    }
}