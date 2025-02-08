# Bike Store API

This project is a Node.js API developed using TypeScript, Express.js, and MongoDB. The API manages two collections: **Products** and **Orders**, where the product in this context is a bike.

## API Endpoints

### Products Endpoints

1. **Create a Bike**  
   **POST**: `http://localhost:5000/api/products`

2. **Get a Specific Bike**  
   **GET**: `http://localhost:5000/api/products/:productId`

3. **Update a Bike**  
   **PUT**: `http://localhost:5000/api/products/:productId`

4. **Delete a Bike**  
   **DELETE**: `http://localhost:5000/api/products/:productId`

5. **Get All Bikes**  
   **GET**: `http://localhost:5000/api/products/`

### Orders Endpoints

1. **Order a Bike**  
   **POST**: `http://localhost:5000/api/orders/`

2. **Revenue Calculation**  
   **GET**: `http://localhost:5000/api/orders/revenue`

## Installation and Setup

Follow these steps to install and run the project on your local machine:

1. **Clone the repository**

2. **Create a `.env` file**
   Add the following environment variables:

   ```env
   PORT=your_desired_port
   DATABASE_URL=your_mongodb_connection_string
   ```

   Example:

   ```env
   PORT=5000
   DATABASE_URL=mongodb://localhost:27017/bikestore
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Build the project:**

   ```bash
   npm run build
   ```

5. **Run the project in production mode:**

   ```bash
   npm run start
   ```

6. **Run the project in development mode:**
   ```bash
   npm run start:dev
   ```

## Usage

- Use a tool like Postman or Insomnia to test the API endpoints.
- Ensure your MongoDB instance is running and correctly connected using the `DATABASE_URL` specified in the `.env` file.

## Project Structure

- **src/**: Contains the source code of the application.
- **dist/**: Holds the compiled JavaScript files after building.
- **.env**: Environment configuration file (ignored by version control).

## Available Scripts

- `npm install`: Installs project dependencies.
- `npm run build`: Compiles TypeScript files.
- `npm run start`: Starts the application in production mode.
- `npm run start:dev`: Starts the application in development mode.
