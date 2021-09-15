let counterValue = 0

const value = document.getElementById('value')
console.log(counterValue);
console.log(value);

const incrementByData = document.querySelector("[data-action = 'increment']")
console.log(incrementByData);

const decrementByData = document.querySelector("[data-action = 'decrement']")
console.log(decrementByData);

incrementByData.addEventListener('click', increment)
decrementByData.addEventListener('click', decrement)

function increment() {
    console.log('ok');
    counterValue += 1
    return value.innerText = counterValue
}
function decrement() {
    console.log('ok');
    counterValue -= 1
    return value.innerText = counterValue
}

