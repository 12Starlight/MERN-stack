const validText = (str) => {
  // First makes sure it is a stiring, trim() takes away the empty spaces
  return typeof str === 'string' && str.trim().length > 0; 
}


module.exports = validText; 