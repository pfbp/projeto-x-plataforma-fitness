import { measureList } from "../Model/recordMeasure.js";

const $ = document.querySelector.bind(document);
const recordsFilter = $("#recordsFilter");
const newRecordButton = $('[data-record="newRecord"]');
const filterButton = $('[data-record="filter"]');

newRecordButton.addEventListener("click", () => openModal());
filterButton.addEventListener("click", () =>
  recordsFilter.classList.toggle("records__filter--hide")
);

function openModal() {
  const newButton = document.querySelector('[data-record-list="addItem"]');
  newButton.addEventListener("click", newItem);
  const clearAll = document.querySelector('[data-record-list="clearAll"');
  clearAll.addEventListener("click", removeAllItems);
  let typeSelector = document.querySelector('[data-record-list="type"]');
  typeSelector.addEventListener("change", updateAllButtons);
  let dateSelector = document.querySelector('[data-record-list="date"]');
  dateSelector.addEventListener("change", updateAllButtons);
  removeAllItems();
  updateAllButtons();
}

function updateAllButtons() {
  let removeButton = document.querySelectorAll(
    '[data-record-list="removeItem"]'
  );
  let inputs = document.querySelectorAll('[data-record-list="input"]');
  let values = document.querySelectorAll('[data-record-list="value"]');
  let deadlines = document.querySelectorAll('[data-record-list="deadline"]');
  let files = document.querySelectorAll('[data-record-list="file"]');
  let addButton = document.querySelector('[data-record-list="addItem"]');
  let typeSelector = document.querySelector('[data-record-list="type"]');
  for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener("click", removeRecordItem);
  }
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("change", updateAllButtons);
  }
  for (let i = 0; i < values.length; i++) {
    values[i].addEventListener("change", updateAllButtons);
  }
  for (let i = 0; i < deadlines.length; i++) {
    deadlines[i].addEventListener("change", updateAllButtons);
  }
  for (let i = 0; i < files.length; i++) {
    files[i].addEventListener("change", updateAllButtons);
  }
  removeButton.length !== 0
    ? typeSelector.setAttribute("disabled", "")
    : typeSelector.removeAttribute("disabled");
  typeSelector.value === "default"
    ? addButton.setAttribute("disabled", "")
    : addButton.removeAttribute("disabled");
  enableSubmit();
}

function enableSubmit() {
  let inputBlanc = 0;

  const typeRecord = document.querySelector('[data-record-list="type"');
  const dateRecord = document.querySelector('[data-record-list="date"');
  const input = document.querySelectorAll('[data-record-list="input"]');
  const value = document.querySelectorAll('[data-record-list="value"]');
  const deadline = document.querySelectorAll('[data-record-list="deadline"]');
  const file = document.querySelectorAll('[data-record-list="file"]');

  //check if type or date are blanc
  typeRecord.value === "default" ? inputBlanc++ : (inputBlanc = inputBlanc + 0);
  dateRecord.value === "" ? inputBlanc++ : (inputBlanc = inputBlanc + 0);

  //check if any different than blanc
  input.forEach((item) => (item.value === "" ? inputBlanc++ : ""));
  value.forEach((item) => (item.value === "" ? inputBlanc++ : ""));
  deadline.forEach((item) => (item.value === "" ? inputBlanc++ : ""));
  file.forEach((item) => (item.value === "" ? inputBlanc++ : ""));

  //check if no items on the list
  input.length === 0 ? inputBlanc++ : (inputBlanc = inputBlanc + 0);

  const submit = document.querySelector('[data-record-list="submit"]');
  inputBlanc > 0
    ? submit.setAttribute("disabled", "")
    : submit.removeAttribute("disabled", "");
}

