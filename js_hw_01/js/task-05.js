let cost = 0;
let message = String("");
let country = prompt("Введите название страны для доставки", "");

if (country) {
  country = country[0].toUpperCase() + country.toLowerCase().substr(1, country.length);
  switch (country) {
    case "Китай":
      cost = 150;
      break;
    case "Чили":
      cost = 250;
      break;
    case "Австралия":
      cost = 165;
      break;
    case "Индия":
      cost = 90;
      break;
    case "Ямайка":
      cost = 130;
      break;
    default:
      cost = null;
      break;
  }
  if (cost) {
    message = `Доставка в ${country} будет стоить ${cost} кредитов`;
  } else message = "В вашу страну доставки нет";
} else message = "Отменено пользователем";

alert(message);
