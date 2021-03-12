var h1 = document.querySelector('h1');

var setInt = setInterval(timer, 1000);

var counter = 4

function timer() {
  counter--
  if(counter === 0) {
    h1.textContent = '~Earth Beeeellloowww Us~';
    clearInterval(setInt);
  } else {
    h1.textContent = counter;
  }
}
