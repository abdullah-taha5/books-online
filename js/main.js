
let productsDom = document.querySelector(".products");

// Display Products
let drawProductsUi;
(drawProductsUi = function (productsData) {
    let productsUI = productsData.map((item) => {
        return `
            <div class="product-item" data-aos="fade-right">
            <img src="${item.image}" alt="">
            <div class="product-item-desc">
            <h2>${item.title}</h2>
            </div>
            <button class="add-to-cart")"><a href="${username ? item.link : '../login.html'}" target="_blank">Download</a></button>
            </div>
            </div>
        `;

    });
    productsDom.innerHTML = productsUI.join("");
})(JSON.parse(localStorage.getItem("products")));


// Search
let inputSearch = document.querySelector("#search");
let cursorClick = document.querySelector(".search img");
inputSearch.addEventListener("click", () => {
    cursorClick.remove();
});
inputSearch.addEventListener("keyup", (e) => {
    search(e.target.value.trim().toUpperCase(), JSON.parse(localStorage.getItem("products")));
});
function search(title, myArray) {
    let arr = myArray.filter((item) => item.title.includes(title));
    drawProductsUi(arr);
}
