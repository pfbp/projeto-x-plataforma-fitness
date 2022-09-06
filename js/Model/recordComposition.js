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
}

function higherLimitComposition(composition, age, gender) {}

function lowerLimitComposition(composition, age, gender) {}

export const compositionList = [
  "Gordura Corporal",
  "Mass Magra",
  "Água Corporal",
  "Gordura Visceral",
  "Gasto Energético Basal",
  "Gasto Energético Total"
];
