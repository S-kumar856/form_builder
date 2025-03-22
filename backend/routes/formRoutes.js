const express = require('express');
const router = express.Router();
const { createForm, getAllForms, getFormById, updateForm, deleteForm } = require('../controllers/formController');

// Create a new form
router.post("/forms", createForm);

// Get all forms
router.get("/forms", getAllForms);

// Get a specific form by ID
router.get("/forms/:id", getFormById);

// Update a form by ID
router.put("/forms/:id", updateForm);

// Delete a form by ID
router.delete("/forms/:id", deleteForm);

module.exports = router;