export class Protocol {
  #id;
  #user;
  #date;
  #type;
  #item;
  #termination;
  #frequency;
  #intensity;
  constructor(user, date, type, item, termination, frequency, intensity, id="") {
    this.#id = id;
    this.#user = user;
    this.#date = new Date(date.getTime());
    this.#type = type;
    this.#item = item;
    this.#termination = termination;
    this.#frequency = frequency;
    this.#intensity = intensity;
  }

  editProtocol(termination, frequency, intensity) {
    this.#termination = termination;
    this.#frequency = frequency;
    this.#intensity = intensity;
  }

  static typeOptions() {
    const list = [
      "Diet",
      "Water ingestion",
      "Gym workout",
      "Run / jog / walk",
      "Cycling",
      "Sports"
    ];
    return list;
  }

  static itemOptions(user, type) {
    let userLevel;
    //find user level
    let list = [];
    if (userLevel === "basic") {
      switch (type) {
        case "Diet":
          list.concat(
            { name: "", frequencyList: [], intensityUnit: "" },
            { name: "", frequencyList: [], intensityUnit: "" },
            { name: "", frequencyList: [], intensityUnit: "" }
          );
          break;
        case "Water ingestion":
          list.concat(
            { name: "", frequencyList: [], intensityUnit: "" },
            { name: "", frequencyList: [], intensityUnit: "" },
            { name: "", frequencyList: [], intensityUnit: "" }
          );
          break;
        case "Gym workout":
          list.concat(
            { name: "", frequencyList: [], intensityUnit: "" },
            { name: "", frequencyList: [], intensityUnit: "" },
            { name: "", frequencyList: [], intensityUnit: "" }
          );
          break;
        case "Run / jog / walk":
          list.concat(
            { name: "", frequencyList: [], intensityUnit: "" },
            { name: "", frequencyList: [], intensityUnit: "" },
            { name: "", frequencyList: [], intensityUnit: "" }
          );
          break;
        case "Cycling":
          list.concat(
            { name: "", frequencyList: [], intensityUnit: "" },
            { name: "", frequencyList: [], intensityUnit: "" },
            { name: "", frequencyList: [], intensityUnit: "" }
          );
          break;
        case "Sports":
          list.concat(
            { name: "", frequencyList: [], intensityUnit: "" },
            { name: "", frequencyList: [], intensityUnit: "" },
            { name: "", frequencyList: [], intensityUnit: "" }
          );
          break;
        default:
          throw new Error(`Unknown type ${type}`);
      }
    } else if (userLevel === "advanced") {
      //options for advanced
    } else {
      throw new Error(`Unknown level ${userLevel}`);
    }
    return list;
  }
}
