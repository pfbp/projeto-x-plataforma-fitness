const $ = document.querySelector.bind(document);
const registerModal = $("#registerModal");
const newMeasureButton = $("#newMeasureButton");

newMeasureButton.addEventListener("click", () => openModal("measure"));

function openModal(type) {}
