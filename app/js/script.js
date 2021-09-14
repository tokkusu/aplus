function testWebP(callback) {
   const webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
   
testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } 
   // else {
   //    document.querySelector('body').classList.add('no-webp');
   //   }   
});

const swiper = new Swiper('.swiper-container', {
   
   direction: 'horizontal',
   speed: 800,   
   slidesPerView: 1,
   spaceBetween: 0,
   centeredSlides: true,
   loop: true,
   autoHeight: true,

   autoplay: {
      delay: 3000,
   },

   pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
   },
  
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },

   breakpoints: {
      
      320: {
        slidesPerView: 1,        
      },
      
      480: {
        slidesPerView: 1,        
      },
      
      992: {
        slidesPerView: 1,        
      }
   },
});   


window.addEventListener('DOMContentLoaded', function () {
   if (document.body.clientWidth > 1109) {   
      document.querySelector('.menu').classList.remove('fixed-element');   
      document.querySelector('.menu__list').classList.remove('fixed-element');
      button.classList.remove('menu__btn--active');
      menu.classList.remove('menu__list--active');
      document.body.classList.remove('lock');

   } else {     
      document.querySelector('.menu').classList.add('fixed-element'); 
      document.querySelector('.menu__list').classList.add('fixed-element');
      
   };   
})

window.addEventListener('resize', function(){
   if (document.body.clientWidth > 1109) {
      document.querySelector('.menu').classList.remove('fixed-element');
      document.querySelector('.menu__list').classList.remove('fixed-element');
      button.classList.remove('menu__btn--active');
      menu.classList.remove('menu__list--active');
      document.body.classList.remove('lock');

   } else {    
      document.querySelector('.menu').classList.add('fixed-element');  
      document.querySelector('.menu__list').classList.add('fixed-element');
   };
});

// Собираем все элементы в массив
const fixedElPadding = document.querySelectorAll('.fixed-element');  

// Вычисляем величину компенсационного отступа
addPadding = window.innerWidth - document.body.offsetWidth + 'px'; 

function removepadding() {
   if (fixedElPadding.length > 0) {
      fixedElPadding.forEach(function (i) {
         i.style.paddingRight = '0px';
      }); 
   };

   document.body.style.paddingRight = '0px';   
};

// Меню бургер
const button  = document.querySelector('.menu__btn');
const menu    = document.querySelector('.menu__list');
// const logo    = document.querySelector('.header-top__img');
const links   = document.querySelectorAll('.menu__list-link');

button.addEventListener('click', function () {

   button.classList.toggle('menu__btn--active');
   menu.classList.toggle('menu__list--active');
   document.body.classList.toggle('lock'); 

   if (!document.body.classList.contains('lock')) {
      
      // Компенсация скролла      
      removepadding();    

   } else {
      fixedElPadding.forEach(function (i) {
         i.style.paddingRight = addPadding;
      });

      document.body.style.paddingRight = addPadding;       
   };         
});

// logo.addEventListener('click', function () {   

//    // Компенсация скролла   
//    removepadding();

//    button.classList.remove('menu__btn--active');
//    menu.classList.remove('menu__list--active');
//    document.body.classList.remove('lock');
// });

links.forEach(function (link) {
   link.addEventListener('click', function () {
           
      button.classList.remove('menu__btn--active');
      menu.classList.remove('menu__list--active');
      document.body.classList.remove('lock');

      // Компенсация скролла         
      removepadding(); 
   });
});



// Модальное окно
// const headerButton     = document.querySelectorAll('[data-modal-button]'),
//       modalButtonClose = document.querySelectorAll('[data-modal-close]'),
//       allModal         = document.querySelectorAll('[data-modal]');

// // Кнопки - открыть модалку
// headerButton.forEach(function (i) {
//    i.addEventListener('click', function () {
//       const modalId = this.dataset.modalButton;
//       const modal   = document.querySelector('#' + modalId);      

//       if (!document.body.classList.contains('lock')) {
//          document.body.classList.add('lock');
//          $.scrollify.disable();
//       };

//       modal.classList.add('open');
      
//       //Находим внутри открываемой модалки блок modal и запрещаем ему передавать клики родителям
//       modal.querySelector('.modal').addEventListener('click', function (e) {
//          e.stopPropagation();         
//       });
//    });
// });

// // Кнопки - закрыть модалку
// modalButtonClose.forEach(function (item) {
//    item.addEventListener('click', function () {
//       const modal = this.closest('[data-modal]');         

//       if (!menu.classList.contains('menu__list--active')) {
//          modal.classList.remove('open');
//          document.body.classList.remove('lock');
//          $.scrollify.enable();         
//       } else {
//          modal.classList.remove('open');
//       };      
//    });
// });

// // Закрытие модалки по фейду
// allModal.forEach(function (item) {
//    item.addEventListener('click', function () {      

//       if (!menu.classList.contains('menu__list--active')) {
//          this.classList.remove('open');
//          document.body.classList.remove('lock');
//          $.scrollify.enable();
//       } else {
//          this.classList.remove('open');
//       };
//    });
// });