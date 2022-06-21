const products = [
    {
        productIMg: 'static/images/image-product-1-thumbnail.jpg',
        title: 'Fall Limited Edition Sneakers',
        price: 125
    },
];

const productPrice = products[0].price.toFixed(2);
const bar = document.getElementById('bar');
const overlay = document.getElementById('overlay');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');
const productImages = {
    1: 'static/images/image-product-1.jpg',
    2: 'static/images/image-product-2.jpg',
    3: 'static/images/image-product-3.jpg',
    4: 'static/images/image-product-4.jpg',
};

if(bar){
    bar.addEventListener('click', () =>{
        navbar.classList.add('active');
        overlay.classList.add('active');
    });
};

if(close){
    close.addEventListener('click', () =>{
        navbar.classList.remove('active');
        overlay.classList.remove('active');
    });
};

const cartShopItem = document.createElement("div")
const cartItems = document.getElementsByClassName("cart-content")[0]
const MainImg = document.getElementById("MainImg");
const smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function(){
    MainImg.src = smallImg[0].src;
};
smallImg[1].onclick = function(){
    MainImg.src = smallImg[1].src;
};
smallImg[2].onclick = function(){
    MainImg.src = smallImg[2].src;
};
smallImg[3].onclick = function(){
    MainImg.src = smallImg[3].src;
};

const openModal = () => {
    document.getElementById("myModal").style.display = "block";
};
  
const closeModal = () => {
    document.getElementById("myModal").style.display = "none";
};
  
let slideIndex = 1;
showSlides(slideIndex);
  
const plusSlides = (n, isMobile) => {
    slideIndex += n;
    showSlides(isMobile);
};
  
const currentSlide = (n) => {
    showSlides(slideIndex = n);
};
  
function showSlides (isMobile) {
    let mainImage, dots;
    if(isMobile){
        mainImage = document.querySelector("#mainImage img");
    } else {
        mainImage = document.querySelector("#lightboxMainImage img");
        dots = document.getElementsByClassName("demo");
    };

    if(slideIndex > 4) slideIndex = 1;
    if(slideIndex < 1) slideIndex = 4;
    mainImage.src = productImages[slideIndex];

    if(dots){
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", "");
        }
        dots[slideIndex-1].className += "active";
};
};

const productImage = document.querySelectorAll(".small-img-group img");
const productImageSlide = document.querySelector(".image-slider");
const productImg = document.querySelectorAll(".image-container img");
const productImgSlide = document.querySelector("#lightboxMainImage img");

let activeImageSlide = 0;
let activeImgSlide = 0;

productImage.forEach((item, _i) => {
    item.addEventListener('click', () => {
        productImage[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        activeImageSlide = _i;
    })
})

productImg.forEach((item, i) => {
    item.addEventListener('click', () => {
        productImg[activeImgSlide].classList.remove('active');
        item.classList.add('active');
        productImage[activeImageSlide].classList.remove('active');
        productImage[i].classList.add('active');
        productImgSlide.src = productImages[i + 1];
        activeImgSlide = i;
        activeImageSlide = i;
    })
})

document.querySelector('.minus-btn').setAttribute("disabled", "disabled");

let valueCount
document.querySelector(".plus-btn").addEventListener("click", function(){
    valueCount = document.getElementById("quantity").value;
    valueCount++;
    document.getElementById("quantity").value = valueCount;
    if(valueCount >0){
        document.querySelector(".minus-btn").removeAttribute("disabled");
        document.querySelector(".minus-btn").classList.remove("disabled");
    };
});

document.querySelector(".minus-btn").addEventListener("click", function(){
    valueCount = document.getElementById("quantity").value;
    valueCount--;
    document.getElementById("quantity").value = valueCount;
    if(valueCount === 1){
        document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
    }
});

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
};

let itemTotalPrice = 0;
let itemTotalQuantity = 0;

const addToCartButton = document.querySelector('.shopping button');
const shoppingCart = document.querySelector('.shopping-cart');
const cartContent = document.querySelector('.shopping-cart .cart-content');
const itemPrice = document.querySelector('h3.price');
const itemImg = document.querySelector('#MainImg');
const itemTitle = document.querySelector('h2.product-title');
const itemQuantity = document.querySelector('#quantity');
const checkoutButtonContainer = document.querySelector('.checkout-button-container');
const checkoutButton = document.querySelector('button.checkout');

checkoutButton.addEventListener('click', function(){
    alert('Your order is placed');
    emptyCart();
});

addToCartButton.addEventListener('click', function(){
    const itemImgPath = itemImg.src;
    const itemTitleText = itemTitle.textContent;
    const price = parseFloat(itemPrice.innerHTML.split(' ')[0].substring(1)).toFixed(2);
    itemTotalPrice += itemQuantity.value * price;
    itemTotalQuantity += parseInt(itemQuantity.value);

    cartContent.innerHTML = getCartItemHTML(itemImgPath, itemTitleText, price);
    checkoutButtonContainer.style.display = "block";

    const cartItemRemoveButton = document.querySelector('i.cart-item-remove-button');
    cartItemRemoveButton.addEventListener('click', function(){
        emptyCart();
    });
})

function emptyCart(){
    cartContent.innerHTML = `
            <p class="cart-is-empty">
                Your cart is empty
            </p>
        `;
    checkoutButtonContainer.style.display = "none";
    itemTotalPrice = 0;
    itemTotalQuantity = 0;
}

function getCartItemHTML(itemImgPath, itemTitle, itemInitialPrice){
    return `
        <div class="cart-shop-item">
            <img src="${itemImgPath}" alt="${itemTitle}">
            <div class="cart-item-title-prices">
                <div class="cart-item-title">${itemTitle}</div>
                <div class="cart-item-prices">
                    <span class="cart-item-initial-price">$${itemInitialPrice}</span>
                    <span>x</span>
                    <span>${itemTotalQuantity}</span>
                    <span class="cart-item-total-price">$${itemTotalPrice.toFixed(2)}</span>
                </div>
            </div>
            <div class="cart-item-remove-button-container">
                <i class="fa-solid fa-trash-can cart-item-remove-button"></i>
            </div>
        </div>
    `
};