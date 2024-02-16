const agifyApiUrl = "https://api.agify.io/";
const displayData = document.getElementById("your-age");
console.log(displayData);


const displayAge = (event) => {
  event.preventDefault();
  const firstName = document.getElementById("first-name").value;
  const agifyApiUrlGet = `https://api.agify.io?name=${firstName}`;
  // TODO: Display your age with an AJAX call instead of the console.log()
  fetch(agifyApiUrlGet).then(response => response.json()).then((data) => {
    console.log(data);
    displayData.innerHTML = `${data.age}`;
  });
};

const form = document.getElementById("fetch-age");
form.addEventListener("submit", displayAge);
