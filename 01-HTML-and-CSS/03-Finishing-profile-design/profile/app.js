const rightControls = document.getElementById("right-controls");
const leftControls = document.getElementById("left-controls");
const imgGithub = document.getElementById("second-image");
const unorderedList = document.querySelector("header>ul");

console.log(unorderedList);


rightControls.addEventListener("click", () => {
  imgGithub.classList.remove("hidden");
  unorderedList.firstElementChild.remove();
});

// leftControls.addEventListener("click", () => {

// })
