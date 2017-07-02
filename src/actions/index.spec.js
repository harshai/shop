import * as actions from './index';

describe('store actions', () => {
  it('should create fetchProducts action', () => {
    expect(actions.fetchProducts())
      .toEqual({
        type: 'FETCH_PRODUCTS',
        products: []
      });
    const products = [{
      brand: 'Ayataka',
      category: 'Beverage'
    }]
    expect(actions.fetchProducts(products))
      .toEqual({
        type: 'FETCH_PRODUCTS',
        products,
      })
  });

  it('should create fetchProductDetails action', () => {
    expect(actions.fetchProductDetails(1))
      .toEqual({
        type: 'FETCH_PRODUCT_DETAILS',
        productID: 1
      });
  })

  it('should create addToCart action', () => {
    expect(actions.addToCart(1))
      .toEqual({
        type: 'ADD_TO_CART',
        productID: 1
      })
  });

  it('should create fetchCartItems action', () => {
    expect(actions.fetchCartItems([1, 2, 3]))
      .toEqual({
        type: 'FETCH_CART_ITEMS',
        cartItems: [1, 2, 3]
      });
  })

  it('should create filterProducts action', () => {
    expect(actions.filterProducts())
      .toEqual({
        type: 'FILTER_PRODUCTS',
        brandFilter: [],
        priceFilter: []
      })
    expect(actions.filterProducts(['ayataka']))
      .toEqual({
        type: 'FILTER_PRODUCTS',
        brandFilter: ['ayataka'],
        priceFilter: []
      })
    expect(actions.filterProducts([], [0, 5]))
      .toEqual({
        type: 'FILTER_PRODUCTS',
        brandFilter: [],
        priceFilter: [0, 5]
      })
  });
});
