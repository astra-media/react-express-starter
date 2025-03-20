import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import features from './data/features.js'

dotenv.config()

const app = express()

const port = process.env.PORT || 8000

const __dirname = path.resolve()

// Middleware
app.use(express.json())
app.use(cors()) // If Frontend and backend from the same server, CORS isn't necessary in production
app.use(bodyParser.json())
app.use(morgan('dev'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/dist')))

  //any route that is not api will be redirected to index.html
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.send('API is running...')
  })
}

app.get('/api/features', (req, res) => {
  res.send(features)
})

app.listen(port, () => console.log(`Server running on port ${port}`))
