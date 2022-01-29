import { 
    SET_LOADING,
    BENEFICIARIOS_ERROR,
    GET_BENEFICIARIOS
} from './../actions/types'


const initialState = {
    beneficiarios: null,
    loading: false,
    error: null
}


const beneficiariosReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case BENEFICIARIOS_ERROR:
            return {
                ...state,
                error: action.payload
            } 
        case GET_BENEFICIARIOS:
            return {
                ...state,
                beneficiarios: action.payload
            }
        default:
            return state
    }
}


export default beneficiariosReducer