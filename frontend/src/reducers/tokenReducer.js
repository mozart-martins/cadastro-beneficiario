import { 
    SET_LOADING,
    GET_AUTH_TOKEN,
    AUTH_TOKEN_ERROR,
    TOKEN_EXITS
 } from './../actions/types'

 
 const initialState = {
     token: null,
     loading: false,
     error: null
 }


 const tokenReducer = (state = initialState, action) => {
     switch(action.type) {
         case SET_LOADING:
             return {
                 ...state,
                 loading: action.payload
             }
        case GET_AUTH_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        case AUTH_TOKEN_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        case TOKEN_EXITS:
            return {
                ...state,
                token: action.payload
            }
        default:
            return state
     }
 }


 export default tokenReducer