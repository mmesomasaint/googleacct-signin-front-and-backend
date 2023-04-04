const express = require('express')
const sqlite3 = require('sqlite3').verbose()

const app = express()
const path = require('path')
const db = new sqlite3.Database(':memory:')

app.use(express.static(path.join(__dirname, 'client', 'dist'))) // Serve static pages from dir/client/dist
app.use(express.json()) // Used to parse JSON bodies
db.serialize(() => {
  db.run(`CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    password TEXT
  );`)
})

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

app.post('/api/email', (req, res) => {
  const email = req.body.email

  // insert the email into the users table
  db.run(`INSERT INTO users (email) VALUES (?)`, [email], function (err) {
    if (err) {
      console.error(err.message)
      res.status(500).send('Failed to insert email into database')
    } else {
      console.log(
        `Email '${email}' inserted into users table with id ${this.lastID}`
      )
      res.status(200).send(`${email}`)
    }
  })

  // Close db connection.
  db.close()
})

app.post('/api/password', (req, res) => {
  const { email, password } = req.body

  // Update the user with his email.
  db.run(
    `UPDATE users SET password = ? WHERE email = ?`,
    [newPassword, email],
    (err) => {
      if (err) {
        res.status(500).send('Password error')
        return console.error(err.message)
      }
      res.status(200).send(`Password updated`)
      return console.log(`Password updated for user with email ${email}`)
    }
  )

  // Close db connection.
  db.close()
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
