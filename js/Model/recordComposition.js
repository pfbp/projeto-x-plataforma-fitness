export class recordComposition {
  constructor(composition, value, age, gender) {
    this._composition = composition;
    this._value = value;
    this._higherLimit = (composition, age, gender) => {
      return higherLimitComposition(composition, age, gender);
    };
    this._loweLimit = (composition, age, gender) => {
      return lowerLimitComposition(composition, age, gender);
    };
  }

  compositionList() {
    const list = ["type1", "type2", "type3"];
    return list;
  }
}

function higherLimitComposition(composition, age, gender) {}

function lowerLimitComposition(composition, age, gender) {}
