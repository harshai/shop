import data from '../data/products.json';

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, Math.random() * 1500 | 1); // Add a mock delay between 0 and 1500ms
  })
}
