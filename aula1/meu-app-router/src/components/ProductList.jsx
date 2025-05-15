import React from 'react';
import styles from './ProductList.module.css';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  return (
    <div className={styles.productList}>
      <h2>Produtos Encontrados {products.length}</h2>
      {products.length === 0 ? (
        <p>Nenhum produto encontrado</p>
      ) : (
        <ul>
           {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;