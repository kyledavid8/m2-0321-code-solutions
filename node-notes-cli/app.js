const dataObject = require('./data.json')
const fs = require('fs');


fs.readFile('data.json', 'utf8', (err, data) => {
  data = JSON.parse(data);
  if(process.argv[2] === 'read') {
    for (var i = 1; data.nextId > i; i++) {
      console.log(`${i}: ${data.notes[i.toString()]}`);
    }
  } else if(process.argv[2] === 'create') {
    let nextId = data.nextId;
    data.notes[nextId] = process.argv[3];
    data.nextId++;
  } else if(process.argv[2] === 'delete') {
    delete data.notes[process.argv[3]];
    data.nextId--;
    let counter = parseInt(process.argv[3]) + 1;
    for (var i = process.argv[3]; data.nextId > i; i++) {
      data.notes[i] = data.notes[counter];
      counter++;
    }
    delete data.notes[data.nextId];
  } else if(process.argv[2] === 'update') {
    data.notes[process.argv[3]] = process.argv[4];
  }
  data = JSON.stringify(data);
  fs.writeFile('data.json', data, (err) => {
    if (err) throw err;
  })
})
