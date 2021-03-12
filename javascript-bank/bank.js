/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
};

Bank.prototype.openAccount = function(holder, balance) {
  if (balance > 0) {
   var obj = new Account(this.nextAccountNumber, holder);
    obj.deposit(balance);
    this.accounts.push(obj);
    this.nextAccountNumber++;
    return this.nextAccountNumber - 1;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  if (typeof this.accounts[number - 1] !== 'undefined') {
    return this.accounts[number - 1];
  } else {
    return null;
  }
};

Bank.prototype.getTotalAssets = function () {
  var total = 0;
  for (var counter = 0; this.accounts.length > counter; counter++) {
    total += this.accounts[counter].getBalance();
  }
  return total;
}
