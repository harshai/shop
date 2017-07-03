import shop from './shop';

describe('products', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      filters: {
        brandFilter: [],
        priceFilter: []
      },
      products: [],
      cart: [],
      isFetchingProducts: true,
    }
  });

  afterEach(() => {
    initialState = null;
  });

  it('should handle invalid actions', () => {
    expect(shop(void(0), {})).toEqual(initialState);
  });

  it('should handle FETCH_PRODUCTS', () => {
    expect(shop(initialState, {
      type: 'FETCH_PRODUCTS',
      products: [{
        productID: 1,
        details: 'Some details'
      }, {
        productID: 2,
        details: 'Some more details'
      }],
      isFetchingProducts: false,
    })).toEqual({
      filters: {
        brandFilter: [],
        priceFilter: [],
      },
      products: [{
        productID: 1,
        details: 'Some details'
      }, {
        productID: 2,
        details: 'Some more details'
      }],
      cart: [],
      isFetchingProducts: false,
    })
  });

  it('should handle ADD_TO_CART', () => {
    expect(shop(initialState, {
      type: 'ADD_TO_CART',
      productID: 2
    })).toEqual({
      filters: {
        brandFilter: [],
        priceFilter: []
      },
      products: [],
      cart: [2],
      isFetchingProducts: true,
   });
  });
})
