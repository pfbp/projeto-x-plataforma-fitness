import { allRecords } from "./submit-records.js";

export function getRecords() {
  let file = "#/json/records.json";
  let records;
  // fetch(file)
  //   .then((response) => {
  //     //console.log(response.json);
  //   })
  //   .then((json) => {
  //     records = json.parse(json);
  //     return records;
  //   });
  return allRecords.records;
}
