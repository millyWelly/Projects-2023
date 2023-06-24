document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    const topOffset = 100; // если не нужен отступ сверху
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

let inputTel = document.getElementById('tel');
let maskOptions = {
  mask: "+{7} (000) 000-00-00"
};
let mask = IMask(inputTel, maskOptions);

let burger = document.querySelector('.header__burger');
burger.addEventListener('click', function (event) {
  burger.classList.toggle('active-3');
  document.querySelector(".second_menu").classList.toggle('second_menu__active');
})

document.querySelectorAll('.second_menu__by_click').forEach(function(el) {
  el.addEventListener('click', function (event) {
    burger.classList.remove('active-3');
    document.querySelector(".second_menu").classList.remove('second_menu__active');
  })
})

// Создать наблюдателя
const observer = new IntersectionObserver(entries => {
  // перебор записей
  entries.forEach(entry => {
    // если элемент появился
    if (entry.isIntersecting) {
      // добавить ему CSS-класс
      entry.target.classList.add('request__form__btn_animation');
    }
  });
});

// Сообщить наблюдателю, какие элементы следует отслеживать
observer.observe(document.querySelector('.request__form__btn'));

const observer2 = new IntersectionObserver(entries => {
  // перебор записей
  entries.forEach(entry => {
    // если элемент появился
    if (entry.isIntersecting) {
      // добавить ему CSS-класс
      entry.target.classList.add('about__content__photo_1_animation');
    }
  });
});

// Сообщить наблюдателю, какие элементы следует отслеживать
observer2.observe(document.querySelector('.about__content__photo_1__img'));

const observer3 = new IntersectionObserver(entries => {
  // перебор записей
  entries.forEach(entry => {
    // если элемент появился
    if (entry.isIntersecting) {
      // добавить ему CSS-класс
      entry.target.classList.add('about__content__photo_2_animation');
    }
  });
});

// Сообщить наблюдателю, какие элементы следует отслеживать
observer3.observe(document.querySelector('.about__content__photo_2__img'));
