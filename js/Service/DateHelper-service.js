export class DateHelper {
  constructor() {
    throw new Error("This class cannot be instantiated");
  }

  static dateToText(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  static textToDate(text) {
    if (!/\d{2}\/\d{2}\/\d{4}/.test(text))
      throw new Error("Deve estar no formato dd/mm/yyyy");
    return new Date(
      ...text
        .split("/")
        .reverse()
        .map((item, index) => item - (index % 2))
    );
  }
}
