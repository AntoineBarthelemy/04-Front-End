// Todo: Use the Fork Api to get a filtered list of restaurants, depending on the category selected (and as a bonus, the location)

// Global variables

const searchForm = document.getElementById("searchForm");
let urlFork = "";
const listInput = document.querySelectorAll('input[type="radio"]');
const unorderedList = document.getElementById("restaurant-list");
const locationUser = document.getElementById("location");







// Todo: select the HTML elements you need




// Logic of the code





searchForm.addEventListener("submit", (e) => {
  // Todo: Find the category selected and build the URL you will send your request to
  e.preventDefault();

  listInput.forEach(element => {
    if (element.checked === true) {
      urlFork = `https://the-fork-api.students.lewagon.co/api/v1/restaurants?category=${element.value}&location=${locationUser.value}`;
      fetch(urlFork)
        .then(response => response.json())
        .then((data) => {
         for (const element of data){
            const nameAdressRestaurant = `${element.name} in ${element.address}`;
            unorderedList.insertAdjacentHTML("beforeend", `<li>${nameAdressRestaurant}</li>`)
          }

        });
    }
  });
});

// Call functions
