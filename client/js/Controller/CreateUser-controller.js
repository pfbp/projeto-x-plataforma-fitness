import { User } from "../Model/User-model.js";
import { Preferences } from "../Model/Preferences-model.js";
import { Message } from "../Model/Message-model.js";
import { MessageView } from "../View/Message-view.js";
import { newUserRoute } from "../Config/server-routes.js";

export class CreateUserController {
    constructor () {
        let $ = document.querySelector.bind(document);
        this.userName = $('[data-username-new-user]').value;
        this.email = $('[data-email-new-user]').value;
        this.password = $('[data-password-new-user]').value;
        this.level = $('[data-level-new-user]').value;
        this.birthdate = $('[data-birthdate-new-user]').value;
        this.gender = $('[data-gender-new-user]').value;
        this.race = $('[data-race-new-user]').value;

        this.message = new Message();
        this.messageView = new MessageView('[data-message]');
        this.messageView.update(this.message);
    }

    async addNewUser(event) {
        event.preventDefault();
        const user = new User(this.userName, this.email, this.password, this.birthdate, this.gender, this.race);
        const response = await fetch(newUserRoute, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const idUser = response.json().content.id;
        const preferences = new Preferences(idUser, level=this.level);
       
        if(response.status !== 200) {
            this.message.text = 'Not able to create the user';
            this.messageView.update(this.message);
            this.messageView.send();
        } else {
            this.message.text = 'New user created. Redirecting...';
            this.messageView.update(this.message);
            this.messageView.send();
            setTimeout(() => {
                window.location.href = "profile.html";
            }, "2000");
        }

    }
}