# E-Commerce Website Backend Documentation

## Overview
The E-Commerce Website backend is built using Node.js and Express. It provides RESTful APIs for user authentication, product management, and a campus marketplace for students to buy and sell used items. 

## Features
- User authentication (registration and login)
- Product management (add, update, retrieve products)
- Campus marketplace (list, add, delete items)
- Recommendation system for personalized product suggestions
- Virtual try-on functionality for products

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd E-Commerce Website/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Configuration
- Update the database configuration in `database/config.js` with your database connection details.

### Running the Application
1. Start the server:
   ```
   npm start
   ```

2. The server will run on `http://localhost:3000` by default.

### API Endpoints
- **Authentication**
  - `POST /api/auth/register`: Register a new user
  - `POST /api/auth/login`: Login an existing user

- **Products**
  - `GET /api/products`: Retrieve all products
  - `POST /api/products`: Add a new product
  - `PUT /api/products/:id`: Update a product
  - `DELETE /api/products/:id`: Delete a product

- **Marketplace**
  - `GET /api/marketplace`: List all marketplace items
  - `POST /api/marketplace`: Add a new marketplace item
  - `DELETE /api/marketplace/:id`: Delete a marketplace item

### Testing
- To run tests, use:
  ```
  npm test
  ```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for details.