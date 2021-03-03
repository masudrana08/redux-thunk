import React from 'react';
import actionCreator from './actions/actionCreator'
import {useSelector, useDispatch} from 'react-redux'
import incrementAction from './actions/incrementAction'
const App = () => {
    const count = useSelector(state=>state.counterReducer)
    const dispatch = useDispatch()
    return (
        <div>
            <h3>count : ${count}</h3>
            <button onClick={()=>dispatch(actionCreator())}>+</button>
        </div>
    );
};

export default App;