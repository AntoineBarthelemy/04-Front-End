// TODO: Create a function to get the coordinates from an address and display a map with a marker on it

// Declaration of Global variables
const userInput = document.querySelector('input[type="text"]');
const form = document.querySelector("form");

const coordinates = document.querySelector(".lead");
const displayMap = document.getElementById("map");

let sizeMap = `${displayMap.style.width.replace("px", "")}x${displayMap.style.height.replace("px", "")}`;

console.log(sizeMap);

const showMap = (userInput) => {
  // TODO: Construct the URL (with apiKey & userInput) and make the fetch request to the mapbox API
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${userInput.value}.json?access_token=pk.eyJ1IjoiYW50b2luZWJhcnRoZWxlbXkiLCJhIjoiY2xzYnZrcGQxMGVoZzJpbzZvamhnd2p5OCJ9.HqsqdP-a5WNw5VAPdDXCNA`;

  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const long = data.features[0].geometry.coordinates[0];

    const lat = data.features[0].geometry.coordinates[1];

      const dataLocation = `${long},${lat}`;
      coordinates.innerText = dataLocation;
      console.log(dataLocation);

      // - Extract the coordinates from the parsed JSON response (lang, lat)
      // - Display the coordinates in the element where the coordinates will be displayed
      // - Create a map using the Mapbox API and the coordinates
      displayMap.innerHTML = `<img src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${dataLocation},0,0,0/${sizeMap}?access_token=pk.eyJ1IjoiYW50b2luZWJhcnRoZWxlbXkiLCJhIjoiY2xzYnZrcGQxMGVoZzJpbzZvamhnd2p5OCJ9.HqsqdP-a5WNw5VAPdDXCNA" />`;

      // <img
      //   id="map"
      //   src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/2.3381,48.8693,10.45,0,0/600x1000?access_token=pk.eyJ1IjoiYW50b2luZWJhcnRoZWxlbXkiLCJhIjoiY2xzYnZrcGQxMGVoZzJpbzZvamhnd2p5OCJ9.HqsqdP-a5WNw5VAPdDXCNA"
      // />
      // - Add a marker to the map at the coordinates
    });
};

form.addEventListener("submit", (e) => {
  let user = userInput.value;
  e.preventDefault();
  showMap(user);
});
