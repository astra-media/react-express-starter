import React from 'react'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'

const HomeScreen = () => {
  return (
    <>
      <Meta title='Home' />
      <div>
        <h1>React + Express Starter Kit</h1>
        <p>
          A simple full-stack boilerplate template using{' '}
          <strong>
            Express, React + Vite, Redux Toolkit, and react-router-dom
          </strong>
          .
        </p>
        <p>Feel free to customize or extend it as needed.</p>

        <h2>Features</h2>
        <ul>
          <li>
            Pre-configured with <code>@reduxjs/toolkit</code> and
            <code>react-router-dom</code>.
          </li>
          <li>
            Integrated with <code>react-bootstrap</code> for basic styling.
          </li>
          <li>Simple navigation with a Navbar and demo pages.</li>
          <li>
            Example of backend API calls using <code>{`createApi`}</code> from
            Redux Toolkit.
          </li>
          <li>
            Local storage handling using <code>{`createSlice`}</code> from Redux
            Toolkit.
          </li>
          <li>
            Backend setup with <code>concurrently</code> and
            <code>nodemon</code> for efficient development.
          </li>
          <li>Proxy configured for smooth API calls during development.</li>
          <li>Uses CORS middleware to handle cross-origin requests.</li>
        </ul>

        <Link to={'/features'}>
          <p>Go to features screen</p>
        </Link>

        <h2>Directory Structure</h2>
        <pre>
          ├── backend/ # Express.js backend <br />
          ├── frontend/ # React + Vite frontend <br />
          ├── .env # Environment variables (NODE_ENV, PORT, etc.)
        </pre>

        <h2>Tech Stack</h2>
        <ul>
          <li>Frontend: React, Vite, Redux Toolkit, react-router-dom</li>
          <li>Backend: Express.js</li>
          <li>Styling: React-Bootstrap</li>
        </ul>

        <h2>Requirements</h2>
        <ul>
          <li>Node.js v18+</li>
          <li>Optional: React Developer Tools & Redux DevTools</li>
        </ul>

        <h2>Getting Started</h2>
        <pre>
          # Make copy of the repository <br />
          npx degit https://github.com/astra-media/react-express-starter.git
          example <br />
          cd ./example <br />
          or <br /># Clone the repository <br />
          git clone https://github.com/astra-media/react-express-starter.git
          example <br />
          cd ./example <br />
          <br /># Install dependencies <br />
          npm install <br />
          cd frontend <br />
          npm install
        </pre>

        <h2>Running the Development Server</h2>
        <pre>npm run dev # Starts both frontend and backend servers</pre>
        <p>
          Backend runs on <strong>http://localhost:5000/</strong>, frontend on{' '}
          <strong>http://localhost:5173/</strong>.
        </p>

        <h2>Available Scripts</h2>
        <ul>
          <li>
            <code>npm start</code> - Runs backend on
            <code>http://localhost:5000</code>
          </li>
          <li>
            <code>npm run server</code> - Runs backend using Nodemon
          </li>
          <li>
            <code>npm run client</code> - Starts the frontend dev server
          </li>
          <li>
            <code>npm run dev</code> - Runs both frontend and backend
          </li>
          <li>
            <code>npm run build</code> - Bundles the app for production
          </li>
        </ul>

        <h2>License</h2>
        <p>
          This project is licensed under the MIT License. See the{' '}
          <Link
            to={
              'https://github.com/astra-media/react-express-starter/blob/main/License'
            }
            target='_blank'
          >
            LICENSE
          </Link>{' '}
          file for details.
        </p>
      </div>
    </>
  )
}

export default HomeScreen
