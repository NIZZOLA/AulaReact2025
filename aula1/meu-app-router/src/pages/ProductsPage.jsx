import React, { useState } from 'react';
import ProductSearch from '../components/ProductSearch';
import ProductList from '../components/ProductList';

// Dados mockados de produtos
const mockProducts = [
  { id: 1, name: 'Notebook', description: 'Notebook i7 16GB RAM', price: 4500.00, file: "notebook1.webp" },
  { id: 2, name: 'Smartphone', description: 'Smartphone 128GB', price: 2500.00, file: "smartphone.webp" },
  { id: 3, name: 'Tablet', description: 'Tablet 10 polegadas', price: 1200.00, file: "tablet.webp" },
  { id: 4, name: 'Fones de Ouvido', description: 'Fones Bluetooth', price: 350.00, file: "headphone.webp" },
  { id: 5, name: 'TV', description: 'TV LG 85 Pol', price: 5000.00, file: "tv.webp" }
];

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  const handleSearch = ({ description, minPrice, maxPrice }) => {
    let results = mockProducts;
    
    if (description) {
      results = results.filter(product => 
        product.description.toLowerCase().includes(description.toLowerCase())
      );
    }
    
    if (minPrice) {
      results = results.filter(product => 
        product.price >= parseFloat(minPrice)
      );
    }
    
    if (maxPrice) {
      results = results.filter(product => 
        product.price <= parseFloat(maxPrice)
      );
    }
    
    setFilteredProducts(results);
  };

  return (
    <div className="products-page">
      <h1>Página de Produtos</h1>
      <ProductSearch onSearch={handleSearch} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ProductsPage;