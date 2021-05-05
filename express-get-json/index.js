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
};

app.get('/api/grades', (req, res) => {
  let gradesArray = [];
  for (const prop in grades) {
    gradesArray.push({
      course: grades[prop].course,
      id: grades[prop].id,
      name: grades[prop].name,
      score: grades[prop].score
    })
  }
  res.json(gradesArray);
});

app.listen(3000, console.log('Port 3000 on the express server is listening'));
