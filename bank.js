class BankAccount {
  constructor(initialBalance) {
    this.balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    } else {
      console.log("Вклад должен быть положительным числом.");
    }
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Недостаточно средств.");
    } else if (amount <= 0) {
      console.log("Сумма для снятия должна быть положительной.");
    } else {
      this.balance -= amount;
    }
  }

  getBalance() {
    return this.balance;
  }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance());

account1.deposit(500);

console.log(account1.getBalance());

account1.withdraw(200);

console.log(account1.getBalance());
