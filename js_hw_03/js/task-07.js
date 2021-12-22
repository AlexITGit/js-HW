// Напиши скрипт управления личным кабинетом интернет банка. 
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.[5:32 PM] 
/*

 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

// Каждая транзакция это объект со свойствами: id, type и amount

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    let id = String(Math.random()).slice(2);
    let newTransaction = {
      id: id,
      type: type,
      amount: amount,
    };
    this.transactions.push(newTransaction);
  },

    /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.createTransaction(amount, Transaction.DEPOSIT);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.createTransaction(amount, Transaction.WITHDRAW);
    } else alert ('Снятие такой суммы невозможно, недостаточно средств') 
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    let newarr = [];
    for (const item of this.transactions) {
      if (item.id === id) newarr.push(item);
    }
    console.log(newarr);
    return newarr;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let summ = 0;
    let trType = "";
    type === Transaction.DEPOSIT ? (trType = "положено средств на счет") : (trType = "снято средств со счета");
    for (const item of this.transactions) {
      if (item.type === type)
        summ += item.amount;
    }
    console.log(`Всего ${trType} : ${summ}`);
    return summ;
  },
};

account.deposit(100);
account.deposit(200);
account.deposit(300);
account.deposit(400);
account.withdraw(100);
account.withdraw(200);
account.withdraw(300);
account.withdraw(500);
account.deposit(1000);

account.withdraw(500);

account.withdraw(1500);

let i = 4;
let ii = account.transactions[i].id;

console.log("История транзакций");
console.log(account.transactions);

console.log(`id ${i} транзакции ${ii}`);

console.log(`Информация по ${i}й транзакции`);
account.getTransactionDetails(ii);

console.log(`Всего средств на счету ${account.balance}`);

account.getTransactionTotal(Transaction.DEPOSIT);
account.getTransactionTotal(Transaction.WITHDRAW);