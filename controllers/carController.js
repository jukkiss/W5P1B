// controllers/carController.js
const Car = require('../models/carModel');

// Function to fetch all cars
const getCars = async (req, res) => {
  try {
    const cars = await Car.find({});
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to add a new car
const addCar = async (req, res) => {
  const { make, model, year, color, price } = req.body;
  try {
    const newCar = new Car({ make, model, year, color, price });
    await newCar.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCar = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedCar = await Car.findByIdAndDelete(id);
      if (!deletedCar) {
        return res.status(404).json({ error: 'Car not found' });
      }
      res.status(200).json({ message: 'Car deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Function to get a specific car by ID
  const getCar = async (req, res) => {
    const { id } = req.params;
    try {
      const car = await Car.findById(id);
      if (!car) {
        return res.status(404).json({ error: 'Car not found' });
      }
      res.status(200).json(car);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Function to update a specific car by ID
  const patchCar = async (req, res) => {
    const { id } = req.params;
    try {
      const updatedCar = await Car.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedCar) {
        return res.status(404).json({ error: 'Car not found' });
      }
      res.status(200).json(updatedCar);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    getCars,
    addCar,
    deleteCar,
    getCar,
    patchCar
  };