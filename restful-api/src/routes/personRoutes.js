
// Importing necessary modules
const express = require('express');
const personModel = require('../models/personModel'); // Certifique-se de que este arquivo existe
const personController = require('../controllers/personController');
const { createPersonValidation, updatePersonValidation, validate } = require('../validations/personValidation');

// Creating a router instance
const router = express.Router();
const personController2 = new personController();

// Route to create a new person
// POST /api/persons
router.post('/', createPersonValidation, validate, personController2.createPerson);

// Route to get all persons
// GET /api/persons
router.get('/', personController2.getPersons);

// Route to update a person by ID
// PUT /api/persons/:id
router.put('/:id', updatePersonValidation, validate, personController2.updatePerson);

// Route to delete a person by ID
// DELETE /api/persons/:id
router.delete('/:id', personController2.deletePerson);

// Exporting the router to be used in the app
module.exports = router;