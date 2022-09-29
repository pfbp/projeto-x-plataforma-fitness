export class RecordProtocol {
  constructor(protocol, value, deadline) {
    this._protocol = protocol;
    this._value = value;
    this._deadline = deadline;
  }
}

export const protocolList = [
  "Hipertrofia Muscular",
  "Resistência Muscular",
  "Força Muscular",
  "HIIT",
  "Aeróbico em Jejum",
  "Caminhada",
  "Corrida"
];
