const categoriesList = document.querySelector('#categories');
const categoriesItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
  const categoryTitle = item.firstElementChild;
  console.log(`Category: ${categoryTitle.textContent}`);

  const categoryElements = item.lastElementChild;
  console.log(`Elements: ${categoryElements.children.length}`);
})
