const quantityOfcategories = document.querySelectorAll('li.item')
console.log(quantityOfcategories);
console.log(`В списке ${quantityOfcategories.length} категории.`);

const categoryOfAnimals = document.querySelectorAll("li.item > h2")
const quantityOfAnimals = document.querySelectorAll("li.item > ul")

categoryOfAnimals.forEach((elem, i) => {
    console.log(`Категория: ${elem.innerText}`);
    console.log(`Количество элементов: ${quantityOfAnimals[i].children.length}`);
})