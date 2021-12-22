// Получить общую сумму баланса (поле balance) всех пользователей.

import users from "./users.js";

const calculateTotalBalance = (users) => users.reduce((total, { balance }) => total + balance, 0);

console.log(calculateTotalBalance(users)); // 20916