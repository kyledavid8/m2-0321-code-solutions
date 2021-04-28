const fs = require('fs');


fs.readFile('data.json', 'utf8', (err, data) => {
  if(process.argv[2] !== 'read') {
    if(process.argv[3] === undefined) {
      console.log('Another parameter is needed');
    } else {
      data = JSON.parse(data);
      if (process.argv[2] === 'create') {
        let nextId = data.nextId;
        data.notes[nextId] = process.argv[3];
        data.nextId++;
      } else if (process.argv[2] === 'delete') {
        delete data.notes[process.argv[3].toString()];
      } else if (process.argv[2] === 'update') {
        data.notes[process.argv[3]] = process.argv[4];
      }
      data = JSON.stringify(data);
      fs.writeFile('data.json', data, (err) => {
        if (err) throw err;
      })
    }
  } else if(process.argv[2] === 'read') {
    data = JSON.parse(data);
    for (var i = 1; data.nextId > i; i++) {
      if(data.notes[i] !== undefined) {
        console.log(`${i}: ${data.notes[i.toString()]}`);
      }
    }
    data = JSON.stringify(data);
    fs.writeFile('data.json', data, (err) => {
      if (err) throw err;
    })
  }
})
