import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

const port = process.env.PORT || 8000

const __dirname = path.resolve()

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

app.listen(port, () => console.log(`Server running on port ${port}`))
