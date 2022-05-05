import { AUTH, GET, UPDATE, LOGOUT, DELETE_USER } from "../constants/actionTypes";

const initialState = {
    authData : JSON.parse(localStorage.getItem('mern_crud3_copy_user')) || null,
}

const authReducer = (state = initialState, action) => {
    switch(action.type){
        
        case AUTH:
            localStorage.setItem('mern_crud3_copy_user', JSON.stringify({...action.payload}))
        return {...state, authData: action.payload}
        case GET:
            localStorage.setItem('mern_crud3_copy_user', JSON.stringify({...action.payload}))
        return {...state, authData: action.payload}
        case UPDATE:
            localStorage.setItem('mern_crud3_copy_user', JSON.stringify({user:{...action.payload}}))
            console.log(action.payload);
        return {...state, authData: action.payload}
        case LOGOUT:
            localStorage.removeItem('mern_crud3_copy_user')
        return {...state, authData: null}
        case DELETE_USER:
            localStorage.removeItem('mern_crud3_copy_user')
        return {...state, authData: null}
        default:
            return state
    }
}

export default authReducer