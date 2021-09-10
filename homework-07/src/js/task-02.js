const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsById = document.getElementById('ingredients')

// 1-й способ через reduce

// const addIngredients = ingredients.reduce((acc, elem) => {
//   return acc + `<li>${elem}</li>`
// }, '')
// ingredientsById.insertAdjacentHTML('beforeend', addIngredients)

// 2-й способ через document.createElement
const newElems = ingredients.map((e) => {
  const ingredient = document.createElement('li')
  ingredient.textContent = e
  return ingredient
})
ingredientsById.append(...newElems)



console.log(ingredientsById);

