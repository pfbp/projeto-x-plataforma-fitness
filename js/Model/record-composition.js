export class RecordComposition {
  constructor(composition, value, age, gender) {
    this._composition = composition;
    this._value = value;
    this._higherLimit = this.higherLimitComposition();
    this._loweLimit = this.lowerLimitComposition();
  }
  higherLimitComposition() {
    return 2;
  }
  lowerLimitComposition() {
    return 1;
  }
}

export const compositionList = [
  "Gordura Corporal",
  "Mass Magra",
  "Água Corporal",
  "Gordura Visceral",
  "Gasto Energético Basal",
  "Gasto Energético Total"
];
