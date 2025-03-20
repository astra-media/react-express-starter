# React + Express Starter Kit

A simple full-stack boilerplate template using **Express, React + Vite, Redux Toolkit, and react-router-dom**.  
This template provides a solid foundation for developing modern web applications.  
Feel free to customize or extend it as needed.

The frontend is built using the official Vite template (`npm create vite@latest`) with additional configurations.  
The project is organized into two main folders:

- **backend/** – Express.js server
- **frontend/** – React + Vite application

## Features

- **Pre-configured** with `@reduxjs/toolkit` and `react-router-dom`.
- **Integrated styling** using `react-bootstrap` with basic styles.
- **Navigation**: A simple Navbar with `Home` and `Features` pages to demonstrate routing.
- **Backend API calls** using `{ createApi }` from `@reduxjs/toolkit`.
- **Local storage example** with `{ createSlice }` from `@reduxjs/toolkit`.
- **Developer tools**: Includes `concurrently` and `nodemon` for efficient backend development.
- **Proxy setup**: The frontend uses a proxy for API calls during development, making deployment on a single server seamless.
- **CORS middleware**: Configured to handle cross-origin requests and prevent browser firewall issues.

## Directory Structure

```
├── backend/      # Express.js backend
├── frontend/     # React + Vite frontend
├── .env          # Environment variables (NODE_ENV, PORT, etc.)
```

## Tech Stack

- **Frontend:** React, Vite, Redux Toolkit, react-router-dom
- **Backend:** Express.js
- **Styling:** React-Bootstrap

## Requirements

- **Node.js v18+**
- _(Optional)_ React Developer Tools & Redux DevTools for debugging

## Getting Started

Copy or Clone this repository and install dependencies:

```sh
# Make copy of the repository
npx degit https://github.com/astra-media/react-express-starter.git example
cd ./example

or
# Clone the repository
git clone https://github.com/astra-media/react-express-starter.git example
cd ./example

# Install dependencies for backend and frontend
npm install
cd frontend
npm install
```

### Running the Development Server

```sh
npm run dev  # Starts both frontend and backend servers
```

> The backend runs on **http://localhost:5000/**, and the frontend on **http://localhost:5173/**.

### Building for Production

```sh
npm run build  # Bundles the app and creates a 'dist' directory
```

## Available Scripts

| Command          | Description                                                    |
| ---------------- | -------------------------------------------------------------- |
| `npm start`      | Runs `backend/server.js` using Node.js (http://localhost:5000) |
| `npm run server` | Runs `backend/server.js` using Nodemon                         |
| `npm run client` | Starts the frontend development server (http://localhost:5173) |
| `npm run dev`    | Runs both frontend and backend in development mode             |
| `npm run build`  | Bundles the frontend for production                            |

## Related Projects

- **[nextjs-express-starter][2]** – A Next.js full-stack template with a custom Express server

## License

This project is licensed under the MIT License. See the [LICENSE][1] file for details.

[1]: https://github.com/astra-media/react-express-starter/blob/main/License 'LICENSE'
[2]: https://github.com/astra-media/nextjs-express-starter.git 'nextjs-express-starter'
