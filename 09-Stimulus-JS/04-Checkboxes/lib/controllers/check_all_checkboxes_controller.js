import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["check"];

  checkOrNot(e) {
      this.checkTargets.forEach((element) => {
        element.checked = e.target.checked;
      });
    }
}
