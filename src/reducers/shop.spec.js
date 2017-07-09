import shop from './shop';

describe('products', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      filters: {
        brandFilter: [],
        priceFilter: []
      },
      filtersMeta: [],
      isFetchingFilters: true,
      products: [],
      cart: [],
      isFetchingProducts: true,
      productDetails: {},
      isFetchingProductDetails: true,
      cartProducts: [],
      isFetchingCartProducts: true
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
      filtersMeta: [],
      isFetchingFilters: true,
      products: [{
        productID: 1,
        details: 'Some details'
      }, {
        productID: 2,
        details: 'Some more details'
      }],
      cart: [],
      isFetchingProducts: false,
      productDetails: {},
      isFetchingProductDetails: true,
      cartProducts: [],
      isFetchingCartProducts: true,
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
      filtersMeta: [],
      isFetchingFilters: true,
      products: [],
      cart: [2],
      isFetchingProducts: true,
      productDetails: {},
      isFetchingProductDetails: true,
      cartProducts: [],
      isFetchingCartProducts: true,
   });
  });

  it('should handle FETCH_FILTERS_META', () => {
    expect(shop(initialState, {
      type: 'FETCH_FILTERS_META',
      filtersMeta: [{
        name: "brand",
        values: ["NutriWell", "MARIGOLD", "Marigold", "Meiji"]
      }, {
        name: "price",
        values: ["0-0.99", "1-1.99", "2-2.99"]
      }],
      isFetchingFilters: false
     })).toEqual({
      filters: {
        brandFilter: [],
        priceFilter: []
      },
      filtersMeta: [{
        name: "brand",
        values: ["NutriWell", "MARIGOLD", "Marigold", "Meiji"]
      }, {
        name: "price",
        values: ["0-0.99", "1-1.99", "2-2.99"]
      }],
      isFetchingFilters: false,
      products: [],
      cart: [],
      isFetchingProducts: true,
      productDetails: {},
      isFetchingProductDetails: true,
      cartProducts: [],
      isFetchingCartProducts: true,
    })
  })

  it('should handle FETCH_PRODUCT_DETAILS', () => {
    expect(shop(initialState, {
      type: 'FETCH_PRODUCT_DETAILS',
      productDetails: {
        brand: 'Ayataka',
        type: 'Beverage',
      },
      isFetchingProductDetails: false
    })).toEqual({
      filters: {
        brandFilter: [],
        priceFilter: []
      },
      filtersMeta: [],
      isFetchingFilters: true,
      products: [],
      cart: [],
      isFetchingProducts: true,
      productDetails: {
        brand: 'Ayataka',
        type: 'Beverage'
      },
      isFetchingProductDetails: false,
      cartProducts: [],
      isFetchingCartProducts: true,
    })
  })

  it('should handle FETCH_CART_PRODUCTS', () => {
    expect(shop(initialState, {
      type: 'FETCH_CART_PRODUCTS',
      cartProducts: [{
        brand: 'Ayataka',
        type: 'Beverage'
      }],
      isFetchingCartProducts: false
    })).toEqual({
      filters: {
        brandFilter: [],
        priceFilter: []
      },
      filtersMeta: [],
      isFetchingFilters: true,
      products: [],
      cart: [],
      isFetchingProducts: true,
      productDetails: {},
      isFetchingProductDetails: true,
      cartProducts: [{
        brand: 'Ayataka',
        type: 'Beverage'
      }],
      isFetchingCartProducts: false,
    })
  })
})
