import { applyMiddleware, createStore, compose } from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || 
compose;  //esta linea es para conectar con la extencion 
//del navegador REDUX DEVTOOLS 

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))// esta linea es para poder hacer peticiones a un server
);

export default store;