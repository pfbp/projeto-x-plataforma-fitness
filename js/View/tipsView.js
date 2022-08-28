const bodyTips = document.querySelectorAll(".tips__body");

const $ = document.querySelector.bind(document);
const tips = $(".tips");
const previousTip = $("#previousTip");
const nextTip = $("#nextTip");
const counterTips = $("#counterTips");
const closeTips = $("#closeTips");

var activeTip = 0;
updateCounter(bodyTips, counterTips);

//Add event listener for buttons
closeTips.addEventListener("click", () => tips.classList.add("tips__hide"));
previousTip.addEventListener("click", () =>
  fnPreviousTip(bodyTips, counterTips)
);
nextTip.addEventListener("click", () => fnNextTip(bodyTips, counterTips));

//Functions navigation tips
function fnPreviousTip(bodyTips, counterTips) {
  console.log(activeTip);
  activeTip === 0 ? (activeTip = 0) : activeTip--;
  updateCounter(bodyTips, counterTips);
  updateActiveTip(bodyTips);
}

function fnNextTip(bodyTips, counterTips) {
  console.log(activeTip);
  console.log(bodyTips.length);
  activeTip >= bodyTips.length - 1
    ? (activeTip = bodyTips.length - 1)
    : activeTip++;
  updateCounter(bodyTips, counterTips);
  updateActiveTip(bodyTips);
}

function updateCounter(bodyTips, counterTips) {
  counterTips.innerHTML = `${activeTip + 1} / ${bodyTips.length}`;
}

function updateActiveTip(bodyTips) {
  bodyTips.forEach((element, index) =>
    index === activeTip
      ? element.classList.add("tips__active")
      : element.classList.remove("tips__active")
  );
}
