document.querySelector('.form-group').addEventListener('submit', processForm);

// Handle form
function processForm(e) {
  e.preventDefault();
  const binValue = document.querySelector('.binary-value').value;
  const result = document.querySelector('.form-output');

  const error = document.querySelector('.error');

  if (isValid(binValue, error)) {
    const convert = parseInt(binValue, 2);
    result.innerHTML = `<p>Result: <strong>${convert} base 10</strong></p>`;
  }
}

// Validate user Input

const isValid = (number, error) => {
  const regExp = /^[0-1]+$/;
  if (!number.match(regExp)) {
    error.textContent = 'Please enter a valid Binary number';
    setTimeout(() => {
      error.textContent = '';
    }, 3000);

    return false;
  }

  return true;
};
