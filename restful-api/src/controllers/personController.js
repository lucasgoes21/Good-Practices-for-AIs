const personModel = require('../models/personModel'); // Importing the person model for database operations
class PersonController {

    // Method to create a new person
    createPerson = async(req, res)=> {
        try {
            const personData = req.body; // Get data from request body
            const newPerson = await personModel.create(personData); // Create a new person in the database
            res.status(201).json(newPerson); // Respond with the created person and a 201 status
        } catch (error) {
            res.status(400).json({ error: error.message }); // Handle errors and respond with a 400 status
        }
    }

    // Method to update an existing person
    updatePerson = async(req, res) => {
        try {
            const { id } = req.params; // Get the person ID from the request parameters
            const updatedData = req.body; // Get updated data from request body
            const updatedPerson = await personModel.update(id, updatedData); // Update the person in the database
            if (!updatedPerson) {
                return res.status(404).json({ error: 'Person not found' }); // Handle case where person is not found
            }
            res.json(updatedPerson); // Respond with the updated person
        } catch (error) {
            res.status(400).json({ error: error.message }); // Handle errors and respond with a 400 status
        }
    }

    // Method to delete a person
    deletePerson = async(req, res) =>{
        try {
            const { id } = req.params; // Get the person ID from the request parameters
            const deletedPerson = await personModel.remove(id); // Delete the person from the database
            if (!deletedPerson) {
                return res.status(404).json({ error: 'Person not found' }); // Handle case where person is not found
            }
            res.status(204).send(); // Respond with a 204 status for successful deletion
        } catch (error) {
            res.status(400).json({ error: error.message }); // Handle errors and respond with a 400 status
        }
    }

    // Method to get all persons
    getPersons = async(req, res)=>{
        try {
            const persons = await personModel.findAll(); // Retrieve all persons from the database
            res.json(persons); // Respond with the list of persons
        } catch (error) {
            res.status(500).json({ error: error.message }); // Handle errors and respond with a 500 status
        }
    }
}

module.exports = PersonController; // Export the PersonController class for use in routes