// Example products array
const products = [
  { id: 1, name: "Carrots", price: 35.00 },  // Vegetables
  { id: 2, name: "Spinach", price: 20.00 },
  { id: 3, name: "Tomatoes", price: 30.00 },
  { id: 4, name: "Fresh Milk", price: 70.00 }, // Milk Products
  { id: 5, name: "Butter", price: 300.00 },
  { id: 6, name: "Cheese", price: 200.00 },
  { id: 7, name: "Apples", price: 100.00 }, // Fruits
  { id: 8, name: "Bananas", price: 60.00 },
  { id: 9, name: "Oranges", price: 30.00 },
  // Add other products here as needed
];

// Initialize an empty cart
let cart = [];

// Add product to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) {
    console.error("Product not found!");
    return;
  }

  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCartDisplay();
}

// Remove product from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartDisplay();
}

// Update cart display in HTML
function updateCartDisplay() {
  const cartItemsElement = document.getElementById("cart-items");
  cartItemsElement.innerHTML = '';

  let totalPrice = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;

    const row = `
      <tr>
        <td>${item.name}</td>
        <td>${item.price.toFixed(2)} Rs</td>
        <td>${item.quantity}</td>
        <td>${itemTotal.toFixed(2)} Rs</td>
        <td><button onclick="removeFromCart(${item.id})">Remove</button></td>
      </tr>
    `;
    cartItemsElement.innerHTML += row;
  });

  document.getElementById("cart-total-price").innerText = totalPrice.toFixed(2);
}
