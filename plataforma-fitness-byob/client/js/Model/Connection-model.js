export class Connection {
  #userId;
  #date;
  #favorite;
  #comparison;
  #compare;
  constructor(userId, date, favorite = "false", comparison = "false") {
    this.#userId = userId;
    this.#date = new Date(date.getTime());
    this.#favorite = favorite;
    this.#comparison = comparison;
    this.#compare = [];
  }

  get connection() {
    return this;
  }

  get userId() {
    return this.#userId;
  }

  get date() {
    return this.#date;
  }

  get favorite() {
    return this.#favorite;
  }

  get comparison() {
    return this.#comparison;
  }

  get compare() {
    return this.#compare;
  }

  set favorite(favorite) {
    this.#favorite = favorite;
  }

  set compare(compare) {
    this.#compare = compare;
  }

  addComparison(recordName) {
    if (this.#compare.includes(recordName)) {
      throw Error("record already assigned");
    } else {
      this.#compare.concat(recordName);
    }
  }

  removeComparison(recordName) {
    if (this.#compare.includes(recordName)) {
      let index = this.#compare.indexOf(recordName);
      this.#compare.splice(index, 1);
    } else {
      throw Error("record already assigned");
    }
  }
}
