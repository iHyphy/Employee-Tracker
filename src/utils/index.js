/**
 * Validates that the input is not empty.
 * @param {string} input - The input string to validate.
 * @return {boolean|string} - True if valid, or an error message if not.
 */
const validateNotEmpty = (input) => {
  if (input.trim() === '') return 'This field cannot be empty.';
  return true;
};

/**
 * Validates that the input is a positive number.
 * @param {string} input - The input string to validate.
 * @return {boolean|string} - True if valid, or an error message if not.
 */
const validateNumber = (input) => {
  const number = parseFloat(input);
  if (isNaN(number) || number <= 0) return 'Please enter a positive number.';
  return true;
};

/**
 * Formats a list of department, role, or employee objects for inquirer choices.
 * This is useful when you need to select an item from a list in prompts.
 * @param {Array} items - The items to format.
 * @param {string} nameKey - The key in the item objects that contains the name to display.
 * @param {string} valueKey - The key in the item objects that contains the value to return.
 * @return {Array} - An array of objects with name and value keys.
 */
const formatInquirerChoices = (items, nameKey = 'name', valueKey = 'id') => {
  return items.map(item => ({
    name: item[nameKey],
    value: item[valueKey]
  }));
};

module.exports = {
  validateNotEmpty,
  validateNumber,
  formatInquirerChoices,
};
