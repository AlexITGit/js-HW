let credits = 36500;
let pricePerDroid = 3000;
let totalPrice = 0;
let message = String("");
let result = prompt("Сколько дроидов Вы хотите купить", "");

if (result) {
  result = Number(result);
  if (result || Math.floor(result) === 0) {
    if (Math.floor(result) !== 0) {
      totalPrice = Math.floor(result) * pricePerDroid;
      if (totalPrice > credits) {
        message = "Недостаточно средств на счету";
      } else if (result % 1 !== 0) {
        result = Math.floor(result);
        totalPrice = result * pricePerDroid;
        message = `Вы купили только ${result} дроидов, остаток на счету ${credits - totalPrice} кредитов`;
      } else
        message = `Вы купили ${result} дроидов, остаток на счету ${credits - totalPrice} кредитов`;
    } else message = "Количество не может быть меньше 1";
  } else message = "Количество должно быть числовым значением";
} else message = "Отменено пользователем";

alert(message);
