// Declaration of global variables
const button = document.querySelector(".btn");


const displayAlertOnButtonClick = () => {
  // TODO: Select the big green button
  // TODO: Bind the `click` event to the button
  // TODO: On click, display `Thank you!` in a JavaScript alert!
  button.addEventListener("click", () => {
    window.alert("Thank you!");
  });
};


// Call functions

displayAlertOnButtonClick(); // Do not remove!
