// Declaration of global variables

const button = document.getElementById("clickme");


// Logic of the code

button.addEventListener("click", () => {
  button.disabled = true;
  button.textContent = "Bingo!";
});

// let button = {disabled: true, id: "", hidden = false, value = "" }

window.addEventListener("DOMContentLoaded", () => {
  console.log("hello");
  const audio = new Audio("../sound.mp3");
  audio.play();
});
