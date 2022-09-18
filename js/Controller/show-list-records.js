import { allRecords } from "./submit-records.js";

export function getRecords() {
  let file = "http://localhost:3000/db.json";
  let records;
  fetch(file)
    .then((response) => {
      console.log(response.json);
    })
    .then((json) => {
      records = json.parse(json);
      return records;
    });
  return allRecords.records;
}
