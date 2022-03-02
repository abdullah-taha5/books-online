let productsInCart = localStorage.getItem("productsInCart");
let productsDom = document.querySelector(".products");


if (productsInCart) {
    let items = JSON.parse(productsInCart);
    drawCartProductsUi(items);
}


function drawCartProductsUi(products) {
    let productsUi = products.map( (item) => {
        return `
        <div class="product-item">
        <img src="${item.image}" alt="headphone" class="product-item-img">
        <div class="product-item-desc">
            <h2>${item.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div class="product-item-actions">
                <button class="add-to-cart" onclick="removeItemFromCart(${item.id})">Remove From Cart</button>
                <i class="favorite far fa-heart"></i>
            </div>
        </div>
        </div>
        `;
    });
    productsDom.innerHTML = productsUi;
};
drawProductsUi();

function removeItemFromCart(id) {
    if (productsInCart) {
        let items = JSON.parse(productsInCart);

      let filteredItems =  items.filter((item) => item.id !== id);
      drawCartProductsUi(filteredItems);
        localStorage.setItem("productsInCart", JSON.stringify(filteredItems));
    }
}
