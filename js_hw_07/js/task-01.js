// В HTML есть список категорий ul#categories.

// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов в категории(всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

let mainUl = document.querySelector('ul#categories');
let catUl = mainUl.querySelectorAll('.item');
console.log(`В списке ${catUl.length} категории.`);

catUl.forEach(element => {
  let h2Title = element.querySelector('h2').textContent;
  let elemCount = element.querySelectorAll('li').length;
  console.log(`Категория: ${h2Title}`);
  console.log(`Количество элементов: ${elemCount}`);
});





