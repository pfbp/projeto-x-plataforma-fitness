export class UserLogin {
  #userEmail;
  #userPassword;
  #getUser;
  constructor() {
    let $ = document.querySelector.bind(document);
    this.#userEmail = $(["data-user-email"]);
    this.#userPassword = $(["data-user-password"]);

    this.#getUser = this.findUser(this.#userEmail);

    this.#login = this.#getUser.login(this.#userEmail, this.#userPassword);
    if (this.#login) {
      console.log("placeholder: success");
    } else {
      throw new Error("E-mail or password incorrect");
    }
  }

  findUser(userEmail) {
    let user;
    return user;
  }
}
