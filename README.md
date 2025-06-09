# Authentication Demo

A simple authentication system with login and signup functionality, built with Node.js and Express.

## Features

- User registration (signup)
- User login
- JWT-based authentication
- Protected dashboard route
- Responsive design
- Form validation
- Error handling

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
npm install
```

3. Create a `public` directory and move the HTML files into it:
```bash
mkdir public
mv login.html signup.html dashboard.html public/
```

## Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to:
```
http://localhost:3000
```

## API Endpoints

- `POST /api/signup` - Register a new user
  - Body: `{ "name": "string", "email": "string", "password": "string" }`

- `POST /api/login` - Login user
  - Body: `{ "email": "string", "password": "string" }`

- `GET /api/verify-token` - Verify JWT token
  - Headers: `Authorization: Bearer <token>`

## Security Notes

- This is a demo application. For production use:
  - Use environment variables for sensitive data
  - Implement proper password policies
  - Use HTTPS
  - Add rate limiting
  - Use a proper database instead of in-memory storage
  - Add input sanitization
  - Implement proper error handling
  - Add logging

## Project Structure

```
.
├── public/
│   ├── login.html
│   ├── signup.html
│   └── dashboard.html
├── server.js
├── package.json
└── README.md
``` 