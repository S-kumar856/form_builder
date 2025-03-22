const mongoose = require("mongoose");
const Form = require("../schema/Form");

const responseSchema = new mongoose.Schema({
  formId: { type: mongoose.Schema.Types.ObjectId, ref: "Form", required: true }, 
  responses: [
    {
      inputId: { type: mongoose.Schema.Types.ObjectId, required: true }, 
      value: { type: String, required: true }, 
    },
  ],
  createdAt: { type: Date, default: Date.now }, 
});

module.exports = mongoose.model("Response", responseSchema);