import React from 'react';
import styles from './ProductItem.module.css';

const ProductItem = ({ product }) => {
    return (
        <li key={product.id} className={styles.productbox}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <img
                src={`img/${product.file}`}
                alt={product.description}
                title={product.name}
                className={styles.productPicture}
            />
            <p>Preço: R$ {product.price.toFixed(2)}</p>
            <div className={styles.productActions}>
                <button>Comprar</button>
                <button>Detalhes</button>
            </div>
        </li>
    );
};

export default ProductItem;