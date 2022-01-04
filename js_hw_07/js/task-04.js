// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// let addClick = document.querySelector(".js-target-btn");
// let addListenerBTN = document.querySelector(".js-add-listener");
// let removeListenerBTN = document.querySelector(".js-remove-listener");

let counterValue = document.querySelector("#value");
let decrementBTN = document.querySelector('button[data-action="decrement"]');
let incrementBTN = document.querySelector('button[data-action="increment"]');

let mydecrement = (counter => counter = Number(counter) - 1);
let myincrement = (counter => counter = Number(counter) + 1);

decrementBTN.addEventListener('click', () => {
  counterValue.textContent = mydecrement(counterValue.textContent);
});

incrementBTN.addEventListener('click', () => {
  counterValue.textContent = myincrement(counterValue.textContent);
});