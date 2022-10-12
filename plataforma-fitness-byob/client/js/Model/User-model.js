import { Connection } from "./Connection-model.js";

export class User {
  #id;
  #userName;
  #email;
  #password;
  #date;
  #birthday;
  #gender;
  #race;
  #level;
  #preferences;
  #connections;
  #recordsList;
  #protocolsList;
  constructor(id, userName, email, password, level = "basic", birthday=undefined, gender=undefined, race=undefined) {
    this.#id = id;
    this.#userName = userName;
    this.#email = email;
    this.#password = password;
    this.#date = new Date();
    this.#birthday = birthday;
    this.#gender = gender;
    this.#race = race;
    this.#level = level;
    this.#preferences = [];
    this.#connections = [];
    this.#recordsList = [];
    this.#protocolsList = [];
  }

  get id() {
    return this.#id;
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

  set email(email) {
    this.#email = email;
  }

  get date() {
    return this.#date;
  }

  get birthday() {
    return this.#birthday;
  }

  set birthday(birthday) {
    this.#birthday = new Date(birthday.getTime());
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

  get level() {
    return this.#level;
  }

  set level(level) {
    this.#level = level;
  }
  
  get preferences() {
    return this.#preferences;
  }

  get connections() {
    return this.#connections;
  }

  get recordsList() {
    return this.#recordsList;
  }

  get protocolsList() {
    return this.#protocolsList;
  }

  set password(password) {
    this.#password = password;
  }

  addPreference(preference) {
    if (this.#preferences.includes(preference)) {
      throw Error(`reference ${preference} already assigned`);
    } else {
      this.#preferences.concat(preference);
    }
  }

  removePreference(preference) {
    if (this.#preferences.includes(preference)) {
      let index = this.#preferences.indexOf(preference);
      this.#preferences.splice(index, 1);
    } else {
      throw Error(`preference ${preference} not found`);
    }
  }

  addConnection(userId) {
    let user = this.#connections.find((element) => element.userId === userId);
    if (user === undefined) {
      let connection = new Connection(userId, new Date());
      this.#connections.concat(connection);
    } else {
      throw Error(`User ${user.userName} already connected`);
    }
  }

  removeConnection(userId) {
    let user = this.#connections.find((element) => element.userId === userId);
    if (user === undefined) {
      throw Error(`Connection with user ${userId} not found`);
    } else {
      let index = this.#connections.findIndex(
        (element) => element.userId === userId
      );
      this.#connections.splice(index, 1);
    }
  }

  addRecord(record) {
    this.#recordsList.concat(record);
  }

  removeRecord(recordId) {
    let index = this.#recordsList.findIndex(
      (element) => element.recordId === recordId
    );
    this.#recordsList.splice(index, 1);
  }

  addProcotol(protocol) {
    this.#protocolsList.concat(protocol);
  }

  removeProtocol(protocolId) {
    let index = this.#protocolsList.findIndex(
      (element) => element.protocolId === protocolId
    );
    this.#protocolsList.splice(index, 1);
  }

  login(email, password) {
    if (email === this.#email && password === this.#password) {
      return true;
    } else {
      return false;
    }
  }

  static preferenceOptions() {
    const list = [
      "Food and diet",
      "Bodybuilding",
      "Aerobic",
      "Running",
      "Cycling",
      "Swimming",
      "HIIT",
      "Stretching",
      "Pilates",
      "Yoga",
      "Wellbeing",
      "Muscle growth",
      "Lose weigth",
      "Performance increase",
      "Hormons",
      "Natural life"
    ];
    return list;
  }
}
