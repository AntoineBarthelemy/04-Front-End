import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["input", "button"];

  copy() {
    navigator.clipboard.writeText(this.inputTarget.value);
    this.buttonTarget.setAttribute("disabled", "");
    this.buttonTarget.innerText = "Copied!";
  }
}
