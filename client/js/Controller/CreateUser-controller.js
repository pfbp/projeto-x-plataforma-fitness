import { User } from "../Model/User-model.js";
import { Message } from "../Model/Message-model.js";
import { MessageView } from "../View/Message-view.js";

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

    addNewUser(event) {
        event.preventDefault();
        let user = this.createNewUser();
       
        if(false) { //TODO: select if problem for creating user
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

    createNewUser() {
        return new User(this.userName, this.email, this.password, 
            "active", this.level, this.birthdate, this.gender, this.race);
    }


}