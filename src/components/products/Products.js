import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import './products.css';

const Product = ({ products, addToCart }) => {
  return (
    <section className="products">
      <ul className="products__list">
        {products.map(product =>
          <li className="products__list__item" key={product.id}>
            <Link title={product.name} className="products__link" to={`/products/${product.id}`}>
              <img src={require(`../../assets/${product.image}`)} alt={product.name} />
              <span className="products__description">{product.name}</span>
              <span className="products__description">{product.measurement}</span>
          <span className="products__description"><strong>${product.price}</strong></span>
            </Link>
          {addToCart && <Button onClick={addToCart.bind(null, product.id)}>Add to Cart</Button>}
        </li>
        )}
      </ul>
    <footer className="products__footer">Showing <em>{products.length}</em> {`product${products.length === 1 ? '' : 's'}`}</footer>
    </section>
  )
}

Product.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func,
};

export default Product;
