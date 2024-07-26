// Define the URL of the API
const apiUrl = "https://fakestoreapi.com/products?limit=10";

// // Function to create and populate a product card
function displayProductCard(product) {
  const productContainer = document.getElementById("product-container");

  const productHtml = `<div id="product-container" class="products">
    <a href="/product/${product.id}" class="product">
      <img src=${product.image} alt="" class="product_img">
      <h1 class="product_title">${product.title}</h1>
    </a>
  </div>`;

  productContainer.insertAdjacentHTML("beforeend", productHtml);
}

// Function to fetch products from the API
async function fetchProducts() {
  try {
    const res = await fetch(apiUrl);

    const products = await res.json();
    console.log(products);

    const productById = products.find((product) => product.id === 5);

    // console.log(productById);

    products.map((product) => displayProductCard(product));
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

// Fetching and displaying the products when the script loads
fetchProducts();

// // Function to create and populate a product card
// function displayProductCard(product) {
//   const productContainer = document.getElementById("product-container");
//   const productHtml = `
//         <div class="imgBox">
//           <img src="${product.image}" alt="${product.title}" class="mouse">
//         </div>

//         <div class="contentBox">
//             <h3>${product.title}5</h3>
//             <h2 class="price">$ ${product.price.toFixed(2)}</small></h2>
//             <a href="#" class="buy">Buy Now</a>
//         </div>
//     </div>
//     `;
//   productContainer.insertAdjacentHTML("beforeend", productHtml);
// }

// // Fetch and display the products when the script loads
// fetchProducts();

// // Four ways of declaring a variable:

// // Automatically-----------
// moses = "";

// // Using var tag;
// var denis = "6";

// // using Let tag;
// // let denis = moses;

// // Using Const ----
// const dan = denis;
// console.log(dan);

// y = 2;
// z = x + y;

// var x = 1;
// var y = 2;
// var z = x - y;

// let x = 1;
// let y = 2;
// let z = x * y;

// const x = 1;
// const y = 2;
// const z = x / y;

// const price_one = "$250";
// const price_two = "$1000";

// let total_price = price_one + price_two;

// const html_class = [
//   {
//     studentId: "1",
//     studentName: "Moses",
//   },
//   {
//     studentId: "2",
//     studentName: "Denis",
//   },
// ];

// let girlfriend = "Kirabo";

// // totalPrice --- camelCasing
// // TotalPrice --- camelCasing
// // total_price --- underscore
// // TOTAL_PRICE --- upperCaseSnaking

// Boolean(10 != 9);
// Boolean("Boy" == "boy"); // not strict
// Boolean("Boy" === "boy"); // super- strict

// // console.log(Boolean);

// Define the function in the global scope
// Sample products array

// const products = [
//   { id: "1", name: "Eggs" },
//   { id: "2", name: "Email" },
//   { id: "3", name: "Fast" },
//   { id: "4", name: "Hello" },
//   { id: "5", name: "Man" },
// ];

// function displayProductCard(product) {
//   const productContainer = document.getElementById("product-container");
//   const productHtml = `
//           <div class="contentBox">
//               <h3>${product.name}5</h3>
//               <a href="#" class="buy">Buy Now</a>
//           </div>
//       `;
//   productContainer.insertAdjacentHTML("beforeend", productHtml);
// }

// function myFunction() {
//   // console.log("Function executed");
//   const input = document.getElementById("searchInput");
//   // console.log(input.value);

//   const searchQuery = input.value.toLowerCase();
//   console.log(searchQuery);

//   // const filteredProducts = products.filter((product) => {
//   //   return product.name.toLowerCase().includes(searchQuery);
//   // });

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery)
//   );

//   console.log(filteredProducts);

//   filteredProducts.map((product) => {
//     return displayProductCard(product);
//   });
// }

// // search-query
// // Function to get query parameter from URL
// function getQueryParam(param) {
//   const urlParams = new URLSearchParams(window.location.search);
//   return urlParams.get(param);
// }

// // Get the search query from the URL
// const searchQuery = getQueryParam("query");

// if (searchQuery) {
//   // Filter products based on the search query
//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Display the filtered products
//   const resultsList = document.getElementById("resultsList");
//   filteredProducts.forEach((product) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = product.name;
//     resultsList.appendChild(listItem);
//   });
// } else {
//   // Display a message if no search query is provided
//   const resultsList = document.getElementById("resultsList");
//   const listItem = document.createElement("li");
//   listItem.textContent = "No search query provided.";
//   resultsList.appendChild(listItem);
// }

// Create an array of three different fruits. Declare a variable using var to store the length of the array and log it to the console.

// const fruits = ["mangoes", "avocado", "pine-apple", "sugarcane"];

// var lengthOfFruits = fruits.length;

// console.log(fruits[1], fruits[3]);

// // Fruits One is avocado and Fruit Two is sugarcane
// console.log(`Fruit One is: ${fruits[0]} and fruit Two is: ${fruits[1]}`);

// Create a constant object representing a student with properties id and name. Add a new property grade to the object and log the entire object to the console.

// const student = {
//   id: 1,
//   name: "Denis",
//   grade: "A+",
// };

// console.log(student);

// Create a function that takes two numbers as arguments and returns their sum. Declare the arguments using let and const. Call the function and log the result.

// function sum(a, b) {
//   // your code here
// }

// function arguments(a, b) {
//   let num1 = a;
//   const numb2 = b;
//   return num1 + numb2;
// }

// const results = arguments(12, 2);

// console.log(`Final result: ${results}`);

// Write a code snippet that converts a string representation of a number into an actual number and adds 10 to it. Log the result to the console.
// let strNum = "20";
// Convert strNum to a number and add 10

// let strNum = "20";
// let num = Number(strNum);

// const results2 = num + 10;

// console.log(`Final results for question 4: ${results2}`);

// Create a variable using var to store a boolean value indicating whether you are a student. Write an if statement that logs "Student" if the value is true, and "Not a student" if the value is false.

// var student2 = false;
// const studentName = "DENIS";

// if (student2 && !studentName) {
//   console.log("Student");
// } else {
//   console.log("Not a student");
// }

// const lowerCasedStudentName = studentName.toLowerCase();

// console.log(lowerCasedStudentName);

// if (!student2 && studentName == lowerCasedStudentName) {
//   console.log("Student");
// } else {
//   console.log("Not a student");
// }

// Write a code snippet to check if a given number is even or odd. Declare the number using let and log the result.
// Check if number is even or odd

// let number = 4;

// if (number % 2 === 0) {
//   console.log("Number is even");
// } else {
//   console.log("Number is odd");
// }

// 10. Create an array of three numbers. Calculate the sum of the numbers using a for loop and log the result to the console.
// let numbers = [1, 2, 3];
// Calculate the sum using a for loop

// let numbers = [3, 1, 8];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// i = 0; // sum becomes 0 + 3 which i 3

// i = 1; // sum becomes 3 + 1 which i 4

// i = 2; // sum becomes 4 + 8 which i 12

// console.log(sum);

// let numbers = [3, 1, 8];
// let sum = 5;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// i = 0; // sum becomes 5 + 3 which i 8

// i = 1; // sum becomes 8 + 1 which i 9

// i = 2; // sum becomes 9 + 8 which i 17

// console.log(sum);
