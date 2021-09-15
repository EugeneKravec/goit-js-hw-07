// Получаю доступы к инпуту и к контенту
const inputCntrol = document.getElementById('font-size-control')
console.dir(inputCntrol);
const inputText = document.getElementById('text')
console.log(inputText);

// Создаю функцию для изменения значения шрифта через инпут
function changeFontSize() {
    inputText.style.fontSize = `${inputCntrol.value}px`
}
// Вариант стрелочной функции
// const changeFontSize = () => inputText.style.fontSize = `${inputCntrol.value}px`

// Добавляю слушателя, чтобы протестировать скрипт

inputCntrol.addEventListener('input', changeFontSize)