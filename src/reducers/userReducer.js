import myType from '../types'

const initialState = {
    loading : false,
    data : null,
    error : false
}
const userReducer =(state=initialState, action)=>{
    switch (action.type){
        case myType.GET_USER:
            
            return {
                ...initialState,
                data : action.payload
            }
        default:
            return state
    }
}
export default userReducer