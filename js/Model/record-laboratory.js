export class recordLaboratory {
  constructor(laboratory, value, age, gender) {
    this._laboratory = laboratory;
    this._value = value;
    this._higherLimit = this.higherLimitLaboratory();
    this._lowerLimit = this.lowerLimitLaboratory();
  }
  higherLimitLaboratory() {
    return 2;
  }
  lowerLimitLaboratory() {
    return 1;
  }
}

export const laboratoryList = [
  "Hemograma",
  "Triglicérides",
  "Colesterol Total",
  "Colesterol HDL Soro",
  "Colesterol LDL",
  "Colesterol VLDL Soro",
  "Insulina",
  "Prolactina (PRL)",
  "Hormônio Fóliculo Estimulante (FSH)",
  "Hormônio Luteinizante (LH)",
  "Hormônio do Crescimento (HgH)",
  "Hormônio Tireoestimulante Ultra Sensível (TSH)",
  "Somatomedina (IGF-1)",
  "Cortisol",
  "Testosterona Total",
  "Testosterona Livre",
  "Dihidrotestosterona",
  "Globulina Carregadora dos Esteróides Sexuais (SHBG)",
  "Antígeno Prostático Específico (PSA Livre e Total)",
  "Estradiol",
  "Aspartato Aminotransferase (AST)",
  "Alanina Aminotransferase (ALT)",
  "Desidrogenase Lática (DHL)",
  "Fosfatase Alcalina",
  "Gama Glutamil Trasnferase (Gama GT)",
  "Homocisteína",
  "Creatinina",
  "Uréia",
  "Tiroxina (T4)",
  "Triiodotironina (T3)"
];
