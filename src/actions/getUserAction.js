import myType from '../types'
const getUser =(data)=>{
    return {
        type : myType.GET_USER,
        payload : data
    }
}

export default getUser