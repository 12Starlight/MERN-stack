const Validator = require('validator');
const validText = require('./valid-text');


module.exports = function validateNoteInput(data) {
  let errors = {};

  data.title = validText(data.title) ? data.title : '';
  data.text = validText(data.text) ? data.text : '';

  if (!Validator.isLength(data.text), { min: 5, max: 255 }) {
    errors.text = 'Note must be between 5 and 255 characters';
  }

  if (!Validator.isEmpty(data.text)) {
    errors.text = 'Text field is required';
  }


  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
} 