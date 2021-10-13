const iconMenu = document.querySelector(`.menu__icon`);
if (iconMenu) {
  const menuBody = document.querySelector(`.menu__body`);
  iconMenu.addEventListener(`click`, function(e) {
    document.body.classList.toggle(`_lock`);
    iconMenu.classList.toggle(`_active`);
    menuBody.classList.toggle(`_active`);
  })
}


const swiper = new Swiper('.tasks__slider', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  mousewheel: true,
  keyboard: true,

  loop: true,
});

const licensesSwiper = new Swiper('.licenses-slider', {
  slidesPerView: 1.5,
  spaceBetween: 115,

  navigation: {
    nextEl: '.licenses-slider-button-next',
    prevEl: '.licenses-slider-button-prev',
  },

  mousewheel: true,
  keyboard: true,

  loop: true,
});

const thanksSwiper = new Swiper('.thanks-slider', {
  slidesPerView: 1.5,
  spaceBetween: 115,

  navigation: {
    nextEl: '.thanks-slider-button-next',
    prevEl: '.thanks-slider-button-prev',
  },

  loop: true,
});

const questionHeader = document.querySelectorAll('.faq__question-header'),
  questionIcons = document.querySelectorAll('.faq__question-icon'),
  questionTexts = document.querySelectorAll('.faq__question-text');

if (questionHeader) {
  questionHeader.forEach(item => {
    item.addEventListener('click', e => {
      let currentActiveIcon = document.querySelector('.faq__question-header.active');
      currentActiveIcon ? activateHeader(item) : activateHeader(item)
    })
  })
  function activateHeader(item) {
    let currentActiveHeader = document.querySelector('.faq__question-header.active');
    currentActiveHeader && currentActiveHeader.classList.remove(`active`);
    item.classList.add('active');
    let activeHeader = item.getAttribute(`data-id`);
    showIcon(activeHeader)
    showText(activeHeader)
  }
  function showIcon(activeHeader) {
    questionIcons.forEach((icon, i) => {
      icon.classList.add(`${i}`);
      icon.classList.contains(activeHeader) ? icon.classList.add(`active`) : icon.classList.remove(`active`);
    })
  }
  function showText(activeHeader) {
    questionTexts.forEach((text, i) => {
      text.classList.add(`${i}`);
      text.classList.contains(activeHeader) ? text.classList.add(`show`) : text.classList.remove(`show`);
    })
  }
  function deactivateIcon(activeHeader) {
    activeHeader.classList.remove('active');
    let notActiveIcon = activeHeader.getAttribute(`data-id`);
    notShowText(notActiveIcon);
  }
  function notShowText(notActiveIcon) {
    questionTexts.forEach((text, i) => {
      if (text.classList.contains(notActiveIcon)) {
        text.classList.remove(`${i}`);
        text.classList.remove(`show`)
      }
    })
  }
}