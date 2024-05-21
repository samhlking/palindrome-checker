const textInput = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const resultText = document.getElementById('result');
resultText.style.visibility = 'hidden';

function calcPalindrome(input) {
  input = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const inputReversed = [...input].reverse().join('');

  if (input === inputReversed) {
    resultText.innerText = `${textInput.value} is a palindrome`;
  } else {
    resultText.innerText = `${textInput.value} is not a palindrome`;
  }

  resultText.style.visibility = 'visible';
}

button.addEventListener("click", () => {
  if (textInput.value === '') {
    alert('Please input a value');
  } else {
    calcPalindrome(textInput.value);
  }
});

textInput.addEventListener("keypress", (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      button.click();
    }
  });