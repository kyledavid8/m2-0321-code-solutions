var count = 3;
var int = setInterval(function() {
  if (count === 0) {
    console.log('Blast off!')
    clearInterval(int);
  } else {
    console.log(count)
    count--
  }
}, 1000)
