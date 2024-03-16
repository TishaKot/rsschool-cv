//  const {body} = document
//   const swipers = document.querySelectorAll('.swiper')
//   body.onresize = () => {
//     console.log(body.offsetWidth)
//     swipers.forEach(it => {
//       if(body.offsetWidth > 768) {
//         //it.classList.remove('d-none')
//         it.style = ""
//       } else {
//         //it.classList.add('d-none')
//         it.style = "display: none"
//       }
//     })
//   }


function initSlider() {
    new Swiper(".mySwiper", {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
      });
}
initSlider();



// document.getElementById("read__more").addEventListener("click", function() {
//   document.getElementById("services-hidden-third").style.display = "block";
// });


// const toggleButton = document.getElementById('read__more');
// const block = document.getElementById('services-hidden-third');

// toggleButton.addEventListener('click', function() {
//   if (block.style.display === 'none') {
//     block.style.display = 'flex';
//   } else {
//     block.style.display = 'none';
//   }
// });



document.getElementById("btn1").addEventListener("click", function(){
  document.getElementById("services-hidden-third").style.display = "flex";
  document.getElementById("btn1").style.display = "none";
  document.getElementById("btn2").style.display = "block";
});

document.getElementById("btn2").addEventListener("click", function(){
  document.getElementById("services-hidden-third").style.display = "none";
  document.getElementById("btn1").style.display = "block";
  document.getElementById("btn2").style.display = "none";
});

const elements = document.querySelectorAll('.services-hidden');

document.getElementById("btn1").addEventListener("click", function(){
  elements.forEach(element => {
   element.style.display = 'block';
});
  document.getElementById("btn1").style.display = "none";
  document.getElementById("btn2").style.display = "block";
});

document.getElementById("btn2").addEventListener("click", function(){
  document.querySelectorAll('.services-hidden').forEach(element => {
  element.style.display = 'none';
});
  document.getElementById("btn1").style.display = "block";
  document.getElementById("btn2").style.display = "none";
});

