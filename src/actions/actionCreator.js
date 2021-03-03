import getUserAction from './getUserAction'
const actionCreator = ()=> {
    return function (dispatch){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>{
            dispatch(getUserAction(data))
        })
    }
}
export default actionCreator