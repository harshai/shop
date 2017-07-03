import * as actions from './index';

describe('actions', () => {
  it('should create fetchProductDetails action', () => {
    const productDetails = {
      brand: 'Ayataka',
      category: 'Beverage'
    }
    expect(actions.fetchProductDetails())
      .toEqual({
        type: 'FETCH_PRODUCT_DETAILS',
        productDetails: {},
        isFetchingProductDetails: true
      })
  })

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
    expect(actions.fetchFiltersMeta())
      .toEqual({
        type: 'FETCH_FILTERS_META',
        filtersMeta: [],
        isFetchingFilters: true
      });
    const filtersMeta = [{
        name: "brand",
        values: ["NutriWell", "MARIGOLD", "Marigold", "Meiji"]
      }, {
        name: "price",
        values: ["0-0.99", "1-1.99", "2-2.99"]
      }];

    expect(actions.fetchFiltersMeta(filtersMeta, false))
      .toEqual({
        type: 'FETCH_FILTERS_META',
        filtersMeta: filtersMeta,
        isFetchingFilters: false
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
