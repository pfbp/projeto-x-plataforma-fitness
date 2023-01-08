export class Preferences {
   #id;
   #user;
   #level;
   #showTips;
   #allowUseInfo;
   #mainGoal;
   #secondGoal;
   #interests;
    constructor(user, level="basic") {
        this.#user = user;
        this.#level = level;
    }

    get level() {
        return this.#level;
    }

    set level(level) {
        this.#level = level;
    }

    get showTips(){
        return this.#showTips;
    }

    set showTips(state) {
        this.#showTips = state;
    }

    get allowUseInfo() {
        return this.#allowUseInfo;
    }

    set allowUseInfo(state) {
        this.#allowUseInfo = state;
    }

    get mainGoal() {
        return this.#mainGoal;
    }

    set mainGoal(mainGoal) {
        this.#mainGoal = mainGoal;
    }

    get secondGoal() {
        return this.#secondGoal;
    }

    set secondGoal(secondGoal) {
        this.#secondGoal = secondGoal;
    }
    
    set insertInterest(interest) {
        this.#interests.push(interest);
    }

    set deleteInterest(interest) {
        let index = this.#interests.findIndex(element => element === interest);
        this.#interests.splice(index, 1);
    }

 static interestOptions() {
    const list = [
      "Food and diet",
      "Bodybuilding",
      "Aerobic",
      "Running",
      "Cycling",
      "Swimming",
      "HIIT",
      "Stretching",
      "Pilates",
      "Yoga",
      "Wellbeing",
      "Muscle growth",
      "Lose weigth",
      "Performance increase",
      "Hormons",
      "Natural life"
    ];
    return list;
  }

  static goalOptions() {
    const list = [
        "Lose weight",
        "Gain weight",
        "Gain muscle",
        "Increase health",
        "Increase strenght",
        "Increase performance in sports",
        "Wellbeing",
        "New lifestyle"
    ]
  }

}