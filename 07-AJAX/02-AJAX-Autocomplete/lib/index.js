// TODO: Autocomplete the input with AJAX calls.

// Global variables
const inputUser = document.getElementById("search");
const removeData = document.querySelectorAll("#results li");
const displayData = document.getElementById("results");

inputUser.addEventListener("input", () => {
  removeData.forEach(element => {
    element.remove();
  });
  fetch(
    `https://wagon-dictionary.herokuapp.com/autocomplete/${inputUser.value}`
  )
    .then(response => response.json())
    .then((data) => {
      let dataWord = data.words;
      dataWord.forEach(element => {
        displayData.insertAdjacentHTML("afterbegin", `<li>${element}</li>`);
      });
    });
});


// Logic of the code
// const inptUser = () =>{
//   fetch(`https://wagon-dictionary.herokuapp.com/autocomplete/${inputUser.value}`).then(response => response.json()).then((data) => {
//   console.log(data);
// });
// };

// Call functions
