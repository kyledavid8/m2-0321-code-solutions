const takeAChance = require('./take-a-chance');

var promise = takeAChance('Kyle')

promise.then((value) => {
  console.log(value);
})

promise.catch((reason) => {
  console.log(reason.message)
})
