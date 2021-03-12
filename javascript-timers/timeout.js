var h1 = document.querySelector('h1');

function timeOut() {
  h1.textContent = 'Hello There';
}

setTimeout(timeOut, 2000);
