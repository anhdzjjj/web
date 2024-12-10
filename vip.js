const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')

adressbtn.addEventListener("click", function() {
    document.querySelector('.adress-form').style.display = "flex"
})
adressclose.addEventListener("click", function() {
  document.querySelector('.adress-form').style.display = "none"
 })
//  ---click 1-----
const rightndv = document.querySelector('.fa-chevron-right')
const leftndv = document.querySelector('.fa-chevron-left')
const imgNuber = document.querySelectorAll('.slider-content-one-gallary-top-text')
let index =0  

rightndv.addEventListener ("click", function(){
      index =index + 1
      if(index>imgNuber.length-1){
        index=0
      }
   document.querySelector(".slider-content-one-gallary-top-text-img").style.right = index *100+"%"
})
leftndv.addEventListener ("click", function(){
  index =index -1 
  if(index<=0){
    index=imgNuber.length-1
  }
  document.querySelector(".slider-content-one-gallary-top-text-img").style.right = index *100+"%"
})
const adressndv = document.querySelector('#adress-form-one')
const adressndvclose = document.querySelector('#adress-ndv-close')

adressndv.addEventListener("click", function() {
    document.querySelector('.adress-form-one').style.display = "flex"
})
adressndvclose.addEventListener("click", function() {
  document.querySelector('.adress-form-one').style.display = "none"
 })
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