// Declaration of global variables

const batch = 1511; // change to your own batch id
const baseUrlGet = `https://wagon-chat.herokuapp.com/${batch}/messages`;
const form = document.querySelector("form");
const refreshButton = document.getElementById("refresh");
const displayData = document.querySelector(".list-unstyled");




// Logic of the code

form.addEventListener("submit", (e) => {
  console.log("helele");
  e.preventDefault();
  const message = {content: form[0].value, author: form[1].value};
  fetch(baseUrlGet, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message)
  })
  .then(response => response.json())
  .then((data) => {
    console.log(data);
  });
});

function refresh() {
  const now = new Date();


  fetch(baseUrlGet)
    .then((response) => response.json())
    .then((data) => {
      const messageBatch = data.messages;

      messageBatch.forEach(element => {
        const specificTime = new Date(element.created_at);
        const differenceInMilliseconds = now - specificTime;
        const differenceInMinutes = differenceInMilliseconds / (1000 * 60);
        // ------------------------------------------
        displayData.insertAdjacentHTML("afterbegin", `<li> ${element.content} (posted ${differenceInMinutes} ago) by ${element.author} </li>`);
      });
      // console.log(data.messages);
      // displayData.insertAdjacentHTML("afterbegin", `<li>${data}</li>`);
    });
};


setInterval(refresh, 1000);
// Call functions
