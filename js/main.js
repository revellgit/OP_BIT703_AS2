const productGrid = document.getElementById("productGrid");

products.forEach(product => {
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

