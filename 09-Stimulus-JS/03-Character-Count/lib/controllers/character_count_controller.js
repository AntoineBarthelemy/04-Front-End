import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["textarea", "displaytextarea"];

  updateCounter(e) {
    if (e.target.value.length === 0) {
      this.displaytextareaTarget.textContent = "";
    } else if (e.target.value.length >= 140) {
      this.displaytextareaTarget.textContent = `Number of charater exceeded by ${e.target.value.length} characters.`;
      this.displaytextareaTarget.style.backgroundColor = "red";
    } else {
      this.displaytextareaTarget.textContent = `${e.target.value.length} characters`;
      this.displaytextareaTarget.style.backgroundColor = "";
    }
  }
}
