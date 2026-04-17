const cards = document.querySelectorAll(".drum-card");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    card.textContent = "Drum Sound " + (index + 1);
  });
});
