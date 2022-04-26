const bar = document.getElementById('bar');
const navs = document.getElementById('navbar');
const close = document.getElementById('close');



if(bar){
    bar.addEventListener('click', () =>{
        navs.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () =>{
        navs.classList.remove('active');
    })
}


const MainImg = document.getElementById("MainImg");
const smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    MainImg.src = smallimg[3].src;
}

function openModal() {
    document.getElementById("myModal").style.display = "block";
}
  
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
  
let slideIndex = 1;
showSlides(slideIndex);
  
function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    
}

const shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
}

document.querySelector('.minus-btn').setAttribute("disabled", "disabled");

var valueCount
document.querySelector(".plus-btn").addEventListener("click", function(){
    valueCount = document.getElementById("quantity").value;
    valueCount++;
    document.getElementById("quantity").value = valueCount;
    if(valueCount >0){
        document.querySelector(".minus-btn").removeAttribute("disabled");
        document.querySelector(".minus-btn").classList.remove("disabled");
    }
});

document.querySelector(".minus-btn").addEventListener("click", function(){
    valueCount = document.getElementById("quantity").value;
    valueCount--;
    document.getElementById("quantity").value = valueCount;
    if(valueCount ==0){
        document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
    }
});