
const Form = require("../schema/Form");

// Create a new form
exports.createForm = async (req, res) => {
  try {
    const form = new Form(req.body);
    await form.save();
    res.status(201).json(form);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all forms
exports.getAllForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(201).json(forms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific form by ID
exports.getFormById = async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) return res.status(404).json({ message: "Form not found" });
    res.status(201).json(form);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a form by ID
exports.updateForm = async (req, res) => {
  try {
    const form = await Form.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!form) return res.status(404).json({ message: "Form not found" });
    res.status(201).json(form);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a form by ID
exports.deleteForm = async (req, res) => {
  try {
    const form = await Form.findByIdAndDelete(req.params.id);
    if (!form) return res.status(404).json({ message: "Form not found" });
    res.status(201).json({ message: "Form deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};