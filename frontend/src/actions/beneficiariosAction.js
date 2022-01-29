import { 
    SET_LOADING,
    BENEFICIARIOS_ERROR,
    GET_BENEFICIARIOS
} from './types'


export const setLoading = dual => {
    return {
        type: SET_LOADING,
        payload: dual
    }
}


export const getBeneficiarios = () => {
    return async (dispatch) => {
        try {
            setLoading(true)

            const res = await fetch('/beneficiarios/')
            const data = await res.json()

            dispatch({
                type: GET_BENEFICIARIOS,
                payload: data
            })

            setLoading(false)
        } catch (error) {
            dispatch({
                type: BENEFICIARIOS_ERROR,
                payload: error.response.statusText
            })
        }
    }
}