const checkValue = document.querySelector('#checkbox'),
      btn = document.querySelector('.popup__sub'),
      popupLink = document.querySelector('.popup-link'),
      body = document.querySelector('body'),
      lockPadding = document.querySelector('.lock-padding');


btn.setAttribute('disabled', true);

checkValue.oninput = function () {
  if (checkValue.checked) {
    btn.removeAttribute('disabled');
  } else {
    btn.setAttribute('disabled', true);
  }
}




// let unlock = true;

// const timeout = 800;

// popupLink.addEventListener('click', function (e) {
//   const popupName = popupLink.getAttribute('href').replace('#', '');
//   const curentPopup = document.getElementById(popupName);
//   popupOpen(curentPopup);
//   e.preventDefault();
// });

// const popupCloseIcon = document.querySelector('.close-popup');
// popupCloseIcon.addEventListener('click', function (e) {
//   popupClose(popupCloseIcon.closest('.popup'));
//   e.preventDefault();
// });


// function popupOpen(curentPopup) {
//   if (curentPopup && unlock) {
//     const popupActive = document.querySelector('.popup.open');
//     if (popupActive) {
//       popupClose(popupActive, false);
//     } else {
//       bodyLock();
//     }
//     curentPopup.classList.add('.open');
//     curentPopup.addEventListener('click', function (e) {
//       if (!e.target.closest('.popup__content')) {
//         popupClose(e.target.closest('.popup'));
//       }
//     });
//   }
// }

// function popupClose(popupActive, doUnlock = true) {
//   if (unlock) {
//     popupActive.classList.remove('.open');
//     if (doUnlock) {
//       bodyUnlock();
//     }
//   }
// }

// function bodyLock() {
//   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

//   if (lockPadding.length > 0) {
//     for (let index = 0; index < lockPadding.length; index++) {
//       const el = lockPadding[index];
//       el.style.paddingRight = lockPaddingValue;
//     }
//   }
//   body.style.paddingRight = lockPaddingValue;
//   body.classList.add('lock');

//   unlock = false;
//   setTimeout(function () {
//     unlock = true;
//   }, timeout);
// }

// function bodyUnlock() {
//   setTimeout(function () {
//     if (lockPadding.length > 0) {
//       for (let index = 0; index < lockPadding.length; index++) {
//         const el = lockPadding[index];
//         el.style.paddingRight = '0px';
//       }
//     }
//     body.style.paddingRight = '0px';
//     body.classList.remove('lock');
//   }, timeout);

//   unlock = false;
//   setTimeout(function () {
//     unlock = true;
//   }, timeout);
// }

// document.addEventListener('keydown', function (e) {
//   if (e.which === 27) {
//     const popupActive = document.querySelector('.popup.open');
//     popupClose(popupActive);
//   }
// });

// (function () {
//   if (!Element.prototype.closest) {
//     Element.prototype.closest = function (css) {
//       var node = this;
//       while (node) {
//         if (node.matches(css)) return node;
//         else node = node.parentElement;
//       }
//       return null;
//     }
//   }
// })();
// (function () {
//   if (!Element.prototype.matches) {
//     Element.prototype.matches = Element.prototype.matchesSelector ||
//       Element.prototype.webkitMatchesSelector ||
//       Element.prototype.mozMatchesSelector ||
//       Element.prototype.msMatchesSelector;
//   }
// })();






