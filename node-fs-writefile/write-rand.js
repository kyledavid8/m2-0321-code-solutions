const fs = require('fs');
fs.writeFile('random.txt', Math.random().toString(), (err) => {
  if(err) throw err;
});
