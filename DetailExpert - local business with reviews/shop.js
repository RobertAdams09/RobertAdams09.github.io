//variables 
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-container-center");
const navToggle = document.querySelector(".nav-toggle");
const navToggleContent = document.querySelector(".nav-toggle-content");
const shopBannerBtn = document.querySelector(".shop-banner-btn");

// Cart Items
let cart = [];
//Buttons 
let buttonsDOM = [];

// Getting products 
class Products {
    async getProducts() {
        try {
            let result = await fetch('products.json');
            let data = await result.json();
            let products = data.items;
            products = products.map(item => {
                const {title, price, size, carticon} = item.fields;
                const {id} = item.sys;
                const image = item.fields.image.fields.file.url;
                return {title, price, size, carticon, id, image}
            })
            return products
        } catch (error) {
            console.log(error);
        }
    }
}

// Display Products 
class UI {
    displayProducts(products) {
        let result = "";
        products.forEach(product => {
            result +=`
            <div class="product">
                <div class="image-text-container">
                    <img src=${product.image} alt="product picture" class="product-img">
                    <h3 class="product-name">${product.title}</h3>
                    <h3 class="product-size">${product.size}</h3>
                    <h3 class="product-price">${product.price}$</h3>
                </div>
                <div class="add-to-cart-container">
                    <button type="button" class="add-to-cart-btn" data-id=${product.id}>add to the cart<img class="add-to-cart-img" src=${product.carticon} alt="shopping cart picture"></button>
                </div>
            </div>
            `;
        });
        productsDOM.innerHTML = result;
    }
    getAddToTheCartButton(){
        const buttons = [...document.querySelectorAll(".add-to-cart-btn")];
        buttonsDOM = buttons;
        buttons.forEach(button => {
            let id = button.dataset.id;
            let inCart = cart.find(item => item.id === id);
            if (inCart) {
                button.innerText = "In Cart";
                button.disabled = true;
            }
                button.addEventListener("click",(event) => {
                    event.target.innerText = "In Cart";
                    event.target.disabled = true;
                    //Get product from Products
                    let cartItem = {...Storage.getProduct(id), amount:1};
                    //Add product to the Cart
                    cart = [...cart,cartItem];
                    //Save Cart in LocalStorage
                    Storage.saveCart(cart);
                    //Set Cart values
                    this.setCartValues(cart);
                    //Display Cart item
                    this.addCartItem(cartItem);
                    //Show the Cart
                    this.showCart();
                });
        });
    }
    setCartValues(cart){
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map(item => {
            tempTotal += item.price * item.amount;
            itemsTotal += item.amount;
        });
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
        cartItems.innerText = itemsTotal;
    }
    addCartItem(item){
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <img src=${item.image} alt="product image in cart">
            <div>
                <h4>${item.title}</h4>
                <h5>${item.size}</h5>
                <h5>${item.price}$</h5>
                <span class="remove-item" data-id=${item.id}>remove</span>
            </div>
            <div>
                <p class="chevron-up" data-id=${item.id}></p>
                <p class="item-amount">${item.amount}</p>
                <p class="chevron-down" data-id=${item.id}></p>
            </div>
        `;
        cartContent.appendChild(div);
    }
    showCart() {
        cartOverlay.classList.add("transparentBcg");
        cartDOM.classList.add("showCart");
    }
    setUpApp() {
        cart = Storage.getCart();
        this.setCartValues(cart);
        this.populateCart(cart);
        cartBtn.addEventListener("click", this.showCart);
        closeCartBtn.addEventListener("click", this.hideCart);
    }
    populateCart(cart) {
        cart.forEach(item => this.addCartItem(item));
    }
    hideCart() {
        cartOverlay.classList.remove("transparentBcg");
        cartDOM.classList.remove("showCart");
    }
    cartLogic() {
        // clear Cart Buttons
        clearCartBtn.addEventListener("click", ()=> {
            this.clearCart()
        });
        // Cart functionality 
        cartContent.addEventListener("click", event => {
            if (event.target.classList.contains("remove-item")) {
                let removeItem = event.target;
                let id = removeItem.dataset.id;
                cartContent.removeChild(removeItem.parentElement.parentElement);
                this.removeItem(id);
            } else if (event.target.classList.contains("chevron-up")) {
                let increaseAmount = event.target;
                let id = increaseAmount.dataset.id;
                let tempItem = cart.find(item => item.id === id);
                tempItem.amount = tempItem.amount +1;
                Storage.saveCart(cart);
                this.setCartValues(cart);
                increaseAmount.nextElementSibling.innerText = tempItem.amount;
            } else if (event.target.classList.contains("chevron-down")) {
                let decreaseAmount = event.target;
                let id = decreaseAmount.dataset.id;
                let tempItem = cart.find(item => item.id === id);
                tempItem.amount = tempItem.amount -1;
                if (tempItem.amount > 0) {
                    Storage.saveCart(cart);
                    this.setCartValues(cart);
                    decreaseAmount.previousElementSibling.innerText = tempItem.amount;
                } else {
                    cartContent.removeChild(decreaseAmount.parentElement.parentElement);
                    this.removeItem(id); 
                }
            }
        });
    }
    clearCart() {
        let cartItems = cart.map(item => item.id);
        cartItems.forEach(id => this.removeItem(id));
        console.log(cartContent.children);
        while(cartContent.children.length > 0) {
            cartContent.removeChild(cartContent.children[0]);
        }
        this.hideCart()
    }
    removeItem(id) {
        cart = cart.filter(item => item.id !== id);
        this.setCartValues(cart);
        Storage.saveCart(cart);
        let button = this.getSingleButton(id);
        button.disabled = false;
        button.innerHTML = `
        Add to the Cart <img class="add-to-cart-img" src="https://www.svgrepo.com/show/477550/shopping-cart-6.svg" alt="shopping cart picture">
        `;
    }
    getSingleButton(id) {
        return buttonsDOM.find(button => button.dataset.id === id);
    }
}

// Local Storage 
class Storage {
    static saveProducts(products){
        localStorage.setItem("products", JSON.stringify(products));
    }
    static getProduct(id){
        let products = JSON.parse(localStorage.getItem("products"));
        return products.find(product => product.id === id);
    }
    static saveCart(cart){
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    static getCart(){
        return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")):[] 
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();
    // Setup App 
    ui.setUpApp();
    // Get all Products
    products.getProducts().then(products => {
        ui.displayProducts(products);
        Storage.saveProducts(products);
    }).then(() => {
        ui.getAddToTheCartButton();
        ui.cartLogic();
    });
});



// Navigation Showning on Click - Burger 
const showNav = (item) => {
item.addEventListener("click", function() {
    navToggleContent.style.display = navToggleContent.style.display == "none" ? "flex": "none";
});
}; 
showNav(navToggle);

// Scrolling down to the Products Section of the Shop by clicking the Shop Now button 
shopBannerBtn.addEventListener("click", function() {
    document.querySelector(".products-container").scrollIntoView();
});