import { recordMeasure } from "../Model/record-measure.js";
import { recordLaboratory } from "../Model/record-laboratory.js";
import { recordComposition } from "../Model/record-composition.js";
import { recordProtocol } from "../Model/record-protocol.js";
import { createRecord, recordList } from "../Model/record-list.js";

var allRecords = new recordList();

export function newRecord(event) {
  event.preventDefault();
  let date = document.querySelector('[data-record-list="date"]');
  let type = document.querySelector('[data-record-list="type"]');
  let record = new createRecord(date.value, type.value);

  let inputs = document.querySelectorAll('[data-record-list="input"]');
  let values = document.querySelectorAll('[data-record-list="value"]');
  let deadlines = document.querySelectorAll('[data-record-list="deadline"]');

  let age = 18; //placeholder
  let gender = "male"; //placeholder
  let input;
  if (type.value === "measure") {
    for (let i = 0; i < inputs.length; i++) {
      input = new recordMeasure(inputs[i].value, values[i].value);
      record.add(input);
    }
  } else if (type.value === "laboratory") {
    for (let i = 0; i < inputs.length; i++) {
      input = new recordLaboratory(
        inputs[i].value,
        values[i].value,
        age,
        gender
      );
    }
    record.add(input);
  } else if (type.value === "composition") {
    for (let i = 0; i < inputs.length; i++) {
      input = new recordComposition(
        inputs[i].value,
        values[i].value,
        age,
        gender
      );
    }
    record.add(input);
  } else if (type.value === "protocol") {
    for (let i = 0; i < inputs.length; i++) {
      input = new recordProtocol(
        inputs[i].value,
        values[i].value,
        deadlines[i].value
      );
    }
    record.add(input);
  }
  allRecords.add(record);
  publishRecords(allRecords);
}

export async function publishRecords(records) {
  let file = "#/json/records.json";
  let jsonRecords = JSON.stringify(records);
  console.log(jsonRecords);
  const publishContent = {
    method: "POST",
    body: jsonRecords
  };
  return fetch(file, publishContent)
    .then((response) => response.json())
    .then(() => console.log("registered"))
    .catch((err) => {
      throw Error(err);
    });
}
