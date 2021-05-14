const express = require('express');
const app = express();
const fs = require('fs');

app.get('/api/notes', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    data = JSON.parse(data);
    const objArray = [];
    for (const prop in data.notes) {
      objArray.push({
        "content": data.notes[prop].content,
        "id": data.notes[prop].id
      })
    }
    res.json(objArray)
  })
});

app.get('/api/notes/:id', (req, res) => {
  if(req.params.id <= 0 || typeof req.params.id !== Number || (req.params.id % 1) !== 0) {
    res.status(400)
    res.json({"error": "id must be a positive integer"})
  } else {
    fs.readFile('data.json', 'utf8', (err, data) => {
      if(err) throw err;
      data = JSON.parse(data);
      const objArray = [];
      for (const prop in data.notes) {
        objArray.push({
          "content": data.notes[prop].content,
          "id": data.notes[prop].id
        })
      };
      var placement;
      for (var i = 0; objArray.length > i; i++) {
        if (objArray[i].id === parseInt(req.params.id)) {
          placement = i;
          break;
        }
      }
      if(placement === undefined) {
        res.status(404);
        res.json({"error": `cannot find note with id ${req.params.id}`});
      } else {
        res.json(objArray[placement]);
      }
    });
  }
});

app.use(express.json())

app.post('/api/notes', (req, res) => {
  if (req.body.content === undefined) {
    res.status(400);
    res.json({
      "error": "content is a required field"
    })
  } else {
    fs.readFile('data.json', 'utf8', (err, data) => {
      data = JSON.parse(data)
      const write = {
        "content": req.body.content,
        "id": data.nextId
      }
      let nextId = data.nextId
      data.notes[nextId] = write;
      data.nextId++;
      data = JSON.stringify(data);
      fs.writeFile('data.json', data, (err) => {
        if(err) {
          res.status(500);
          res.json({
            "error": "An unexpected error occurred."
          })
        } else {
          res.status(201);
          res.json(write);
        }
      })
    })
  }
});

app.delete('/api/notes/:id', (req, res) => {
  if (req.params.id <= 0 || typeof req.params.id !== Number || (req.params.id % 1) !== 0) {
    res.status(400);
    res.json({
      "error": "id must be a positive integer"
    })
  } else {
    fs.readFile('data.json', 'utf8', (err, data) => {
      data = JSON.parse(data);
      var place;
      for(const prop in data.notes) {
        if(data.notes[prop].id === parseInt(req.params.id)) {
          place = data.notes[prop];
          delete data.notes[prop];
        }
      }
      data = JSON.stringify(data);
      fs.writeFile('data.json', data, (err) => {
        if(err) {
          res.status(500);
          res.json({
            "error": "An unexpected error occurred."
          })
        } else if(place === undefined) {
          res.status(404);
          res.json({
            "error": `note with id ${req.params.id} does not exist`
          })
        } else {
          res.sendStatus(204)
        }
      })
    })
  }
});

app.put('/api/notes/:id', (req, res) => {
  if (req.params.id <= 0 || req.body.content === undefined || typeof req.params.id !== Number || (req.params.id % 1) !== 0) {
    res.status(400);
    res.json({
      "error": "id must be a positive integer"
    })
  } else {
    fs.readFile('data.json', 'utf8', (err, data) => {
      data = JSON.parse(data);
      var placeTwo;
      for(const prop in data.notes) {
        if(data.notes[prop].id === parseInt(req.params.id)) {
          data.notes[prop].content = req.body.content;
          placeTwo = data.notes[prop];
        }
      }
      data = JSON.stringify(data);
      fs.writeFile('data.json', data, (err) => {
        if(err) {
          res.status(500);
          res.json({
            "error": "An unexpected error occurred."
          })
        } else if (placeTwo === undefined) {
          res.status(404);
          res.json({
            "error": `note with id ${req.params.id} does not exist`
          })
        } else {
          res.status(200);
          res.json(placeTwo);
        }
      })
    })
  }
})

app.listen(3000, () => console.log('Listening on port 3000!'));
