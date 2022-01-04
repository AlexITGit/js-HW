// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//   подставляет его текущее значение в span#name - output.
//   Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
    
let inputName = document.querySelector('#name-input');
let spanText = document.querySelector('#name-output');

inputName.addEventListener('input', (event) => {
  event.target.value ? spanText.textContent = event.target.value : spanText.textContent = 'незнакомец'
})