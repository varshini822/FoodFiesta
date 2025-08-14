let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("total");
  cartList.innerHTML = "";
  total = 0;

  cart.forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = `${entry.item} - $${entry.price.toFixed(2)}`;
    cartList.appendChild(li);
    total += entry.price;
  });

  totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}
