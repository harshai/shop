import productDetails from './productDetails';

describe('productDetails', () => {
  it('should handle invalid actions', () => {
    expect(productDetails(void(0), {})).toEqual({})
  });
  it('should handle FETCH_PRODUCT_DETAILS', () => {
    const products = [{
      productID: 1,
      details: 'Some details'
    }, {
      productID: 2,
      details: 'Some more details'
    }];

    expect(productDetails(products, {
      type: 'FETCH_PRODUCT_DETAILS',
      productID: 2
    })).toEqual({
      productID: 2,
      details: 'Some more details'
    })
  });
})
