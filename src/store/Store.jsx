import {createStore}  from "redux"

import Rootreducer from '../reducer/Root'
const Store = createStore(Rootreducer,  process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )


export default  Store; 
