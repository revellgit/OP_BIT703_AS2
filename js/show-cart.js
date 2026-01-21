const productGrid = document.getElementById("productGrid");

myCart.forEach(product => {
    const card = document.createElement("article");
    card.classList.add("product-card");

    card.innerHTML = `
  <a href="product.html?id=${product.id}" class="product-card">
    <img src="${product.image}" alt="${product.name}" class="product-img">
    <div class="product-info">
      <h3 class="product-name">${product.name}</h3>
      <p class="product-description">${product.shortDescription}</p>
      <span class="price">$${product.price.toFixed(2)}</span>      
    </div>
    </a>
  `;

    productGrid.appendChild(card);

});

function calculateCartTotals(items) {
    // subtotal = sum of price × qty
    const subtotal = items.reduce((sum, item) => {
        // return sum + item.price * item.qty;
        return sum + item.price;
    }, 0);

    const taxRate = 0.15;        // e.g. NZ GST 15%
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    return { subtotal, tax, total };
}

const totals = calculateCartTotals(myCart);
let shipping = 20;

document.getElementById("subtotal").textContent = totals.subtotal.toFixed(2);
document.getElementById("tax").textContent = totals.tax.toFixed(2);
document.getElementById("total").textContent = totals.total.toFixed(2);

if (totals.subtotal >= 600) {
    shipping = 0;
    document.getElementById("shipping-value").innerText = "FREE";
} else {
    document.getElementById("shipping-value").innerText = `$${shipping}`;
}