Array.from(document.getElementsByClassName('mob-menu__link')).forEach(
  element =>
    (element.onclick = function () {
      document.getElementsByClassName('mob-menu')[0].classList.add('is-hidden');
    })
);

Array.from(document.getElementsByClassName('mob-menu__supportBtn')).forEach(
  element =>
    (element.onclick = function () {
      document.getElementsByClassName('mob-menu')[0].classList.add('is-hidden');
    })
);
