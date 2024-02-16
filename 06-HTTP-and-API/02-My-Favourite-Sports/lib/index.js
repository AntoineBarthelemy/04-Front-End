// TODO: write your code here!

const cards = document.querySelectorAll(".clickable");

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});
