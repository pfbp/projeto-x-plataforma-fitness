export class recordProtocol {
  constructor(protocol, value, dueDate) {
    this._protocol = protocol;
    this._value = value;
    this._dueDate = dueDate;
  }

  protocolList() {
    const list = ["type1", "type2", "type3"];
    return list;
  }
}
