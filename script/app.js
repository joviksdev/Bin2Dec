const form = document
  .querySelector('.form-group')
  .addEventListener('submit', processForm);

// Handle form
function processForm(e) {
  e.preventDefault();
  const binValue = document.querySelector('.binary-value').value;

  const result = document.querySelector('.result');

  if (isValid(binValue, e.target)) {
    const convert = parseInt(binValue, 2);
    result.innerHTML = `<p>Decimal Number: <strong>${convert}</strong></p>`;
  }
}

// Validate user Input

const isValid = number => {
  const regExp = /^[0-1]+$/;
  if (!number.match(regExp)) {
    const error = document.querySelector('.error');
    error.textContent = 'Please enter a valid Binary number';

    // Clear Error
    setTimeout(() => {
      error.textContent = '';
    }, 3000);

    return false;
  }

  return true;
};
