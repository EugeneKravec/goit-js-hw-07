const input = document.getElementById('name-input')

const output = document.getElementById('name-output')

console.dir(input);
console.dir(output);

input.addEventListener('input', (event) => {
    if (event.currentTarget.value === '') {
        output.textContent = 'незнакомец'
    } else {
        output.textContent = event.currentTarget.value
    }
})