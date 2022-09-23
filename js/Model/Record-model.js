export class Record {
  #recordId;
  #date;
  #type;
  #item;
  #value;
  #highLimit;
  #lowLimit;
  constructor(user, date, type, item, value, gender, age) {
    this.#recordId = (user) => {
      return user.recordList.length;
    };
    this.#date = new Date(date.getTime());
    this.#type = type;
    this.#item = item;
    this.#value = value;
    this.#highLimit = this.highLimit(type, item, gender, age);
    this.#lowLimit = this.lowLimit(type, item, gender, age);
  }

  static highLimit(type, item, gender, age) {
    let highValue = 0;
    //calculate the high-value depending on the type and item
    return highValue;
  }

  static lowLimit(type, item, gender, age) {
    let lowValue = 0;
    //calculate the low-value depending on the type and item
    return lowValue;
  }

  editRecord(value) {
    this.#value = value;
  }

  static typeOptions() {
    const list = ["Body-composition", "Measure", "Laboratory-exam"];
    return list;
  }

  static itemOptions(user, type) {
    let userLevel;
    //find user level
    let list = [];
    if (userLevel === "basic") {
      switch (type) {
        case "Body-composition":
          list.concat(
            { name: "Body fat", unit: "%" },
            { name: "Body water", unit: "%" },
            { name: "Skeletal muscle", unit: "%" },
            { name: "Lean body mass", unit: "kg" },
            { name: "Basal metabolic rate", unit: "kcal/day" },
            { name: "Resting metabolic rate", unit: "kcal/day" }
          );
          break;
        case "Measure":
          list.concat(
            { name: "Height", unit: "m" },
            { name: "Weight", unit: "kg" },
            { name: "Neck", unit: "cm" },
            { name: "Chest", unit: "cm" },
            { name: "Waist", unit: "cm" },
            { name: "Hips", unit: "cm" },
            { name: "Right biceps", unit: "cm" },
            { name: "Left biceps", unit: "cm" },
            { name: "Right forearm", unit: "cm" },
            { name: "Left forearm", unit: "cm" },
            { name: "Right thigh", unit: "cm" },
            { name: "Left thigh", unit: "cm" },
            { name: "Right calf", unit: "cm" },
            { name: "Left calf", unit: "cm" }
          );
          break;
        case "Laboratory-exam":
          list.concat(
            { name: "Testosterone", unit: "?" },
            { name: "Insulin", unit: "?" },
            { name: "Growth hormone", unit: "?" },
            { name: "Insulin-like growth factors", unit: "?" },
            { name: "Cortisol", unit: "?" },
            { name: "Glucagon", unit: "?" },
            { name: "Epinephrine", unit: "?" }
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
