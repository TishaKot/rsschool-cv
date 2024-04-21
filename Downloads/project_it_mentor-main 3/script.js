//слайдер свайп

function initSlider() {
  new Swiper("#swiper1", {
    slidesPerView: "1",
    spaceBetween: 10,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      spaceBetween: 10,
      type: "bullets",
    },
    breakpoints: {
     508: {
      spaceBetween: 10,
      autoHeight: false,
      slidesPerView: 2,
    }, 
    768: {
      // enabled: false,
      spaceBetween: 24,
      autoHeight: false,
      slidesPerView: 4,
      slidesPerGroup: 3,
      slidesPerColumn: 2,
    },
    965: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
    },
    1120: {
      spaceBetween: 33,
    },
  },
    mousewheel: true,
    keyboard: true,
  });
}
initSlider();


// var swiper = new Swiper("#swiper2", {
//   slidesPerView: "auto",
//   loop: false,
//   spaceBetween: 15,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     type: "bullets",
//   },
//   breakpoints: {
//     768: {
//       enabled: false,
//       spaceBetween: 24,
//       autoHeight: false,
//       slidesPerView: 3,
//       slidesPerGroup: 3,
//       slidesPerColumn: 2,
//     },
//     965: {
//       slidesPerView: 4,
//       slidesPerGroup: 4,
//       spaceBetween: 20,
//     },
//     1120: {
//       spaceBetween: 33,
//     },
//   },
// });


function initSlider2() {
  new Swiper("#swiper2", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      spaceBetween: 40,
      type: "bullets",
    },
    breakpoints: {
      508: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      965: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1120: {
        slidesPerView: 4,
        spaceBetween: 33,
      },
    },
    mousewheel: true,
    keyboard: true,
  });
}

initSlider2();






// function initSlider3() {
//   new Swiper("#swiper3", {
//     slidesPerView: "1",
//     spaceBetween: 15,
//     loop: false,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//       spaceBetween: 40,
//       type: "bullets",
//     },
//     breakpoints: {
//      508: {
//       spaceBetween: 20,
//       autoHeight: false,
//       slidesPerView: 2,
//     }, 
//     768: {
//       enabled: false,
//       spaceBetween: 24,
//       autoHeight: false,
//       slidesPerView: 3,
//       slidesPerGroup: 3,

//     },
//     965: {
//       slidesPerView: 3,
     
//       spaceBetween: 20,
//     },
//     1120: {
//       slidesPerView: 4,
//       spaceBetween: 33,
//     },
//   },
//     mousewheel: true,
//     keyboard: true,
//   });
// }
// initSlider3();


function initSlider3() {
  new Swiper("#swiper3", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
      spaceBetween: 40,
      type: "bullets",
    },
    breakpoints: {
      508: {
        slidesPerView: 2,
        spaceBetween: 20,
        autoHeight: false,
      }, 
      768: {
        slidesPerView: 3,
        spaceBetween: 24,
        autoHeight: false,
        slidesPerGroup: 3,
      },
      965: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1120: {
        slidesPerView: 4,
        spaceBetween: 33,
      },
    },
    mousewheel: true,
    keyboard: true,
  });
}

initSlider3(); 

//Функция показа блока РЕМОНТ БРЕНДОВ

const container = document.getElementById('container');
const elements = container.querySelectorAll('.services__brands__slide');
const btn = document.getElementById('btn');
const btnImg = document.querySelector('.services__btn__img');
const text = document.querySelector('.services__btn__text');

let showAll = false;

function toggleElements() {
  // Задаем количество элементов, которые нужно показывать в зависимости от разрешения экрана
  const screenWidth = window.innerWidth;
  let numToShow = screenWidth >= 1120 ? 8 : screenWidth >= 768 ? 6 : 0;

  // Показываем или скрываем элементы в зависимости от значения numToShow
  elements.forEach((element, index) => {
    if (numToShow === 0 || index < numToShow || showAll) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });


  // Меняем текст на кнопке в зависимости от showAll
  if (showAll) {
    text.textContent = 'Скрыть';
    btnImg.style.transform = 'rotate(180deg)';

  } else {
    text.textContent = 'Показать все';
    btnImg.style.transform = 'rotate(0deg)';

  }
}


btn.addEventListener('click', () => {
  showAll = !showAll;
  toggleElements();
});


// Вызываем функцию toggleElements для первоначального отображения элементов
toggleElements();



// При изменении размера окна браузера также пересчитываем отображаемые элементы
window.addEventListener('resize', toggleElements);


function hideButtonOnMobile() {
  if (window.innerWidth < 768) {
    btn.style.display = "none";
  } else {
    btn.style.display = "block";
  }

}

hideButtonOnMobile();
window.addEventListener('resize', hideButtonOnMobile);



