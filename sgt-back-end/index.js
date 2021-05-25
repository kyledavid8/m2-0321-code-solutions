const express = require('express');
const app = express();
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
    from "grades"`;
    db.query(sql)
    .then((result => {
      res.status(200).json(result.rows);
    }))
    .catch(err => {
      res.status(500).json({
        error: 'Something went wrong'
      })
    })
})

app.use(express.json())

app.post('/api/grades', (req, res) => {
  if(req.body.name === undefined || req.body.course === undefined || req.body.score === undefined || req.body.score < 1 || req.body.score > 100) {
    res.status(400).json({
      error: 'Something is wrong with your request parameters'
    })
    return;
  }
  const text = `
  INSERT INTO grades (name, course, score)
    VALUES($1, $2, $3)`
  const values = [req.body.name, req.body.course, req.body.score]
  db.query(text, values)
  .then((result) => {
    const sql = `
    select *
      from "grades"`;
    db.query(sql)
    .then((result) => {
      res.status(201).json(result.rows[result.rows.length - 1])
    })
    .catch((err) => {
      res.status(500).json({
        error: 'Something went wrong retrieving newly created grade'
      })
    })
  })
  .catch((err) => {
    res.status(500).json({
      error: 'Something went wrong'
    })
  })
})

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId)
  if (!Number.isInteger(gradeId) || gradeId <= 0 || req.body.name === undefined || req.body.course === undefined
    || req.body.score === undefined || req.body.score < 1 || req.body.score > 100) {
      res.status(400).json({
        error: 'Something is wrong with your request'
      })
      console.log(gradeId)
      return;
  }
  const text = `UPDATE grades
                  SET name = $1, course = $2, score = $3
                  WHERE "gradeId" = $4`
  const values = [req.body.name, req.body.course, req.body.score, gradeId];
  db.query(text, values)
  .then((result) => {
    const sql = `
    select *
      from "grades"`;
    db.query(sql)
      .then((result) => {
        for(let i = 0; result.rows.length >= i; i++) {
          if(result.rows[i].gradeId === gradeId) {
            res.status(201).json(result.rows[i])
            break;
          }
        }
      })
      .catch((err) => {
        res.status(404).json({
          error: `gradeId ${gradeId} does not exist`
        })
      })
  })
  .catch((err) => {
    res.status(500).json({
      error: "something went wrong querying the database"
    })
  })
})

app.delete('/api/grades/:gradeId', (req, res, err) => {
  const gradeId = parseInt(req.params.gradeId)
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'Invalid gradeId, try a positive integer'
    })
    return;
  }

  const sql = `
    select *
      from "grades"`;
  db.query(sql)
    .then((result) => {
      for (let i = 0; result.rows.length >= i; i++) {
        if (result.rows[i].gradeId === gradeId) {
          const text = `DELETE FROM grades
                  WHERE "gradeId" = $1`
          const values = [gradeId]
          db.query(text, values)
            .then((result) => {
              console.log('204')
              res.status(204).json();
            })
            .catch((err) => {
              res.status(500).json({
                error: "something went wrong querying the database"
              })
            })
          break;
        } else if (i === result.rows.length - 1) {
          console.log('404')
          res.status(404).json({
            error: `gradeId ${gradeId} does not exist`
          })
          return;
        }
      }

    })
    .catch((err) => {
      res.status(500).json({
        error: "something went wrong querying the database"
      })
    })
})

app.listen(3000, () => console.log('Listening on port 3000!'));
