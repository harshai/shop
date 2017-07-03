import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ products, addToCart }) => {
  return (
    <section className="products">
      <ul>
        {products.map(product =>
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
            {addToCart && <button onClick={addToCart.bind(null, product.id)}>Add to Cart</button>}
          </li>
        )}
      </ul>
      <footer className="products__footer">{`Showing ${products.length} items`}</footer>
    </section>
  )
}

Product.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func,
};

export default Product;
