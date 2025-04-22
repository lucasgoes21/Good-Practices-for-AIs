// Importing the required validation library
const { body, validationResult } = require('express-validator');

// Validation rules for creating a person
const createPersonValidation = [
    body('name')
        .isString()
        .withMessage('Name must be a string')
        .notEmpty()
        .withMessage('Name is required'),
    body('age')
        .isInt({ min: 0 })
        .withMessage('Age must be a positive integer')
        .notEmpty()
        .withMessage('Age is required')
];

// Validation rules for updating a person
const updatePersonValidation = [
    body('name')
        .optional()
        .isString()
        .withMessage('Name must be a string'),
    body('age')
        .optional()
        .isInt({ min: 0 })
        .withMessage('Age must be a positive integer')
];

// Middleware to handle validation errors
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

// Exporting the validation rules and middleware
module.exports = {
    createPersonValidation,
    updatePersonValidation,
    validate
};