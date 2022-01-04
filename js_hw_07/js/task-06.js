// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

let inputIsValid = document.querySelector('input');
let checkLength = Number(inputIsValid.getAttribute('data-length'));

inputIsValid.addEventListener('focus', (event) => {
  event.target.classList.remove('valid');
  event.target.classList.remove('invalid');
});

inputIsValid.addEventListener('blur', (event) => {
  event.target.value.length === checkLength ? event.target.classList.add('valid') : event.target.classList.add('invalid')
});