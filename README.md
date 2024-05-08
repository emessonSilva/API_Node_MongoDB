# Node.js Express API with MongoDB

This is a simple Node.js Express API project with MongoDB integration. It provides basic CRUD (Create, Read, Update, Delete) operations for managing products.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/emessonSilva/API_Node_MongoDB.git

2. **Install dependencies:**
   cd API_Node_MongoDB
   npm install

3. **Set up MongoDB:**
   Update the MongoDB connection URL in server.js or .env file.

4. **Start the server:**
   npm start dev

5. **Usage:**
   After starting the server, you can use tools like Postman or Insomnia to interact with the API endpoints. Here are some example requests:
   - To show all the products: GET http://localhost:3000/api/products
   - To show one product: GET http://localhost:3000/api/products/:id
   - To create a new product: POST http://localhost:3000/api/products {"name" : "xxxx", "price" : xx, "quantity" : xx }
   - To update a product: PUT http://localhost:3000/api/products/:id {"name" : "xxxx", "price" : xx, "quantity" : xx }
   - To delete one product: DELETE http://localhost:3000/api/products/:id





   


