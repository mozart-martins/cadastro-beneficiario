import { 
    SET_LOADING,
    BENEFICIARIOS_ERROR,
    GET_BENEFICIARIOS,
    ADD_BENEFICIARIO,
    SEARCH_BENEFICIARIO
} from './../actions/types'


const initialState = {
    beneficiarios: null,
    filtereds: null,
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
        case ADD_BENEFICIARIO:
            return {
                ...state,
                beneficiarios: [...state.beneficiarios, action.payload]
            }
        case SEARCH_BENEFICIARIO:
            return {
                ...state,
                filtereds: state.beneficiarios.filter( beneficiario => {
                    const regex = new RegExp(`${action.payload}`, 'gi')
                    return beneficiario.nome.match(regex)
                 })
            }
        default:
            return state
    }
}


export default beneficiariosReducer