# E-Commerce Backend API

This project is a backend API for an e-commerce website built with Node.js, Express, and MongoDB. It handles user management, product catalog, and order processing.

## Features
- User registration and authentication
- Product management (CRUD operations)
- Order management
- MongoDB integration for data persistence

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose (for MongoDB object modeling)

## API Endpoints

### User Routes
- `POST /users/register` - Register a new user
- `POST /users/login` - User login

### Product Routes
- `GET /products` - Retrieve all products
- `POST /products` - Add a new product
- `PUT /products/:id` - Update a product
- `DELETE /products/:id` - Delete a product

### Order Routes
- `POST /orders` - Create a new order
- `GET /orders/:id` - View a specific order
- `GET /orders` - View all orders

