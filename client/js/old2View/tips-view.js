const $ = document.querySelector.bind(document);
const tips = $(".tips");
const closeTips = $('[data-tip-close="closeTips"]');

//Add event listener for buttons
closeTips.addEventListener("click", () => tips.classList.add("tips__hide"));
