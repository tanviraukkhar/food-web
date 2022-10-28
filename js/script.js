function updateProductNumber(product, price, isIncreasing) {
  const productInput = document.getElementById(product + '-number');
  let productNumber = productInput.value;
  if (isIncreasing == true) {
      productNumber = parseInt(productNumber) + 1;
  }
  else if (isIncreasing == false && productNumber > 0) {
      productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  // update product total
  const productTotal = document.getElementById(product + '-total');
  productTotal.innerText = productNumber * price;
  // calculate total
  calculateTotal();
}

function getInputValue(product) {
  const productInput = document.getElementById(product + '-number');
  const productNumber = parseInt(productInput.value);
  return productNumber;
}
function calculateTotal() {
  const phoneTotal = getInputValue('phone') * 300;
  const caseTotal = getInputValue('case') * 120;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const totalPrice = subTotal + tax;
  // update on the html
  document.getElementById('sub-total').innerText = subTotal;
  document.getElementById('tax-amount').innerText = tax;
  document.getElementById('total-price').innerText = totalPrice;

}
function removeProduct(item) {
  document.getElementById(item + '-display').style.display = 'none';
}


//handle  phone increase decrease events
document.getElementById("phone-plus").addEventListener('click', function () {
  updateProductNumber('phone', 300, true);
});
document.getElementById("phone-minus").addEventListener('click', function () {
  updateProductNumber('phone', 300, false);
});

// handle case increase decrease events
document.getElementById("case-plus").addEventListener('click', function () {
  updateProductNumber('case', 120, true);
});
document.getElementById("case-minus").addEventListener('click', function () {
  updateProductNumber('case', 120, false);
});

// remove item
document.getElementById("phone-remove").addEventListener('click', function () {
  removeProduct('phone');
});
document.getElementById("case-remove").addEventListener('click', function () {
  removeProduct('case');
});

// check out
document.getElementById("check-btn").addEventListener('click', function () {
  alert('successful');
});
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}
