let total = 0;
let input = 0;
let number = 0;

for (; input !== null; ) {
  input = prompt("Введите число", "");
  number = Number(input);
  if (!isNaN(number)) {
    total += number;
  } else alert("Было введено не число, попробуйте еще раз");
}
if (total) {
  alert(`Общая сумма чисел равна ${total}`);
} else alert("Вы не ввели ни одного числа");
