export class recordLaboratory {
  constructor(laboratory, value, age, gender) {
    this._laboratory = laboratory;
    this._value = value;
    this._higherLimit = (laboratory, age, gender) => {
      return higherLimitLaboratory(laboratory, age, gender);
    };
    this._lowerLimit = (laboratory, age, gender) => {
      return lowerLimitLaboratory(laboratory, age, gender);
    };
  }

  laboratoryList() {
    const list = ["type1", "type2", "type3"];
    return list;
  }
}

function higherLimitLaboratory(laboratory, age, gender) {}

function lowerLimitLaboratory(laboratory, age, gender) {}
