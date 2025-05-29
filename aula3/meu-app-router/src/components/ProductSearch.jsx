import React, { useState } from 'react';
import styles from './ProductSearch.module.css';

const ProductSearch = ({ onSearch }) => {
  const [description, setDescription] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
      description,
      minPrice,
      maxPrice
    });
  };

  return (
    <div className={styles.productSearch}>
      <h2>Buscar Produtos</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Descrição:</label>
          <input 
            type="text" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Digite a descrição"
            className={styles.input}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Valor inicial:</label>
          <input 
            type="number" 
            value={minPrice} 
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Valor mínimo"
            className={styles.input}
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Valor final:</label>
          <input 
            type="number" 
            value={maxPrice} 
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Valor máximo"
            className={styles.input}
          />
        </div>
        <button
          type="button"
          className={styles.button}
          onClick={() => {
            setDescription('');
            setMinPrice('');
            setMaxPrice('');
            if (onSearch) {
              onSearch({ description: '', minPrice: '', maxPrice: '' });
            }
          }}
        >
          Limpar
        </button>
        <button type="submit" className={styles.button}>Buscar</button>
      </form>
    </div>
  );
};

export default ProductSearch;