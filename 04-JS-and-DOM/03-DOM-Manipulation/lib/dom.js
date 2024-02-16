/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */
/* eslint-disable import/extensions */
import runChallenges from "../spec/examiner.js";

// INSTRUCTIONS - PLEASE READ!!
// Here are some challenges. Solve them from top to bottom

// **Each time** you complete a challenge, please commit and push!
// This is a good practice. Each time you make some progress in software
// development, you want to save a snapshot.

// Ex 1. Read what's written in the email input
//       Make the function getEmail() return it
let email = document.querySelector("input");
let mailMessage = document.getElementById("email-hint");
const headClass = document.querySelector("thead > tr");
const tableTr = document.querySelectorAll("tr");
const tableTbody = document.querySelector("tbody");
const firstTr = document.querySelector("tbody tr:first-child");
const label = document.querySelector("label");

// Then select the last <td> within that <tr>
const lastTd = firstTr.querySelector("td:last-child").textContent;

// console.log(lastTd, typeof lastTd);

const getEmail = () => {
  // TODO: return the email
  return email.value;
};

// /!\ DO NOT CHANGE THIS LINE - TEST PURPOSES
const borisesEmail = getEmail();

// Ex 2. Change the content of the email input by writing your own email address
email.value = "antoinebarthelemy60@gmail.com";

// Ex 3. Replace the email hint (next to the input) with 'This is my email now'
//       The text should be emphasized using a <strong> tag

mailMessage.innerHTML = "<strong>This is my email now</strong>";

// Ex 4. Add the .blue CSS class to the tr element inside of the table header (<thead>)
headClass.classList.add("blue");

// Ex 5. Count the number of table body rows there are
//       Make the function teamCount() return it

// console.log(tableTbody.length);
const teamCount = () => {
  // TODO: return the number of teams
  return tableTr.length - 1;
};

// /!\ DO NOT CHANGE THIS LINE - TEST PURPOSES
const teamCountBeforeAddition = teamCount();

// Ex 6. Say there is a 15th team added to the table.
//       Add a row at the bottom, this new team should have zero points.

tableTbody.insertAdjacentHTML(
  "beforeend",
  "<tr><td>15</td><td>The Worst Team</td><td>0</td></tr>"
);

// Ex 7. Write some code to get the points for the first team
//       (Rugby Club Toulonnais)
const firstTeamPoints = () => {
  // TODO: return the points
  return parseInt(lastTd, 10);
};

// /!\ DO NOT CHANGE THIS LINE - TEST PURPOSES
const points = firstTeamPoints();

// Ex 8. Change the background color of the tr element inside of the table header <thead> to #ddf4ff

headClass.style.backgroundColor = "#ddf4ff";

// Ex 9. Remove the "Email:" label from the DOM

label.remove();

// Checking exercise answers. DO NOT MODIFY THIS LINE
runChallenges(borisesEmail, teamCountBeforeAddition, points);
