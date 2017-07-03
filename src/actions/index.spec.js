import * as actions from './index';

describe('actions', () => {
  it('should create fetchProducts action', () => {
    expect(actions.fetchProducts())
      .toEqual({
        type: 'FETCH_PRODUCTS',
        products: [],
        isFetchingProducts: true
      });
    const products = [{
      brand: 'Ayataka',
      category: 'Beverage'
    }]
    expect(actions.fetchProducts(products, false))
      .toEqual({
        type: 'FETCH_PRODUCTS',
        products,
        isFetchingProducts: false
      })
  });

  it('should create fetchFitlers action', () => {
    expect(actions.fetchFilters())
      .toEqual({
        type: 'FETCH_FILTERS',
        filtersMeta: [],
        isFetchingFilters: true
      })
  })

  it('should create addToCart action', () => {
    expect(actions.addToCart(1))
      .toEqual({
        type: 'ADD_TO_CART',
        productID: 1
      })
  });

  it('should create filterProducts action', () => {
    expect(actions.setFilters({ brandFilter: 'ayataka' }))
      .toEqual({
        type: 'SET_FILTERS',
        brandFilter: 'ayataka',
        priceFilter: ''
      })
    expect(actions.setFilters({ priceFilter: "[0, 5]" }))
      .toEqual({
        type: 'SET_FILTERS',
        brandFilter: '',
        priceFilter: "[0, 5]"
      })
  });
});
