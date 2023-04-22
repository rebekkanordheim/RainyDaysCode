//Create JavaScript to fetch an array of product data from WordPress API
  async function getProducts() {
    const response = await fetch("http://cmscarn.local/wp-json/wc/store/products");
    return await response.json();
  }
    function createProductHTML(product) {
        const container = document.querySelector(".container");
        
        const productContainer = document.createElement("div");
        productContainer.classList.add("product");
        productContainer.id = product.id;
    }

    function createProductsHTML(products) {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        createProductHTML(product)

    }
  }
  
  async function myApp() {
    const products = await getProducts();
    console.log(products);
  }

myApp();

