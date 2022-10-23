import { User } from '../Model/User-model.js'

export class UserLogin {
  #userEmail;
  #userPassword;
  #getUser;
  #login;
  constructor() {
    let $ = document.querySelector.bind(document);
    this.#userEmail = $('[data-user-email]').value;
    this.#userPassword = $('[data-user-password]').value;

    this.#getUser = this.findUser(this.#userEmail);

    this.#login = this.#getUser.login(this.#userEmail, this.#userPassword);
    if (this.#login) {
      console.log("placeholder: success");
    } else {
      throw new Error("E-mail or password incorrect");
    }
  }

  findUser(userEmail) {
    let user = new User("pbemfica", "pedrobemfica@yahoo.com.br", "123pedro");
    return user;
  }
}
