# TaskCraft

A full-stack Task Management application built using the MERN stack.

## Features

- User Authentication (JWT)
- Password Hashing using bcrypt
- Protected Routes
- Create Tasks
- View Tasks
- Update Tasks
- Delete Tasks
- MongoDB Atlas Integration
- Express REST APIs
- React Frontend
- Context API State Management
- Responsive UI

---

## Tech Stack

### Frontend
- React (Vite)
- React Router
- Context API
- Axios
- CSS Modules

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcrypt
- dotenv
- CORS

---

## Project Structure

```
final/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Backend Setup

```bash
cd server

npm install

npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

### Frontend Setup

```bash
cd client

npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## Environment Variables

Create a `.env` file inside the `server` folder.

Example:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## API Endpoints

### Authentication

```
POST /api/auth/register

POST /api/auth/login
```

### Tasks

```
GET /api/tasks

GET /api/tasks/:id

POST /api/tasks

PUT /api/tasks/:id

DELETE /api/tasks/:id
```

---

## Author

Bhuvi Bagga