import { measureList } from "../Model/recordMeasure.js";

const $qs = document.querySelector.bind(document);
const recordsFilter = $qs("#recordsFilter");
const newRecordButton = $qs('[data-record="newRecord"]');
const filterButton = $qs('[data-record="filter"]');

newRecordButton.addEventListener("click", () => openModal());
filterButton.addEventListener("click", () =>
  recordsFilter.classList.toggle("records__filter--hide")
);

function openModal() {
  const newButton = document.querySelector('[data-record-list="addItem"]');
  newButton.addEventListener("click", newItem());
  updateRemoveButton();
  disableFirstRemoveButton();
}

function updateRemoveButton() {
  let removeButton = document.querySelectorAll(
    '[data-record-list="removeItem"]'
  );
  for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener("click", removeRecordItem);
  }
}

function disableFirstRemoveButton() {
  let itemsList = document.querySelectorAll('[data-record-list="item"]');
  if (itemsList.length === 1) {
    let removeButton = document.querySelectorAll(
      '[data-record-list="removeItem"]'
    );
    removeButton[0].setAttribute("disabled", "");
  }
}

function enableRemoveButton() {
  let removeButton = document.querySelectorAll(
    '[data-record-list="removeItem"]'
  );
  if (removeButton.length !== 1) {
    for (let i = 0; i < removeButton.length; i++) {
      removeButton[i].removeAttribute("disabled");
    }
  }
}

function newItem() {
  let newElement = document.createElement("div");
  newElement.classList.add("records__modal--item");

  let child = document.createElement("label");
  child.textContent = "Item";
  newElement.appendChild(child);

  child = document.createElement("select");
  child.setAttribute("data-record-list", "measure");
  child.setAttribute("name", "name");
  fillPossibleMeasures(child);
  newElement.appendChild(child);

  child = document.createElement("label");
  child.textContent = "Value";
  newElement.appendChild(child);

  child = document.createElement("input");
  child.setAttribute("type", "number");
  child.setAttribute("data-record-list", "value");
  child.setAttribute("placeholder", "0.0");
  newElement.appendChild(child);

  child = document.createElement("button");
  child.setAttribute("data-record-list", "removeItem");
  child.classList.add("btn");
  child.classList.add("btn-light");
  child.textContent = "Remove";
  newElement.appendChild(child);

  let list = document.querySelector('[data-record-list="list"]');
  let reference = document.querySelector('[data-record-list="addButton"]');

  list.insertBefore(newElement, reference);

  updateRemoveButton();
  enableRemoveButton();
}

function removeRecordItem() {
  let element = this.parentNode;
  element.remove();
  disableFirstRemoveButton();
}

function fillPossibleMeasures(item) {
  let child = document.createElement("option");
  child.textContent = "Choose an option";
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
