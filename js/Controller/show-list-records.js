export function getRecords() {
  let file = "#/records.json";
  let records;
  fetch(file)
    .then((response) => {
      //console.log(response.json);
    })
    .then((json) => {
      records = json.parse(json);
      return records;
    });
}
