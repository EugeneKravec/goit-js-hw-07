// Получаю доступ к инпуту
const input = document.getElementById('validation-input')
console.dir(input);

// Полчаю доступ к сво-ву длины в этом инпуте
const inputLength = parseInt(input.getAttribute('data-length'))
console.log(inputLength);

// Создаю функцию для обработки изменения в инпуте

function changeInput() {
    if (inputLength === input.value.length) {
        input.classList.add('valid')
        input.classList.remove('invalid')
    } else {
        input.classList.add('invalid')
        input.classList.remove('valid')
    }
}

// Создаю слушателя, чтобы все заработало

// input.addEventListener('focus', changeInput)
input.addEventListener('blur', changeInput)

// input.addEventListener('input', changeInput)
