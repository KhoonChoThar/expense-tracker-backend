# expense-tracker-backend

This is the backend application for <Project Name>. It is built with Node.js, Express, and MongoDB.

## Installation

Before you begin, ensure you have Node.js and MongoDB installed on your local machine.

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd expense-tracker-backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Set up environment variables:

   - Create a `.env` file in the root directory of the project.
   - Add MongoDB connection string and other necessary environment variables to the `.env` file:

     ```plaintext
     MONGODB_URI=mongodb://localhost:27017/mydatabase
     PORT=3001
     ```

     Replace `mongodb://localhost:27017/mydatabase` with your MongoDB connection string.

## Usage

To start the server, run:

```bash
npm start
```

The server will start listening on the port specified in the `.env` file (default is port 3001).

## Development

To run the server in development mode with automatic reload on file changes, you can use:

```bash
npm run dev
```

This will start the server using `nodemon`, allowing for a smoother development experience.

## Dependencies

- [cors](https://www.npmjs.com/package/cors): Middleware for enabling CORS in your Express application.
- [dotenv](https://www.npmjs.com/package/dotenv): Library for loading environment variables from a `.env` file.
- [express](https://www.npmjs.com/package/express): Web framework for building Node.js applications.
- [mongoose](https://www.npmjs.com/package/mongoose): MongoDB object modeling tool designed to work in an asynchronous environment.
- [nodemon](https://www.npmjs.com/package/nodemon): Utility that monitors for changes in your source code and automatically restarts your server.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README according to your project's specific requirements, adding more details about the functionalities, endpoints, and any additional instructions for running or configuring the application.