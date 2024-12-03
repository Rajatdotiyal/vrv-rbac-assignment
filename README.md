# Authentication, Authorization and Role-Based Access Control (RBAC)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Routes](#routes)
  - [Authentication Routes](#authentication-routes)
  - [User Routes](#user-routes)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)

## Overview

This project implements a secure authentication system with role-based access control (RBAC) using Node.js, Express, MongoDB, and JWT. It includes signup and signin functionalities and allows access to specific routes based on user roles.

## Features

- Secure user authentication using JSON Web Tokens (JWT)
- Role-based access control (`Admin`, `Moderator`, `User`)
- Middleware for protecting routes
- Basic security features with `helmet`, `cors`, and rate limiting
- MongoDB integration with Mongoose for database interactions

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/)
- A code editor like [VS Code](https://code.visualstudio.com/)

## Installation

1. Clone the repository:
   git clone https://github.com/Rajatdotiyal/vrv-rbac-assignment.git
   cd node-auth-rbac

2. Install dependencies:
   npm install

3. Configure environment variables: Create a .env file in the root directory and add the required variables:
   PORT=3000
   MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database_name>
   JWT_SECRET=Your_Top_Secret_Key
   JWT_EXPIRY=1h

4. Start the server:
   npm start

## Environment Variables
| Variable      |               Description                |
|:--------------|:----------------------------------------:|
| PORT          | Port for the application (e.g., 3000)    |
| MONGO_URI     | MongoDB connection URI                   |
| JWT_SECRET    | Secret key for signing JWTs              |
| JWT_EXPIRY    | Expiry duration for JWTs (e.g., 1h)      |


## Routes
1. Authentication Routes

| Method |        Endpoint      |           Description            |
|:-------|:--------------------:|:--------------------------------:|
| POST   | 	/api/v1/auth/signup | 	Register a new user            |
| POST   |  /api/v1/auth/signin |  Login a user and generate a JWT |

2. User Routes

| Method |        Endpoint          |       Role Allowed      |   Description                    |
|:-------|:------------------------:|------------------------:|:--------------------------------:|
| GET   | 	/api/v1/users/admin     |  Admin                  | Access for admins only           |
| GET   |  	/api/v1/users/moderator |  Moderator              | Access for moderators only       |
| GET   |  	/api/v1/users/user      |  User, Admin, Moderator | Access for all roles             |

## Technologies Used

- **Node.js**: JavaScript runtime for building the server
- **Express**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing user data
- **Mongoose**: ODM for MongoDB
- **JWT**: Token-based authentication
- **bcryptjs**: Password hashing
- **helmet**: Security middleware
- **cors**: Enable Cross-Origin Resource Sharing
- **Rate Limiting**: Prevent excessive requests

## Project Structure

.
├── controllers
│   └── authController.js  # Authentication logic
├── middleware
│   └── authMiddleware.js  # Route protection middleware
├── models
│   └── userModel.js       # User schema
├── routes
│   ├── authRoutes.js      # Authentication routes
│   └── userRoutes.js      # User-specific routes
├── .env                   # Environment variables
├── server.js              # Entry point of the application
└── package.json           # Dependencies and scripts

### Explanation:
- **controllers/**: Contains the logic for handling requests.
- **middleware/**: Includes middleware functions for route protection or other logic.
- **models/**: Defines the schemas for MongoDB models.
- **routes/**: Contains route handlers for the application, divided into logical sections.
- **.env**: Stores environment variables.
- **server.js**: The entry point for the application where the server is initialized.
- **package.json**: Defines the project dependencies and scripts.

