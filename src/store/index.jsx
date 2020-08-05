// import { store } from './store';

// ReactDOM.render(
//     <React.StrictMode>
//         <Provider store={store}>
//             <App />
//             <Provider />
//             <React.StrictMode/>,
// )


import * as actions from './actions';

export { default as Provider } from './Provider';
export { default as reducer } from './reducer';
export { default as initialState } from './state';
export { actions };