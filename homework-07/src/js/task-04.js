const counterValue = parseInt(document.getElementById('value').innerText, 10)
console.dir(counterValue);

const decrementByData = document.querySelector('data-action')
console.log(decrementByData);

function increment() {
    return counterValue += 1
}
function decrement() {
    return counterValue -= 1
}

