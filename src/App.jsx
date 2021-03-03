import React, { useEffect, useReducer } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import actionCreator from './actions/actionCreator'
const App = () => {
    const dispatch = useDispatch()
    const mystate = useSelector(state=>state.userReducer)
    useEffect(()=>{
        dispatch(actionCreator())
    },[])
    
    return (
        <div>
           {
               mystate.data.map(user=>{
                   return(
                       <div>
                           <p>{user.id}. {user.name}</p>
                           <p>{user.email}</p>
                           <br/>
                       </div>
                   )
               })
           }
        </div>
    );
};

export default App;