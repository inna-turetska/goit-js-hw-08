
const categories = document.querySelectorAll('.item');

[...categories].forEach(function (category) {
  const categoryName = category.querySelector('h2').textContent;
  const elements = category.querySelectorAll('ul > li');
  
  console.log(`Category: ${categoryName} `);
  console.log(`Elements: ${elements.length}`);
});

console.log(`Number of categories: ${categories.length}`)

