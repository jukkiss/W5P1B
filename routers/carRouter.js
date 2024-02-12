// router/carRouter.js
const express = require('express');
const router = express.Router();
const { getCars, addCar, deleteCar, getCar, patchCar } = require('../controllers/carController');

// Define routes
router.get('/cars', getCars); // Route for fetching all cars
router.post('/cars', addCar); // Route for adding a new car
router.delete('/cars/:id', deleteCar); // Route for deleting a phonebook
router.get('/cars/:id', getCar); // Route for fetching a specific phonebook by ID
router.patch('/cars/:id', patchCar); // Route for updating a specific phonebook by ID

module.exports = router;
