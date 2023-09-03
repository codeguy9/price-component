const toggle = document.querySelector(".toggle");

// I've used the querySelectorAll() method to select all elements with the "price1" and "price2" classes.
// This will return a node list of the elements.

const price1 = document.querySelectorAll(".price1");
const price2 = document.querySelectorAll(".price2");

toggle.addEventListener("click", () => {
  // toggle.classList.toggle("on");
  // if (toggle.classList.contains("on")) {
  // Instead of checking if the "on" class is contained, I've simplified it to toggle the "on" class itself.
  if (toggle.classList.toggle("on")) {
    // I've used the forEach() loop to iterate through all the elements returned and applied styles to each one.
    price1.forEach((price) => {
      price.style.display = "none";
    });
    price2.forEach((price) => {
      price.style.display = "block";
    });
  } else {
    price1.forEach((price) => {
      price.style.display = "block";
    });
    price2.forEach((price) => {
      price.style.display = "none";
    });
  }
});

// I've added this section at the top of the page for best practices since we usually declare variables at the beginning of every project before using them.

// const price1 = document.querySelector(".price1");
// const price2 = document.querySelector(".price2");

// I've commented out this block since we already have it, and we don't want to repeat ourselves.
// toggle.addEventListener("click", () => {
//   if (toggle.classList.contains("on")) {
//     price2.style.display = "block";
//     price1.style.display = "none";
//   }
// });
