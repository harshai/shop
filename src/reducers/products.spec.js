import products from './products';

describe('products', () => {
  it('should handle invalid actions', () => {
    const initialState = {
      filters: {
        brandFilter: [],
        priceFilter: []
      },
      products: []
    }
    expect(products(void(0), {})).toEqual(initialState);
  });

  it('should handle FETCH_PRODUCTS', () => {
    const initialState = {
      filters: {
        brandFilter: ['ayataka'],
        priceFilter: []
      },
      products: []
    }

    expect(products(initialState, {
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
        brandFilter: ['ayataka'],
        priceFilter: [],
      },
      products: [{
        productID: 1,
        details: 'Some details'
      }, {
        productID: 2,
        details: 'Some more details'
      }]
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
      }]
    };

    expect(products(initialState, {
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
        }]
      })
  });
})
