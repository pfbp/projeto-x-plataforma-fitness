import { Connection } from "./Connection-model.js";

export class User {
  #id;
  #userName;
  #email;
  #password;
  #date;
  #level;
  #preference;
  #connection;
  #recordList;
  #protocolList;
  constructor(id, userName, email, password, date, level = "basic") {
    this.#id = id;
    this.#userName = userName;
    this.#email = email;
    this.#password = password;
    this.#date = new Date(date.getTime());
    this.#level = level;
    this.#preference = [];
    this.#connection = [];
    this.#recordList = [];
    this.#protocolList = [];
  }

  get id() {
    return this.#id;
  }

  get userName() {
    return this.#userName;
  }

  get email() {
    return this.#email;
  }

  get date() {
    return this.#date;
  }

  get level() {
    return this.#level;
  }

  get preference() {
    return this.#preference;
  }

  get connection() {
    return this.#connection;
  }

  get recordsList() {
    return this.#recordList;
  }

  get protocolList() {
    return this.#protocolList;
  }

  set userName(userName) {
    this.#userName = userName;
  }

  set email(email) {
    this.#email = email;
  }

  set password(password) {
    this.#password = password;
  }

  set level(level) {
    this.#level = level;
  }

  addPreference(preference) {
    if (this.#preference.includes(preference)) {
      throw Error("preference already assigned");
    } else {
      this.#preference.concat(preference);
    }
  }

  removePreference(preference) {
    if (this.#preference.includes(preference)) {
      let index = this.#preference.indexOf(preference);
      this.#preference.splice(index, 1);
    } else {
      throw Error("preference not found");
    }
  }

  addConnection(userId, date) {
    let user = this.#connection.find((element) => element.userId === userId);
    if (user === undefined) {
      let connection = new Connection(userId, date);
      this.#connection.concat(connection);
    } else {
      throw Error(`User ${user.userName} already connected`);
    }
  }

  removeConnection(userId) {
    let user = this.#connection.find((element) => element.userId === userId);
    if (user === undefined) {
      throw Error(`Connection with user ${userId} not found`);
    } else {
      let index = this.#connection.findIndex(
        (element) => element.userId === userId
      );
      this.#connection.splice(index, 1);
    }
  }

  addRecord(record) {
    this.#recordList.concat(record);
  }

  removeRecord(recordId) {
    let index = this.#recordList.findIndex(
      (element) => element.recordId === recordId
    );
    this.#recordList.splice(index, 1);
  }

  addProcotol(protocol) {
    this.#protocolList.concat(protocol);
  }

  removeProtocol(protocolId) {
    let index = this.#protocolList.findIndex(
      (element) => element.protocolId === protocolId
    );
    this.#protocolList.splice(index, 1);
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
