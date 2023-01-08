import { User } from '../Model/User-model.js'
import { Message } from "../Model/Message-model.js";
import { MessageView } from "../View/Message-view.js";

export class UserLogin {

  constructor() {
    let $ = document.querySelector.bind(document);
    this.userEmail = $('[data-user-email]').value;
    this.userPassword = $('[data-user-password]').value;

    this.message = new Message();
    this.messageView = new MessageView('[data-message]');
    this.messageView.update(this.message);
    
  }
  
  findUser(userEmail) {
    let user = new User("pbemfica", "pedrobemfica@yahoo.com.br", "123pedro"); //TODO: search and return user
    return user;
  }
  
  login(event) {
    event.preventDefault();
    let user = this.findUser(this.userEmail);
    let login = user.login(this.userEmail, this.userPassword);
    if (login === true) {
      this.message.text = 'Login successed. Redirecting...';
      this.messageView.update(this.message);
      this.messageView.send();
      setTimeout(() => {
        window.location.href = "profile.html";
      }, "2000");
    } else {
      this.message.text = 'E-mail or password incorrect. Try again.';
      this.messageView.update(this.message);
      this.messageView.send();
    }
    
  }
}
