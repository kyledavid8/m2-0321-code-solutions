const express = require('express');
const app = express();

app.use((req, res) => {
  console.log(req.method);
  res.send('Hello, world');
});

app.listen(3000, () => console.log('Express server listening on port 3000'));
