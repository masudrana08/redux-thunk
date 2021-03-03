import React from 'react'
import {render} from 'react-dom'
import App from './App.jsx'
import store1 from './stores/store1'
import {Provider} from 'react-redux'
// import {createStore} from 'redux'
// Action
// const increment = () => {
//     return {
//         type : 'INCREMENT'
//     }
// }
// const decrement = () => {
//     return {
//         type : 'DECREMENT'
//     }
// }
// Reducer
// const counter = ( state =0 , action) =>{
//     switch (action.type){
//         case 'INCREMENT':
//             return state+1
//         case 'DECREMENT':
//             return state-1
//         default :
//             return 0
//     }
// }
// Store
// let store = createStore(counter)
// store.subscribe(()=>console.log(store.getState()))
// Dispatch
// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(increment())
// store.dispatch(decrement())
import incrementAction from './actions/incrementAction'
store1.dispatch(incrementAction())



render(
   <Provider store={store1}>
        <App />
   </Provider>,
    document.getElementById('root')
)