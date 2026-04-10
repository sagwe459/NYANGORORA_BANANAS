document.addEventListener("DOMContentLoaded", () => {
  const starsContainers = document.querySelectorAll(".stars");

  starsContainers.forEach(container => {
    const rating = container.getAttribute("data-rating");
    let starsHTML = "";

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        starsHTML += '<i class="fas fa-star"></i>'; // full star
      } else {
        starsHTML += '<i class="far fa-star"></i>'; // empty star
      }
    }

    container.innerHTML = starsHTML;
  });
});