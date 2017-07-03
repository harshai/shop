export const getFilteredProducts = (filters, products) => (
  products.filter(product => {
      if (filters.brandFilter.length === 0) {
        return true;
      }
      return filters.brandFilter.includes(product.brand)
    })
    .filter(product => {
      if (filters.priceFilter.length === 0) {
        return true;
      }
      return filters.priceFilter.reduce((acc, curr) => {
        const resolvedFilter = curr.split('-').map(parseFloat);
        return acc || (product.price > resolvedFilter[0] && product.price < resolvedFilter[1])
      }, false)
    })
  )

export const getCartProducts = (cart, products) => products.filter(({ id }) => cart.includes(id))

// Curried getProducts, takes in products first and then waits for an ID
export const getProductDetails = products => id =>
  products.filter(product => product.id === id).pop();

export const toggleArrElement = (el, arr = []) => {
  if (!el) {
    return arr;
  }
  return arr.includes(el) ? arr.filter(arrEl => arrEl !== el) : [ ...arr, el ]
}
