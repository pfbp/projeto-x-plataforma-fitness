import { View } from './View.js';

export class ProfileInitialView extends View {
    template() {return `
    <div class="profile__user">
        <h3 class="profile__user--title">User Profile</h3>
        <div class="profile__user--container">
            <p>Username:</p>
            <p>Name</p>
        </div>
        <div class="profile__user--container">
            <p>Goal:</p>
            <p>Define goal</p>
        </div>
        <div class="profile__user--container">
            <p>Age / Gender:</p>
            <p>18 / Male</p>
        </div>
        <div class="profile__user--container">
            <button class="profile-edit--button" data-open-modal="profile" aria-label="Edit profile">
                <svg class="profile-edit--button-icon">
                    <use xlink:href="./images/icons.svg#icon-edit"></use>
                </svg>
            </button>
        </div>
    </div>
    `}

    navigation() {
        let modal = document.querySelector('[data-modal]');
        let edit = document.querySelector('[data-open-modal="profile"]');
        edit.addEventListener('click', () => {
            modal.classList.add('show-modal');
        });

    }
}