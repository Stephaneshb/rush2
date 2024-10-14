function searchProducts() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const productCards = document.querySelectorAll('.product-card'); 

  productCards.forEach(product => {
      const productName = product.querySelector('h4').textContent.toLowerCase();
      const productCategory = product.querySelector('h5').textContent.toLowerCase();
    
      if (productName.includes(searchTerm) || productCategory.includes(searchTerm)) {
          product.style.display = 'block'; 
      } else {
          product.style.display = 'none';
      }
  });
}

document.getElementById('search-input').addEventListener('input', searchProducts);


const rangeMin = document.getElementById('range-min');
const rangeMax = document.getElementById('range-max');
const priceMinOutput = document.getElementById('price-min');
const priceMaxOutput = document.getElementById('price-max');

rangeMin.addEventListener('input', function() {
    if (parseInt(rangeMin.value) > parseInt(rangeMax.value) - 10) {
        rangeMin.value = rangeMax.value - 10; 
    }
    priceMinOutput.textContent = rangeMin.value;
});

rangeMax.addEventListener('input', function() {
    if (parseInt(rangeMax.value) < parseInt(rangeMin.value) + 10) {
        rangeMax.value = rangeMin.value + 10; 
    }
    priceMaxOutput.textContent = rangeMax.value;
});
