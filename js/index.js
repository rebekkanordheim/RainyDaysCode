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

    function createProductsHTML(products) {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        createProductHTML(product)

    }
  }
  
  async function myApp() {
    const products = await getProducts();
    createProductsHTML(products);
  }

myApp();

