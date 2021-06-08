
const inputText = document.getElementById('tinput');
const duplicateField = document.getElementById('duplicateField');
const btn = document.getElementById('buttn');

inputText.addEventListener('input', () => {
  duplicateField.textContent = inputText.value;
});

btn.addEventListener('click', buttonclick);
function buttonclick(event) {
  console.log(inputText.value);
  inputText.value = '';
  duplicateField.textContent = '';
  event.preventDefault();
}