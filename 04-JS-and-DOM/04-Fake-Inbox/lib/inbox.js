/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */
/* eslint-disable import/extensions */

// Declaration of global variables
// const kdk = document.getElementById("inbox");

// console.log(kdk);

const newDiv = document.createElement('div');



// console.log(newMail);

import runChallenges from "../spec/inbox_examiner.js";

const hasNewMessage = () => {
  if (Math.random() < 0.2) {
    return true;
  }
};

const newMessage = () => {
  // TODO: return a random message as an object with two keys, subject and sender
  let sender = ["antoine60@gmail.com", "alix@magiquealix.com", "letissier.catherine@gmail.com", "v.barth21@orange.fr"];
  let subject = ["Welcome to github", "Javascript", "Python"];
  const senderIndex = Math.floor(Math.random() * sender.length);
  const subjectIndex = Math.floor(Math.random() * subject.length);

  let emailInfo = {
    sender: sender[senderIndex],
    subject: subject[subjectIndex]
  }
  return emailInfo;
};


let emailInfo = newMessage();


const appendMessageToDom = (message) => {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
  const newMail = document.querySelector("#inbox");
  console.log(newMail);

  newMail.insertAdjacentHTML('afterbegin', `<div class="row message read">
  <div class="col-3">${message.sender}</div>
  <div class="col-9">${message.subject}</div>
</div>`);
};

let result = appendMessageToDom(emailInfo);

const refresh = () => {
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.

  if (hasNewMessage) {
    appendMessageToDom(emailInfo);
  }
};

// Do not remove these lines.
if (typeof window === "object") {
  document.addEventListener("DOMContentLoaded", () => {
    setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
  });
}

// Checking exercise answers. DO NOT MODIFY THIS LINE.
runChallenges(hasNewMessage, newMessage);
export { hasNewMessage, newMessage };
