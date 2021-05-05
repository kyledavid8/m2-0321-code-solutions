const express = require('express');
const app = express();
let nextId = 1;
const grades = {};

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
})

app.use(express.json())

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  res.status(201).send(grades[nextId]);
  nextId++;
})

app.listen(3000, () => console.log('Listening on port 3000!'))
