import { getRecords } from "../Controller/show-list-records.js";

const $ = document.querySelector.bind(document);
const recordsFilter = $("#recordsFilter");
const filterButton = $('[data-record="filter"]');

filterButton.addEventListener("click", () => {
  recordsFilter.classList.toggle("records__filter--hide");
  fillRecordList();
});

export function fillRecordList() {
  clearListLines();

  let listRecords = getRecords();
  let listLength1 = listRecords.length;
  for (let i = 0; i < listLength1; i++) {
    let listLength2 = listRecords[i]._records.length;
    for (let j = 0; j < listLength2; j++) {
      let date = listRecords[i]._date;
      let type = listRecords[i]._type;
      let record;
      if (type === "measure") {
        record = listRecords[i]._records[j]._measure;
      } else if (type === "laboratory") {
        record = listRecords[i]._records[j]._laboratory;
      } else if (type === "composition") {
        record = listRecords[i]._records[j]._composition;
      } else if (type === "protocol") {
        record = listRecords[i]._records[j]._protocol;
      }
      let value = listRecords[i]._records[j]._value;
      fillListLines(date, type, record, value);
    }
  }
}

function fillListLines(date, type, record, value) {
  let newElement;
  newElement = document.createElement("tr");
  newElement.classList.add("records__list--item");
  newElement.setAttribute("data-list", "item");

  let child;

  child = document.createElement("td");
  child.textContent = type.toString();
  newElement.appendChild(child);

  child = document.createElement("td");
  child.textContent = date.toString();
  newElement.appendChild(child);

  child = document.createElement("td");
  child.textContent = `${record.toString()} = ${value.toString()}`;
  newElement.appendChild(child);

  child = document.createElement("td");
  let container = document.createElement("button");
  container.setAttribute("data-list", "editItem");
  container.classList.add("btn");
  container.classList.add("btn-light");

  let icon = document.createElement("i");
  icon.classList.add("fa-solid");
  icon.classList.add("fa-pen-to-square");

  container.appendChild(icon);
  child.appendChild(container);
  newElement.appendChild(child);

  let list = document.querySelector(".records__list--body");
  list.appendChild(newElement);
}

function clearListLines() {
  let list = document.querySelector(".records__list--body");
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}

/* <tr class="records__list--item">
  <td>Measure</td>
  <td>2020-01-01</td>
  <td>8</td>
  <td>
    <button><i class="fa-solid fa-pen-to-square"></i></button>
  </td>
</tr> */
