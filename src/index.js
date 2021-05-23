import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; 


import './index.css';
import App from './components/App';
import rootReducer from './reducers'

// MIDDLEWARE
// logger(obj)(next)(action)
// const logger=function({dispatch,getState}){
//   return function(next){
//     return function(action){
//       // middleware code
//       console.log('ACTION-TYPE IS ',action.type);
//       next(action);
//     }
//   }
// }

const logger=({dispatch,getState})=>(next)=>(action)=>{
      // middleware code
    if(typeof action !=='function'){
      
      console.log('ACTION-TYPE IS ',action.type);
    }
     
      next(action);
}

// ***********USED PACKAGE THUNK**************
// THUNK SIMPLY CALLS THE FUNCTION BY ADDING DISPATCH AS ARGUMENT IN IT
// const thunk=({dispatch,getState})=>(next)=>(action)=>{
//       // middleware code
//       // console.log('ACTION-TYPE IS ',action.type);
//       if(typeof action==='function'){
//         action(dispatch);
//         return; 
//       }
//       next(action);
// }



//configured reducer with store
const store=createStore(rootReducer,applyMiddleware(logger,thunk));
// const store=createStore(rootReducer);
console.log('store',store)

export const StoreContext= createContext();

class Provider extends React.Component{
  render(){
    const {store} = this.props;
    return(
      <StoreContext.Provider value={store}>
      {this.props.children}
    </StoreContext.Provider>
    );
      
    
  }
}

export function connect(callback){
  return function(Component){
    class ConnectedComponent extends React.Component{
      constructor(props){
        super(props);
        this.unsubscribe=this.props.store.subscribe(()=> this.forceUpdate());
      }

      componentWillUnmount(){
        this.unsubscribe();
      }

      render(){
        const {store}=this.props;
        const state=store.getState();
        const dataToBePassedAsProps=callback(state);
        return(
          <Component {...dataToBePassedAsProps} dispatch={store.dispatch}/>
        );

      }
    }

    class ConnectedComponentWrapper extends React.Component{
      render(){
        return(
          <StoreContext.Consumer>
          {(store)=>{

            return <ConnectedComponent store={store}/>}
          }
        </StoreContext.Consumer>
        );
        
      }
    }
    return ConnectedComponentWrapper;
  }

 
}





 


ReactDOM.render( 
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>, 
  document.getElementById('root' )
);


