export class User {
  #id;
  #userName;
  #email;
  #password;
  #birthdate;
  #gender;
  #race;
  #active;
  #creation;
  #lastLogin;

  constructor(userName, email, password, birthdate=undefined, gender=undefined, race=undefined, active=true) {
    this.#userName = userName;
    this.#email = email;
    this.#password = password;
    this.#birthdate = birthdate;
    this.#gender = gender;
    this.#race = race;
    this.#active = active;
    this.#creation = new Date();
  }
  
  get id() {
    return this.#id;
  }

  set id(id) {
    this.#id = id;
  }

  get userName() {
    return this.#userName;
  }
  
  set userName(userName) {
    this.#userName = userName;
  }
  
  get email() {
    return this.#email;
  }
  
  set password(password) {
    this.#password = password;
  }

  get creation() {
    return this.#creation;
  }

  get lastLogin() {
    return this.#lastLogin;
  }

  get birthdate() {
    return this.#birthdate;
  }
  
  set birthdate(birthdate) {
    this.#birthdate = new Date(birthdate.getTime());
  }
  
  get gender() {
    return this.#gender;
  }

  set gender(gender) {
    this.#gender = gender;
  }
  
  get race() {
    return this.#race;
  }

  set race(race) {
    this.#race = race;
  }

  login(email, password) {
    if (email === this.#email && password === this.#password && this.#active === true) {
      let date = new Date();
      this.lastLogin(date);
      return true;
    } else { 
      return (this.#active === true) ? "User not existent" : "E-mail or password incorrect";
    }
  }  
  
  lastLogin(date) {
    this.#lastLogin = new Date(date.getTime());
  }

  inactivate(email, password) {
    if (email === this.#email && password === this.#password) {
      this.#active = false;
      return "User deleted";
    } else {
      return "E-mail or password incorrect";
    }
  }
}
