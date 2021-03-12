/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function(amount) {
  if (amount > 0) {
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  } else {
    return false;
  }
}

Account.prototype.withdraw = function(amount) {
  if (amount > 0) {
    this.transactions.push(new Transaction('withdraw', amount));
    return true;
  } else {
    return false;
  }
}

Account.prototype.getBalance = function() {
  var balance = 0;
  for (var counter = 0; this.transactions.length > counter; counter++) {
    if (this.transactions[counter].type === 'deposit') {
      balance += this.transactions[counter].amount;
    } else {
      balance -= this.transactions[counter].amount;
    }
  }
  return balance;
}
