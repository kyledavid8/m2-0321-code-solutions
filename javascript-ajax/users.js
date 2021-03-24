var ul = document.querySelector('#user-list');
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function() {
  console.log(xhr.status);
  console.log(xhr.response);
  for(var i = 0; xhr.response.length > i; i++) {
    var name = xhr.response[i].name
    var li = document.createElement('li');
    li.textContent = name;
    ul.appendChild(li);
  };
});
xhr.send();
