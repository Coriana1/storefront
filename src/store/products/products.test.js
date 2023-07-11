import productsReducer from '.';
import { legacy_createStore as createStore, combineReducers } from 'redux';
import { set } from '../actions';

describe('Products reducer', () => {
  // combine reducers
  const reducers = combineReducers({
    products: productsReducer,
  });

  // create a store to provide state
  const store = createStore(reducers);

  test('provides initial state', () => {
    let state = store.getState();

    let { products } = state.products;
    console.log(products);

    expect(products.length).toEqual(7)
  });
  test('contains relevant products when active category is set', () => {
    let category = { name: 'food', displayName: 'Food' };
    store.dispatch(set(category));
    let state = store.getState();
    let { products } = state.products;
    console.log('modified products list', products);

    expect(products.length).toEqual(3);
    expect(products[0].name).toEqual('Apples');
  })
});


// import { set } from '../actions';
// import { legacy_createStore as createStore, combineReducers } from 'redux';


// describe('Products reducer', () => {
//   const initialState = {
//     products: [
//       { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
//       { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
//       { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
//       { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
//       { name: 'Apples', category: 'food', price: 0.99, inStock: 500 },
//       { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
//       { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
//     ],
//   };

//   test('should return the initial state', () => {
//     expect(productsReducer(undefined, {})).toEqual(initialState);
//   });

//   test('should change the category of products', () => {
//     const action = { type: 'CHANGE_CATEGORY', payload: { name: 'electronics' } };
//     const expectedState = {
//       ...initialState,
//       products: initialState.products.filter(product => product.category === 'electronics'),
//     };
//     expect(productsReducer(initialState, action)).toEqual(expectedState);
//   });

//   test('should decrement the inStock value when adding to cart', () => {
//     const action = { type: 'ADD_TO_CART', payload: { name: 'TV' } };
//     const expectedState = {
//       ...initialState,
//       products: initialState.products.map(product => {
//         if (product.name === 'TV') {
//           return { ...product, inStock: product.inStock - 1 };
//         }
//         return product;
//       }),
//     };
//     expect(productsReducer(initialState, action)).toEqual(expectedState);
//   });

//   test('should increment the inStock value when removing from cart', () => {
//     const action = { type: 'REMOVE_FROM_CART', payload: { name: 'TV' } };
//     const expectedState = {
//       ...initialState,
//       products: initialState.products.map(product => {
//         if (product.name === 'TV') {
//           return { ...product, inStock: product.inStock + 1 };
//         }
//         return product;
//       }),
//     };
//     expect(productsReducer(initialState, action)).toEqual(expectedState);
//   });

//   test('should reset the state to the initial state', () => {
//     const currentState = {
//       products: [
//         { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
//         { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
//       ],
//     };
//     const action = { type: 'RESET' };
//     expect(productsReducer(currentState, action)).toEqual(initialState);
//   });
// });
