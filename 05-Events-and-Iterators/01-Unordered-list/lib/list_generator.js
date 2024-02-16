/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */
/* eslint-disable import/extensions */

// Global variables


import runChallenges from "../spec/list_generator_examiner.js";




const listOfCourses = document.getElementById("list");






const listItem = (content, lol) => {
  // TODO: return the proper <li> HTML tag with its content (as a string)

  const newElement = document.createElement("li");
  newElement.className = "list-group-item";
  newElement.textContent = `${content}`;
  return newElement.outerHTML;
};

const unorderedList = (items) => {
  // TODO: return the proper <ul> markup (as a string)
  const newElement2 = document.createElement("ul");
  newElement2.className = "list-group";
  for (let i = 0; i < items.length; i += 1) {
    newElement2.insertAdjacentHTML("beforeend", listItem(items[i]));
  }
  return newElement2.outerHTML;
};

// Do not remove these lines:
if (typeof window === "object") {
  document.addEventListener("DOMContentLoaded", () => {
    // TODO: call unorderedList() passing the right element
    // TODO: display the list in the browser
    const gloceries = unorderedList(["hello", "coucou"]);
    listOfCourses.innerHTML += gloceries;
  });
}

runChallenges(listItem, unorderedList); // Do not remove.
export { listItem, unorderedList };

// Call functions
