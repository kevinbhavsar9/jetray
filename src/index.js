import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';


import './index.css';
import App from './components/App';
import rootReducer from './reducers'

//configured reducer with store
const store=createStore(rootReducer);

console.log('store',store)
// console.log('state before',store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:"Superman"}]
// });

// console.log('state After',store.getState());

 


ReactDOM.render( 
  <React.StrictMode>
    <App
    store={store}
     />
  </React.StrictMode>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

