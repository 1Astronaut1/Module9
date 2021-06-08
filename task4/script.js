const hyperlink = document.querySelector('#hyperlink');
hyperlink.addEventListener('click', function(event) {
    hyperlink.textContent = prompt('Введите текст:');
    event.preventDefault();
});