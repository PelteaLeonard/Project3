const bar = document.getElementById('bar');
const navs = document.getElementById('navbar');
const close = document.getElementById('close');
const productImages = {
    1: 'static/images/image-product-1.jpg',
    2: 'static/images/image-product-2.jpg',
    3: 'static/images/image-product-3.jpg',
    4: 'static/images/image-product-4.jpg',
};

if(bar){
    bar.addEventListener('click', () =>{
        navs.classList.add('active');
    });
};

if(close){
    close.addEventListener('click', () =>{
        navs.classList.remove('active');
    });
};

const MainImg = document.getElementById("MainImg");
const smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src;
};
smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
};
smallimg[2].onclick = function(){
    MainImg.src = smallimg[2].src;
};
smallimg[3].onclick = function(){
    MainImg.src = smallimg[3].src;
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

let activeImageSlide = 0;

productImage.forEach((item, i) => {
    item.addEventListener('click', () => {
        productImage[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        productImageSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i;
    })
})

const productImg = document.querySelectorAll(".image-container img");
const productImgSlide = document.querySelector(".image-slide");

let activeImgSlide = 0;

productImg.forEach((item, i) => {
    item.addEventListener('click', () => {
        productImg[activeImgSlide].classList.remove('active');
        item.classList.add('active');
        productImgSlide.style.backgroundImage = `url('${item.src}')`;
        activeImgSlide = i;
    })
})



const shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
};

document.querySelector('.minus-btn').setAttribute("disabled", "disabled");

var valueCount
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
    if(valueCount ==0){
        document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
    }
});

if(document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready(){
    var removeCartButtons = document.getElementsByClassName('remove-item')
    console.log(removeCartButtons)
    for ( var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener("click", removeCartItem)
    }
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    var addCart = document.getElementsByClassName('add-cart');
    for (var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
    document.getElementsByClassName("btn checkout")[0].addEventListener("click", checkoutButtonClicked);
}

function checkoutButtonClicked(){
    alert('Your Order is placed')
    var cartContent = document.getElementsByClassName('cart-content')[0]
    while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
    updatetotal();
}


function removeCartItem(event) {
    alert('Are you sure that you want to delete this Item?')
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updatetotal();
}

function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productIMg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productIMg);
    updatetotal();
}

function addProductToCart(title, price, productIMg){
    var cartShopItem = document.createElement("div")
    cartShopItem.classList.add('cart-item')
    var cartItems = document.getElementsByClassName("cart-content")[0]
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title")
    for(var i = 0; i < cartItemsNames; i++){
        return;
    }
}

var cartItemContent =`
                        <img src="static/images/image-product-1-thumbnail.jpg" alt="Product 1">
                        <div class="cart-product-title">Fall Limited Edition Sneakers</div>
                        <div class="cart-price">$125.00</div>
                        <h6>X</h6>
                        <input type="number" value="1" class="cart-quantity">
                        <div class="total-price">$125.00</div>
                        <i class="fa-solid fa-trash-can remove-item"></i>
                    `;
cartShopItem.innerHTML = cartItemContent;
cartItems.append(cartShopItem);
cartShopItem.getElementsByClassName("remove-item")[0].addEventListener("click", removeCartItem);
cartShopItem.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);

function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartItems = cartContent.getElementsByClassName('cart-item');
    var total = 0;
    for (var i = 0; i < cartItems.length; i++){
        var cartItem = cartItems[i]
        var priceElement = cartItem.getElementsByClassName('cart-price')[0]
        var quantityElement = cartItem.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace("$",""));
        var quantity = quantityElement.value;
        total = total + (price *quantity);
    }
        total = Math.round(total * 100) / 100;
        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    
}