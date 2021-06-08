const consoleLog = document.getElementById('consoleLog');
const Alert = document.getElementById('alert');
const Prompt = document.getElementById('prompt');
consoleLog.addEventListener('click', () => {
 alert('Выводит информацию в консоль');
});
Alert.addEventListener('click', () => {
    alert('Показывает сообщение и ждёт, пока пользователь нажмёт кнопку «ОК».');
});
Prompt.addEventListener('click', () => {
    alert('Выводит модальное окно с заголовком title, полем для ввода текста, заполненным строкой по умолчанию default и кнопками OK/CANCEL.');
});