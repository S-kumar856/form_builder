
const Response = require("../schema/Response");
const Form = require("../schema/Form");

// Submit a response to a form
exports.submitResponse = async (req, res) => {
  try {
    const { formId, responses } = req.body;

    // Validate the form ID
    const formExists = await Form.findById(formId);
    if (!formExists) {
      return res.status(404).json({ message: "Form not found" });
    }

    // Save the response
    const response = new Response({ formId, responses });
    await response.save();

    res.status(201).json(response);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all responses for a specific form
exports.getResponsesByFormId = async (req, res) => {
  try {
    const responses = await Response.find({ formId: req.params.formId });
    res.json(responses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};