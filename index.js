// Replace with your actual API endpoint
const API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json';

// Function to fetch products from API
async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

// Function to render products on the page
async function renderProducts() {
    const productList = document.getElementById('productList');
    const products = await fetchProducts();
    
    // Clear existing products
    productList.innerHTML = '';

    // Render each product
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('bg-white', 'p-4', 'rounded', 'shadow-md');

        const productName = document.createElement('h2');
        productName.classList.add('text-lg', 'font-semibold', 'mb-2');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.classList.add('text-gray-600', 'mb-2');
        productPrice.textContent = `$${product.price}`;

        const productDescription = document.createElement('p');
        productDescription.classList.add('text-gray-500', 'text-sm', 'mb-4');
        productDescription.textContent = product.description;

        const buyButton = document.createElement('button');
        buyButton.classList.add('bg-blue-500', 'hover:bg-blue-600', 'text-white', 'px-4', 'py-2', 'rounded', 'focus:outline-none');
        buyButton.textContent = 'Buy';
        buyButton.addEventListener('click', () => {
            alert(`Buying ${product.name}`);
            // Implement actual buy functionality here
        });

        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(productDescription);
        productCard.appendChild(buyButton);

        productList.appendChild(productCard);
    });
}

// Initial load of products
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});
