// script.js

// Wait until the page loads
document.addEventListener("DOMContentLoaded", () => {
  let cartCount = 0;
  const cartDisplay = document.getElementById("cart-count");
  const addButtons = document.querySelectorAll(".add-to-cart");

  addButtons.forEach(button => {
    button.addEventListener("click", () => {
      cartCount++;
      cartDisplay.textContent = cartCount;
      alert("Item added to cart!");
    });
  });
});
