//Create JavaScript to fetch an array of product data from WordPress API

async function getProducts() {
  try {
  const response = await fetch("http://cmscarn.local/wp-json/wc/store/products");
  return await response.json();
  } catch (error) {
    console.log(error);
  }
}
async function myApp() {
  const products = await getProducts();
  console.log(products);
}
myApp();

//Create JavaScript functionality to fetch a single product’s data from WordPress API Using its ID
async function getProductById(id) {
  try {
  const response = await fetch(`http://cmscarn.local/wp-json/wc/store/products/${id}`);
  return await response.json();
  } catch (error) {
    console.log(error);
  }
}

function createProductHTML(product) {
  const container = document.querySelector(".container");
        
  const productContainer = document.createElement("div");
  productContainer.classList.add("product");
  productContainer.id = product.id;

  const title = document.createElement("h2");
  title.innerText = product.name;
  productContainer.append(title);

  for(let i = 0; i < product.images.length; i++) {
    const imgData = product.images[i];
    const img = document.createElement("img");
    img.src = imgData.src;
    img.alt = imgData.alt;
    productContainer.append(img);
  }
  container.append(productContainer);
}

async function OneProductPage() {
  const productId = 25;
  const product = await getProductById(productId);
  createProductHTML(product);
}
OneProductPage();

/// Create JavaScript functionality to render a grid of product data in HTML as thumbnails
  async function getProducts() {
    try{
    const response = await fetch(`http://cmscarn.local/wp-json/wc/store/products`);
    /* to display the featured product, you will have to add ?featured=true to the all products endpoint like this: */
    /* const response = await fetch("http://cmscarn.local/wp-json/wc/store/products?featured=true"); */
    return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
  
  function createProductHTML(product) {
    const container = document.querySelector(".container2");
  
    const productContainer = document.createElement("div");
    productContainer.classList.add("product");
    productContainer.id = product.id;
  
    const title = document.createElement("h2");
    title.innerText = product.name;
    productContainer.append(title);
  
    for (let i = 0; i < product.images.length; i++) {
      const imgData = product.images[i];
      const img = document.createElement("img");
      img.src = imgData.src;
      img.alt = imgData.alt;
      productContainer.append(img);
    }
    container.append(productContainer);
  }
  
  function createProductsHTML(products) {
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      createProductHTML(product);
    }
  }
  
  async function productPage() {
    const products = await getProducts();
    createProductsHTML(products);
  }
  
  productPage();  