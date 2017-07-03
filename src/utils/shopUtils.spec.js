import {
  getFilteredProducts,
  getCartProducts,
  getProductDetails,
  getCartCount,
  toggleArrElement,
} from './shopUtils';

describe('shopUtils', () => {
  it('should getFilteredProducts', () => {
    const initialState = {
      filters: {
        brandFilter: ['ayataka'],
        priceFilter: ["0-2", "2-5"]
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
    };

    expect(getFilteredProducts(initialState.filters, initialState.products))
      .toEqual([{
          productID: 2,
          brand: 'ayataka',
          price: 1
        }, {
          productID: 4,
          brand: 'ayataka',
          price: 4
        }]
      )
  });

  it('should getCartProducts', () => {
    let initialState = {
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
    };

    expect(getCartProducts(initialState.cart, initialState.products))
      .toEqual([{
          productID: 1,
          brand: 'ayataka',
          price: 7
        }, {
          productID: 2,
          brand: 'ayataka',
          price: 1,
        }]
      )
  })

  it('should getProductDetails', () => {
    let products = [{
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
    }];
    expect(getProductDetails(2, products))
      .toEqual({
        productID: 2,
        brand: 'ayataka',
        price: 1,
      })
  })

  it('should toggleArrElement', () => {
    const arr = [1, 2, 3];
    expect(toggleArrElement(4, arr)).toEqual([1, 2, 3, 4]);
    expect(toggleArrElement(1, arr)).toEqual([2, 3]);
    expect(toggleArrElement('', arr)).toEqual([1, 2, 3]);
  })
})