// Функция показа блока РЕМОНТ ТЕХНИКИ

// const blocks = container.querySelectorAll('.technique__block');
// const btnServices = document.getElementById('btn_services');
// // const btnT = document.querySelector('.technique__btn');
// // const btnImges = document.querySelector('.technique__btn__img');
// // const textBtn = document.querySelector('.technique__btn__text');

// let show = false;


// btnServices.addEventListener("click", function () {
//   let hiddenElements = document.querySelectorAll(".technique__block_hidden");
//   hiddenElements.forEach(function (element) {
//     element.style.display = "block";
//     element.classList.remove('technique__block_hidden');
//   });
// });

// function toggleButton() {


//   // Задаем количество элементов, которые нужно показывать в зависимости от разрешения экрана
//   const screenW = window.innerWidth;
//   let numTo = screenW >= 1120 ? 4 : screenW >= 768 ? 3 : 0;

//   // Показываем или скрываем элементы в зависимости от значения numToShow
//   blocks.forEach((element, index) => {
//     if (numTo === 0 || index < numTo || show) {
//       element.style.display = 'block';
//     } else {
//       element.style.display = 'none';
//     }
//   });


//   // Меняем текст на кнопке в зависимости от showAll      
//   if (show) {
//     text.textContent = 'Скрыть';
//     btnImg.style.transform = 'rotate(180deg)';

//   } else {
//     text.textContent = 'Показать все';
//     btnImg.style.transform = 'rotate(0deg)';

//   }
// }


// btn.addEventListener('click', () => {
//   show = !show;
//   toggleButton();
// });

// toggleButton();


// Открытие модального окна ОБРАТНАЯ СВЯЗЬ

const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('.icon__chat');
const closeModalButton = document.getElementById('modal__window_call_btn_close');
const modalContent = document.querySelector('.modal__window__feedback');
const headerPhone = document.querySelector('.phone');

openModalButton.addEventListener("click", function () {
  modal.style.display = "block";
});

closeModalButton.addEventListener("click", function () {
  modal.style.display = "none";
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// на 768 Открытие модального окна ОБРАТНАЯ СВЯЗЬ

headerPhone.addEventListener("click", function () {
  modal.style.display = "flex";
  modalContent.style.display = "flex";
});


closeModalButton.addEventListener("click", function () {
  modal.style.display = "none";
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


// Открытие модального окна ЗАКАЗАТЬ ЗВОНОК

const modalD = document.querySelector('.modal__wrap__call');
const phone = document.querySelector('.icon__call');
const headerChat = document.querySelector('.chat');
const closeButton = document.getElementById('modal__window_btn_close');


phone.addEventListener("click", function () {
  modalD.style.display = "flex";

});

closeButton.addEventListener('click', function () {
  modalD.style.display = 'none';
});

modalD.addEventListener('click', (e) => {
  if (e.target === modalD) {
    modalD.style.display = 'none';
  }
});



// на 768 Открытие модального окна ЗАКАЗАТЬ ЗВОНОК

headerChat.addEventListener("click", function () {
  modalD.style.display = "flex";

});

closeButton.addEventListener('click', function () {
  modalD.style.display = 'none';
});

modalD.addEventListener('click', (e) => {
  if (e.target === modalD) {
    modalD.style.display = 'none';
  }
});



// функция открытия текста

const readButton = document.querySelector('.services__button');
const readText = document.querySelector('.text__screen_768__end');
const imgArrow = document.querySelector('.img__arrow');
const buttonText = document.querySelector('.services__button__text');
const text768 = document.querySelector('.text__screen_768');

readButton.addEventListener('click', function () {
  if (readText.classList.contains('hidden')) {
    readText.classList.remove('hidden');
    buttonText.textContent = 'Скрыть';
    imgArrow.style.transform = 'rotate(180deg)';
  } else {
    readText.classList.add('hidden');
    buttonText.textContent = 'Читать далее';
    imgArrow.style.transform = 'rotate(0deg)';
  }
});

readButton.addEventListener('click', function () {
  if (text768.style.display === "block") {
    text768.style.display = "none";
  } else {
    text768.style.display = "block";
  }
});


// бургер меню



document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.getElementById('burger__btn');
  const closeBtn = document.querySelector('.burger__close-btn');
  const burgerMenu = document.querySelector('.burger__menu');
  const overlay = document.querySelector('.burger__overlay');

  burgerBtn.addEventListener('click', function () {
    burgerMenu.classList.add('open');
    overlay.style.display = 'block';
  });

  closeBtn.addEventListener('click', function () {
    burgerMenu.classList.remove('open');
    overlay.style.display = 'none';
  });

  overlay.addEventListener('click', function () {
    burgerMenu.classList.remove('open');
    overlay.style.display = 'none';
  });

});
