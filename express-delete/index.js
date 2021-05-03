const express = require('express');
const app = express();
const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
}

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for(const prop in grades) {
    gradesArray.push(grades[prop]);
  }
  res.json(gradesArray);
})

app.delete('/api/grades/:id', (req, res) => {
  const keysArray = Object.keys(grades);
  let i = 0;
  let x = 0;

  for (const property in grades) {
    if (req.params.id === keysArray[i]) {
      delete grades[property];
      res.sendStatus(204);
      x++;
      break;
    } else {
      i++;
    }
  }
  if(x === 0) {
    res.sendStatus(404);
  }
})

app.listen(3000, console.log('Listening on port 3000!'));
