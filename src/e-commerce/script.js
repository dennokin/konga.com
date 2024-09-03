const products = [
  {
    id: 1,
    title: "Wireless Earbuds",
    price: 29.99,
    image: "https://via.placeholder.com/150?text=Wireless+Earbuds",
  },
  {
    id: 2,
    title: "Smartphone Case",
    price: 15.99,
    image: "https://via.placeholder.com/150?text=Smartphone+Case",
  },
  {
    id: 3,
    title: "Bluetooth Speaker",
    price: 49.99,
    image: "https://via.placeholder.com/150?text=Bluetooth+Speaker",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    price: 79.99,
    image: "https://via.placeholder.com/150?text=Fitness+Tracker",
  },
  {
    id: 5,
    title: "Laptop Stand",
    price: 19.99,
    image: "https://via.placeholder.com/150?text=Laptop+Stand",
  },
];


async function fetchProducts() {
  const spinner = document.getElementById("spinner");
  const productList = document.getElementById("product-list");

  // Show spinner and hide the product list
  spinner.style.display = "block";
  productList.style.display = "none";

  try {
    const response = await fetch("productss");
    // const products = [
    //   {
    //     id: 1,
    //     title: "Product 1",
    //     price: 9.99,
    //     image: "https://via.placeholder.com/150",
    //   },
    //   {
    //     id: 2,
    //     title: "Product 2",
    //     price: 9.99,
    //     image: "https://via.placeholder.com/150",
    //   },
    //   {
    //     id: 3,
    //     title: "Product 3",
    //     price: 9.99,
    //     image: "https://via.placeholder.com/150",
    //   },
    // ];

    products.forEach((product) => {
      const productItem = document.createElement("div");
      productItem.className = "product-item";
      productItem.innerHTML = `
              <img src="${product.image}" alt="${product.title}">
              <h3>${product.title}</h3>
              <p>$${product.price}</p>
              <a href="product.html?id=${product.id}" class="btn">View Details</a>
          `;
      productList.appendChild(productItem);
    });

    // Hide spinner and show the product list
    spinner.style.display = "none";
    productList.style.display = "grid";
  } catch (error) {
    console.error("Error fetching products:", error);
    spinner.style.display = "none";
    productList.innerHTML =
      "<p>Error loading products. Please try again later.</p>";
    productList.style.display = "block";
  }
}

async function fetchProductDetails() {
  const spinner = document.getElementById("spinner");
  const productDetails = document.getElementById("product-details");
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  // http://127.0.0.1:5500/src/e-commerce/product.html?id=2

  // Show spinner and hide the product details
  spinner.style.display = "block";
  productDetails.style.display = "none";

  try {
    // const response = await fetch(
    //   `https://fakestoreapi.com/products/${productId}`
    // );

    // const product = await response.json();
    const product = products.find(
      (product) => product.id === Number(productId)
    );

    productDetails.innerHTML = `
          <img src="${product.image}" alt="${product.title}" class="detail-image">
          <div class="detail-content">
              <h2>${product.title}</h2>
              <p>${product.description}</p>
              <p><strong>Price: </strong>$${product.price}</p>
              <a href="index.html" class="btn">Back to Products</a>
          </div>
      `;

    // Hide spinner and show the product details
    spinner.style.display = "none";
    productDetails.style.display = "flex";
  } catch (error) {
    console.error("Error fetching product details:", error);
    spinner.style.display = "none";
    productDetails.innerHTML =
      "<p>Error loading product details. Please try again later.</p>";
    productDetails.style.display = "block";
  }
}

if (document.getElementById("product-list")) {
  fetchProducts();
} else if (document.getElementById("product-details")) {
  fetchProductDetails();
}
