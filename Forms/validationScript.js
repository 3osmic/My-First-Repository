// JavaScript code for form validation
// Prevent form from submitting

// Retrieve the input field value
const inputField = document.getElementById('inputField');
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

// Regular expression pattern for alphanumeric input
  const alphanumericExpression = /^[a-zA-Z0-9]+$/;
  const value1 = inputField.value;

// Check if the input value matches the pattern
  if (alphanumericExpression.test(value1)) {

// Valid input: display confirmation and submit the form
    alert('Valid Input. Form submitted.');
    event.target.submit();
  } 

// Invalid input: display error message
  else {
    alert('Error: Input is not alphanumeric.');
  }
});