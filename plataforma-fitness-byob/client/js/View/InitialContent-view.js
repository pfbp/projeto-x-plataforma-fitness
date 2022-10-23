import { View } from './View.js';
import { UserLogin } from "../Controller/UserLogin-controller.js";

export class InitialContentView extends View {
    template() {return `
        <div class="initial">
            <div class="initial-container">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">
                    Login existing user
                </button>
                <a href="new-user.html">Subscribe with a new user</a>
            </div>
        </div>
    `}

    loginModalTemplate() {return `
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="loginModalLabel">Insert your account information</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="inputLoginEmail" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="inputLoginEmail" aria-describedby="emailHelp" placeholder="user@email.com" data-user-email>
                        </div>
                        <div class="mb-3">
                            <label for="inputLoginPassword" class="form-label">Password</label>
                            <input type="password" class="form-control" id="inputLoginPassword" placeholder="Enter your password" data-user-password>
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="checkLogin">
                            <label class="form-check-label" for="checkLogin">Check me out</label>
                        </div>
                        
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary" data-login-submit>Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    `}

    navigation() {
        let modal = document.querySelector('[data-modal]');
        modal.innerHTML = this.loginModalTemplate();
        let submitButton = document.querySelector('[data-login-submit]');
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            let user = new UserLogin();
            window.location.href = "profile.html";
        })
        
        
    }
}
