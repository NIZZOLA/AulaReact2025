import React, { useState, useEffect } from 'react';
import ProductSearch from '../components/ProductSearch';
import ProductList from '../components/ProductList';

const ProductsPage = () => {
  const [products, setProducts] = useState([]); // Estado para os produtos da API
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Estado para loading
  const [error, setError] = useState(null); // Estado para erros

  // Função para buscar produtos da API
  const fetchProducts = async () => {
    try {
      const response = await fetch('https://localhost:7171/api/Produtos', {
        method: 'GET',
        headers: {
          'accept': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Erro ao carregar produtos');
      }
      
      const data = await response.json();
      
      // Mapear os dados da API para o formato esperado pelo seu componente
      const formattedProducts = data.map(product => ({
        id: product.codigo,
        name: product.descricao,
        description: `${product.descricao} (${product.unidade})`,
        price: product.preco,
        file: product.imagem
      }));
      
      setProducts(formattedProducts);
      setFilteredProducts(formattedProducts);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  // Carregar produtos quando o componente montar
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearch = ({ description, minPrice, maxPrice }) => {
    let results = products; // Agora usamos os produtos da API
    
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

  // Exibir mensagem de loading
  if (isLoading) {
    return <div className="products-page">Carregando produtos...</div>;
  }

  // Exibir mensagem de erro
  if (error) {
    return <div className="products-page">Erro: {error}</div>;
  }

  return (
    <div className="products-page">
      <h1>Página de Produtos</h1>
      <ProductSearch onSearch={handleSearch} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ProductsPage;