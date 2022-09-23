//Create the record
export class CreateRecord {
  constructor(date, type) {
    this._date = date;
    this._type = type;
    this._records = [];
  }

  add(record) {
    this._records.push(record);
  }
}

//Create the list of all records
export class RecordList {
  constructor() {
    this._records = [];
  }

  add(record) {
    this._records.push(record);
  }

  get records() {
    return [].concat(this._records);
  }
}
