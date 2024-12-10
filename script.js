const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')

adressbtn.addEventListener("click", function() {
    document.querySelector('.adress-form').style.display = "flex"
})
adressclose.addEventListener("click", function() {
  document.querySelector('.adress-form').style.display = "none"
 })
//  slider-------------------------------
const rightndv = document.querySelector('.fa-chevron-right')
const leftndv = document.querySelector('.fa-chevron-left')
const imgNuber = document.querySelectorAll('.slider-content-left-top img')
let index =0  

rightndv.addEventListener ("click", function(){
      index =index + 1
      if(index>imgNuber.length-1){
        index=0
      }
   document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})
leftndv.addEventListener ("click", function(){
  index =index -1 
  if(index<=0){
    index=imgNuber.length-1
  }
  document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})
// Slider 1-------------------------------------------------------
const imgNuberLi = document.querySelectorAll(".slider-content-left-bottom li")
imgNuberLi.forEach(function(image,index){

  image.addEventListener("click",function(){
    romoveactive()
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
    image.classList.add("active")
  })
})
function romoveactive() {
  let imgactive = document.querySelector('.active')
  imgactive.classList.remove("active")
}
// Slider 2-------------------
function imgAuto() {
  index = index + 1
  if(index>imgNuber.length-1){
    index=0
  }
  romoveactive ()
  document.querySelector(".slider-content-left-top").style.right = index *100+"%"
  imgNuberLi[index].classList.add("active")
  // console.log(index)
}
setInterval(imgAuto,5000)
// slider 3
const rightbtntwo = document.querySelector('.fa-chevron-right-two')
const leftbtntwo = document.querySelector('.fa-chevron-left-two')
const imgNubertwo = document.querySelectorAll('.slider-product-one-content-items')  

rightbtntwo.addEventListener ("click", function(){
  index =index + 1
  if(index>imgNubertwo.length-1){
    index=0
  }
document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
})
leftbtntwo.addEventListener ("click", function(){
index =index -1 
if(index<=0){
index=imgNubertwo.length-1
}
document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
})
// product 1
const rightbtnthird = document.querySelector('.fa-chevron-right-third')
const leftbtnthird = document.querySelector('.fa-chevron-left-third')
 const imgNuberthird = document.querySelectorAll('.product-gallery-two-content-left-items')  
// console.log(rightbtnthird,leftbtnthird)
rightbtnthird.addEventListener ("click", function(){
  index =index + 1
  if(index>imgNuberthird.length-1){
    index=0
   }
 document.querySelector(".product-gallery-two-content-left-items-content").style.right = index *100+"%"
 })
 leftbtnthird.addEventListener ("click", function(){
 index =index -1 
 if(index<=0){
 index=imgNuberthird.length-1
 }
 document.querySelector(".product-gallery-two-content-left-items-content").style.right = index *100+"%"
 })
// ----product5----
const rightbtnfive = document.querySelector('.fa-chevron-right-five')
const leftbtnfive = document.querySelector('.fa-chevron-left-five')
 const imgNuberfive = document.querySelectorAll('.product-gallery-five-content-product-items')  
 rightbtnfive.addEventListener ("click", function(){
  index =index + 1
  if(index>imgNuberfive.length-1){
    index=0
   }
 document.querySelector(".product-gallery-five-content-product-items-content").style.right = index *100+"%"
 })
 leftbtnfive.addEventListener ("click", function(){
 index =index -1 
 if(index<imgNuberfive.length){
 index=0
 }
 document.querySelector(".product-gallery-five-content-product-items-content").style.right = index *100+"%"
})
// ---slider-two----->
const rightbtn = document.querySelector('.fa-chevron-right-btn')
const leftbtn = document.querySelector('.fa-chevron-left-btn')
 const imgNuberbtn = document.querySelectorAll('.slider-two-item')  
// console.log(rightbtnthird,leftbtnthird)
rightbtn.addEventListener ("click", function(){
  index =index + 1
  if(index>imgNuberbtn.length-1){
    index=0
   }
 document.querySelector(".slider-two-items").style.right = index *100+"%"
 })
 leftbtn.addEventListener ("click", function(){
 index =index -1 
 if(index<=0){
 index=imgNuberbtn.length-1
 }
 document.querySelector(".slider-two-items").style.right = index *100+"%"
 })
// phone
let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }
// test
 // Hàm để mở ảnh lớn
 function openLargeImage(imageSrc) {
  document.getElementById('largeImage').src = imageSrc;
  document.getElementById('largeImageContainer').style.display = 'flex';
}

// Hàm để đóng ảnh lớn
function closeLargeImage() {
  document.getElementById('largeImageContainer').style.display = 'none';
}
function openLargeImage(imageSrc) {
  document.getElementById('largeImage').src = imageSrc;
  document.getElementById('largeImageContainer').style.display = 'flex';
}
