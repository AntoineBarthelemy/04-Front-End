import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  connect() {
    console.log("hello");
  }

  disable(e) {
    e.preventDefault();
    const audio = new Audio("./sound.mp3");
    audio.play();
    // console.log(this.element, e, typeof this, typeof e);
    this.element.innerText = "Bingo!";
    this.element.setAttribute("disabled", "");
  }
}
