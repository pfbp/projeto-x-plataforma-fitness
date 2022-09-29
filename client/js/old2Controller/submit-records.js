import { RecordMeasure } from "../Model/record-measure.js";
import { RecordLaboratory } from "../Model/record-laboratory.js";
import { RecordComposition } from "../Model/record-composition.js";
import { RecordProtocol } from "../Model/record-protocol.js";
import { CreateRecord, RecordList } from "../Model/record-list.js";
import { fillRecordList } from "../View/list-records-view.js";

var allRecords = new RecordList();

export function newRecord(event) {
  event.preventDefault();
  let date = document.querySelector('[data-record-list="date"]');
  let type = document.querySelector('[data-record-list="type"]');
  let record = new CreateRecord(date.value, type.value);

  let inputs = document.querySelectorAll('[data-record-list="input"]');
  let values = document.querySelectorAll('[data-record-list="value"]');
  let deadlines = document.querySelectorAll('[data-record-list="deadline"]');

  let age = 18; //placeholder for function to calculate age
  let gender = "male"; //placeholder for import of the gender from user
  let input;
  if (type.value === "measure") {
    for (let i = 0; i < inputs.length; i++) {
      input = new RecordMeasure(inputs[i].value, values[i].value);
      record.add(input);
    }
  } else if (type.value === "laboratory") {
    for (let i = 0; i < inputs.length; i++) {
      input = new RecordLaboratory(
        inputs[i].value,
        values[i].value,
        age,
        gender
      );
      record.add(input);
    }
  } else if (type.value === "composition") {
    for (let i = 0; i < inputs.length; i++) {
      input = new RecordComposition(
        inputs[i].value,
        values[i].value,
        age,
        gender
      );
      record.add(input);
    }
  } else if (type.value === "protocol") {
    for (let i = 0; i < inputs.length; i++) {
      input = new RecordProtocol(
        inputs[i].value,
        values[i].value,
        deadlines[i].value
      );
      record.add(input);
    }
  }
  allRecords.add(record);
  fillRecordList();
  publishRecords(allRecords);
}

export async function publishRecords(records) {
  let file = "#/json/records.json";
  let jsonRecords = JSON.stringify(records);
  // const publishContent = {
  //   method: "POST",
  //   body: jsonRecords
  // };
  // return fetch(file, publishContent)
  //   .then((response) => response.json())
  //   .then(() => console.log("registered"))
  //   .catch((err) => {
  //     throw Error(err);
  //   });
}

export { allRecords };
