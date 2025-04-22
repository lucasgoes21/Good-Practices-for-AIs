// Importing required modules
const express = require('express'); // Importing Express framework
const bodyParser = require('body-parser'); // Importing body-parser middleware for parsing request bodies
const personRoutes = require('./routes/personRoutes'); // Importing person routes

// Creating an instance of an Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Setting up routes for person-related operations
app.use('/api/persons', personRoutes);

// Defining the port for the server to listen on
const PORT = process.env.PORT || 3000;

// Starting the server and logging a message to the console
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});