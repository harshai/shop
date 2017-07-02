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
      cartProducts: [],
      cartProducts: [],
      productDetails: {}
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
      }]
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
      cartProducts: [],
      productDetails: {}
    })
  });

  it('should handle FILTER_PRODUCTS', () => {
    const initialState = {
      filters: {
        brandFilter: ['ayataka'],
        priceFilter: [[0, 2], [2, 5]]
      },
      products: [{
        productID: 1,
        brand: 'ayataka',
        price: 7
      }, {
        productID: 2,
        brand: 'ayataka',
        price: 1,
      }, {
        productID: 3,
        brand: 'heaven on earth',
        price: 1
      }, {
        productID: 4,
        brand: 'ayataka',
        price: 4
      }],
      cart: [],
      cartProducts: [],
      productDetails: {}
    };

    expect(shop(initialState, {
      type: 'FILTER_PRODUCTS',
        ...initialState
       })).toEqual({
        filters: {
          brandFilter: ['ayataka'],
          priceFilter: [[0,2], [2, 5]]
        },
        products: [{
          productID: 2,
          brand: 'ayataka',
          price: 1
        }, {
          productID: 4,
          brand: 'ayataka',
          price: 4
        }],
        cart: [],
        cartProducts: [],
        productDetails: {}
      })
  });

  it('should handle FETCH_PRODUCT_DETAILS', () => {
    let initialState = {
      filters: {},
      products: [{
        productID: 1,
        brand: 'ayataka',
        price: 7
      }, {
        productID: 2,
        brand: 'ayataka',
        price: 1,
      }, {
        productID: 3,
        brand: 'heaven on earth',
        price: 1
      }, {
        productID: 4,
        brand: 'ayataka',
        price: 4
      }],
      cart: [],
      cartProducts: [],
      productDetails: {},
    };
    expect(shop(initialState, {
      type: 'FETCH_PRODUCT_DETAILS',
      ...initialState,
      productID: 2
    })).toEqual({
      filters: {},
      products: [{
        productID: 1,
        brand: 'ayataka',
        price: 7
      }, {
        productID: 2,
        brand: 'ayataka',
        price: 1,
      }, {
        productID: 3,
        brand: 'heaven on earth',
        price: 1
      }, {
        productID: 4,
        brand: 'ayataka',
        price: 4
      }],
      cart: [],
      cartProducts: [],
      productDetails: {
        productID: 2,
        brand: 'ayataka',
        price: 1,
      }
    })
  })

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
      cartProducts: [],
      productDetails: {}
   });
  });

  it('should handle FETCH_CART_ITEMS', () => {
    let initialState = {
      filters: {},
      products: [{
        productID: 1,
        brand: 'ayataka',
        price: 7
      }, {
        productID: 2,
        brand: 'ayataka',
        price: 1,
      }, {
        productID: 3,
        brand: 'heaven on earth',
        price: 1
      }, {
        productID: 4,
        brand: 'ayataka',
        price: 4
      }],
      cart: [1, 2],
      cartProducts: [],
      productDetails: {},
    };
    expect(shop(initialState, {
      type: 'FETCH_CART_ITEMS'
    })).toEqual({
      filters: {},
      products: [{
        productID: 1,
        brand: 'ayataka',
        price: 7
      }, {
        productID: 2,
        brand: 'ayataka',
        price: 1,
      }, {
        productID: 3,
        brand: 'heaven on earth',
        price: 1
      }, {
        productID: 4,
        brand: 'ayataka',
        price: 4
      }],
      cart: [1, 2],
      cartProducts: [{
        productID: 1,
        brand: 'ayataka',
        price: 7
      }, {
        productID: 2,
        brand: 'ayataka',
        price: 1,
      }],
      productDetails: {},
    })

  })
})
