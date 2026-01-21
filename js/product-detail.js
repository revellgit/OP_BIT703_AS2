document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const productId = Number(params.get("id"));

    if (!productId) return; // safety check

    const product = products.find(p => p.id === productId);

    document.getElementById("product-image").src = product.image;
    document.getElementById("product-image").alt = product.name;

    document.getElementById("product-name").textContent = product.name;

    document.getElementById("product-price").textContent = `$${product.price.toFixed(2)}`;
    document.getElementById("product-rating").textContent =
        "★".repeat(product.rating) + "☆".repeat(5 - product.rating);
    document.getElementById("product-description").textContent = product.longDescription;

});

const productGrid = document.getElementById("productGrid");

products.slice(0, 3).forEach(product => {
    const card = document.createElement("article");
    card.classList.add("product-card");

    card.innerHTML = `
  <a href="product.html?id=${product.id}" class="product-card">
    <img src="${product.image}" alt="${product.name}" class="product-img">
    <div class="product-info">
      <h3 class="product-name">${product.name}</h3>
      <span class="rating">
  ${"★".repeat(Math.round(product.rating)) + "☆".repeat(5 - Math.round(product.rating))}
</span>

      <span class="price">$${product.price.toFixed(2)}</span>      
    </div>
    </a>
  `;

    productGrid.appendChild(card);
});