function newItem() {
  const typeRecord = document.querySelector('[data-record-list="type"');
  let newElement;
  let column;
  let container;
  let child;

  newElement = document.createElement("div");
  newElement.classList.add("records__modal--item");
  newElement.setAttribute("data-record-list", "item");

  //first column
  column = document.createElement("div");
  column.classList.add("records__modal--column");

  if (typeRecord.value !== "media") {
    //first container - first column
    container = document.createElement("div");
    container.classList.add("records__modal--container");

    child = document.createElement("label");
    child.textContent = "Item";
    child.classList.add("form-label");
    container.appendChild(child);

    child = document.createElement("select");
    child.setAttribute("data-record-list", "input");
    child.setAttribute("name", "name");
    child.classList.add("form-select");
    fillPossibleMeasures(child);
    container.appendChild(child);

    column.appendChild(container);

    //second container - first column
    container = document.createElement("div");
    container.classList.add("records__modal--container");

    child = document.createElement("label");
    child.textContent = "Value";
    child.classList.add("form-label");
    container.appendChild(child);

    child = document.createElement("input");
    child.setAttribute("type", "number");
    child.setAttribute("data-record-list", "value");
    child.setAttribute("placeholder", "0.0");
    child.classList.add("form-control");
    container.appendChild(child);

    column.appendChild(container);
  } else {
    //unique container - first column
    container = document.createElement("div");
    container.classList.add("records__modal--container");

    child = document.createElement("label");
    child.textContent = "File";
    child.classList.add("form-label");
    container.appendChild(child);

    child = document.createElement("input");
    child.setAttribute("type", "file");
    child.setAttribute("data-record-list", "file");
    child.setAttribute("name", "name");
    child.classList.add("form-control");
    fillPossibleMeasures(child);
    container.appendChild(child);

    column.appendChild(container);
  }
  newElement.appendChild(column);

  if (typeRecord.value === "laboratory" || typeRecord.value === "composition") {
    //second column
    column = document.createElement("div");
    column.classList.add("records__modal--column");

    //first container - second column
    container = document.createElement("div");
    container.classList.add("records__modal--container");

    child = document.createElement("label");
    child.textContent = "Max reference";
    child.classList.add("form-label");
    container.appendChild(child);

    child = document.createElement("input");
    child.setAttribute("type", "number");
    child.setAttribute("data-record-list", "max");
    child.setAttribute("placeholder", "0.0");
    child.setAttribute("disabled", "");
    child.classList.add("form-control");
    container.appendChild(child);

    column.appendChild(container);

    //second container - second column
    container = document.createElement("div");
    container.classList.add("records__modal--container");

    child = document.createElement("label");
    child.textContent = "Min reference";
    child.classList.add("form-label");
    container.appendChild(child);

    child = document.createElement("input");
    child.setAttribute("type", "number");
    child.setAttribute("data-record-list", "min");
    child.setAttribute("placeholder", "0.0");
    child.setAttribute("disabled", "");
    child.classList.add("form-control");
    container.appendChild(child);

    column.appendChild(container);
    newElement.appendChild(column);
  }

  if (typeRecord.value === "protocol") {
    //second column
    column = document.createElement("div");
    column.classList.add("records__modal--column");

    //unique container - third column
    container = document.createElement("div");
    container.classList.add("records__modal--container");

    child = document.createElement("label");
    child.textContent = "Deadline";
    child.classList.add("form-label");
    container.appendChild(child);

    child = document.createElement("input");
    child.setAttribute("type", "number");
    child.setAttribute("data-record-list", "deadline");
    child.setAttribute("placeholder", "0.0");
    child.classList.add("form-control");
    container.appendChild(child);

    column.appendChild(container);
    newElement.appendChild(column);
  }

  //third column
  column = document.createElement("div");
  column.classList.add("records__modal--column");

  //unique container - third column
  container = document.createElement("div");
  container.classList.add("records__modal--container");

  child = document.createElement("button");
  child.setAttribute("data-record-list", "removeItem");
  child.classList.add("btn");
  child.classList.add("btn-light");

  let icon = document.createElement("i");
  icon.classList.add("fa-solid");
  icon.classList.add("fa-trash-can");

  child.appendChild(icon);
  container.appendChild(child);
  column.appendChild(container);
  newElement.appendChild(column);

  let list = document.querySelector('[data-record-list="list"]');
  list.appendChild(newElement);

  updateAllButtons();
}

function removeRecordItem() {
  let element = this.parentNode.parentNode.parentNode;
  element.remove();
  updateAllButtons();
}

function fillPossibleMeasures(item) {
  let child = document.createElement("option");
  child.textContent = "Choose";
  child.setAttribute("value", "");
  child.setAttribute("disabled", "");
  child.setAttribute("selected", "");
  child.setAttribute("hidden", "");
  item.appendChild(child);

  let options = measureList;
  options.forEach((opcao) => {
    let child = document.createElement("option");
    child.textContent = opcao;
    child.setAttribute("value", opcao);
    item.appendChild(child);
  });
}

function removeAllItems() {
  //remove all previous items
  let items = document.querySelectorAll('[data-record-list="item"]');
  items.forEach((item) => item.remove());
  let form = document.querySelector('[data-record-list="form"]');
  form.reset();
  updateAllButtons();
}
