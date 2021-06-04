$('document').ready(function() {
  const swiper = new Swiper('.examples-container', {
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.examples-button-next',
      prevEl: '.examples-button-prev',
    },
  });

  const postSlider = new Swiper('.post-container', {
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.examples-button-next',
      prevEl: '.examples-button-prev',
    },
  });

  const mobileMenu = document.querySelector('.mobile');
  const buttonMenu = document.querySelector('.header__burger');
  const modalOpenButton = document.querySelector('.header__button');
  const buttonOpenModal = document.querySelector('.header__button--mobile');
  const modal = document.querySelector('.modal');
  const arrowMenuOpen = document.querySelectorAll('.nav__link-arrow');

  const openModal = () => {
    modal.classList.add('modal--visible');
    document.querySelector('body').classList.add('body_active');
  };

  const closeModal = () => {
    modal.classList.remove('modal--visible');
    if(mobileMenu.style.display === 'block') {
      document.querySelector('body').classList.add('body_active');
    } else {
      document.querySelector('body').classList.remove('body_active');
    }
  };

  // МОБИЛЬНОЕ МЕНЮ ( КНОПКА БУРГЕР )
  buttonMenu.addEventListener('click', () => {
    if(mobileMenu.style.display === 'block') {
      mobileMenu.style.display = 'none';
    } else {
      mobileMenu.style.display = 'block';
      // убираем скролл
    }
    document.querySelector('body').classList.toggle('body_active');
  });
  for(let i = 0; i < arrowMenuOpen.length; i++){
			let thisLink = arrowMenuOpen[i].previousElementSibling;
			let subMenu = arrowMenuOpen[i].nextElementSibling;
			let thisArrow = arrowMenuOpen[i].firstElementChild;
      
			thisLink.classList.add('parent');
		arrowMenuOpen[i].addEventListener('click', function() {
			subMenu.classList.toggle('nav__list-mobile--visible');
			thisArrow.classList.toggle('nav__link-arrow--active');
		});
	}

  // КЛИК ПО КНОПКЕ "ПОЛУЧИТЬ"
  modalOpenButton.addEventListener('click', () => {
    if(!modal.classList.contains('modal--visible')) {
      openModal();
    }
  });
  buttonOpenModal.addEventListener('click', () => {
    if(!modal.classList.contains('modal--visible')) {
      openModal();
    }
  });

  // КОГДА МОДАЛЬНОЕ ОКНО ОТКРЫТО
  modal.addEventListener('click', (event) => {
    target = event.target;

    if(target.classList.contains('overlay') || target.classList.contains('cross')) {
      closeModal();
    }

    $("body").keydown(function (event) { 
      if(event.which == 27) {
        closeModal();
      }
    });
  });

  $('.modal__form').validate({
    errorClass: 'invalid-modal',
    messages: {
      name: {
        required: "Введите ваше имя",
        minlength: "Не менее 2 символов",
      },
      phone: {
        required: "Телефон обязателен",
        minlength: "Не меньше 11 цифр"
      },
    }
  });
  $('.connect__form').validate({
    errorClass: 'invalid-connect',
    messages: {
      email: {
        required: "Ваш email",
        email: "Формат: name@domain.ru",
      },
    },
  })

  $('.modal__input_tel').mask('+0 (000) 000-00-00');


  {
    const scrollLinks = document.querySelectorAll('a.scroll-link');

    for(const scrollLink of scrollLinks) {
      scrollLink.addEventListener('click', (event) => {
        event.preventDefault();  // запрещает обновлять страницу
        const id = scrollLink.getAttribute('href');
        document.querySelector(id).scrollIntoView({ // scrollIntoView - метод встроенный
          behavior: 'smooth', // какая будет прокрутка
          blocks: 'start', // до куда будет прокручиваться
        }); 
      });
    }
  };

  let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
    iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
    any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
  };
  if(isMobile.any()) {
  } else {
  }
});
