const fs = require('fs');
for(var i = 2; process.argv.length > i; i++) {
  fs.readFile(process.argv[i], 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data)
  })
}
