
const Response = require("../schema/Response");
const Form = require("../schema/Form");


// validate input fields
const validateResponse = (input, value) => {
  if (!value) return "This field is required.";

  switch (input.type) {
    case "email":
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return "Invalid email address.";
      break;
    case "number":
      if (isNaN(value)) return "Must be a number.";
      if (!/^\d{10}$/.test(value))
        return "Mobile number must be exactly 10 digits.";
      break;
    case "password":
      if (value.length < 8) return "Password must be at least 8 characters.";
      break;
    case "date":
      if (isNaN(Date.parse(value))) return "Invalid date.";
      break;
    default:
      if (value.length < 3) return "Input must be at least 3 characters.";
  }

  return null; // No error
};

// Submit a response to a form
exports.submitResponse = async (req, res) => {
  try {
    const { formId, responses } = req.body;

    // Validate the form ID
    const formExists = await Form.findById(formId);
    if (!formExists) {
      return res.status(404).json({ message: "Form not found" });
    }

    const errors = {};

    responses.forEach((response) => {
      const input = formExists.inputs.find((input) => input._id === response.inputId);
      if (!input) return;

      const error = validateResponse(input, response.value);
      if (error) {
        errors[response.inputId] = error;
      }
    });

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ errors });
    }

    // Save the response to the database
    const newResponse = new Response({ formId, responses });
    await newResponse.save();

    res.status(201).json(newResponse);
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