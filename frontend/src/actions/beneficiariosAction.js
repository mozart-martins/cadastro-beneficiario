import { 
    SET_LOADING,
    BENEFICIARIOS_ERROR,
    GET_BENEFICIARIOS,
    ADD_BENEFICIARIO,
    SEARCH_BENEFICIARIO
} from './types'


export const setLoading = dual => {
    return {
        type: SET_LOADING,
        payload: dual
    }
}


export const searchBeneficiario = keys => {
    return async (dispatch) => {
        try {
            setLoading(true)

            dispatch({
                type: SEARCH_BENEFICIARIO,
                payload: keys
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


export const addBeneficiario = (beneficiario) => {
    return async (dispatch) => {
        try {
            setLoading(true)

            const config = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'token ' + localStorage.getItem('token')
                },
                body: JSON.stringify(beneficiario)
            }
    
            const res = await fetch('beneficiarios/', config)
            const data = await res.json()
    
            dispatch({
                type: ADD_BENEFICIARIO,
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


export const getBeneficiarios = () => {
    return async (dispatch) => {
        try {
            setLoading(true)

            const config = {
                headers: {
                    'Content-type': 'application/json' ,
                    'Authorization': 'token ' + localStorage.getItem('token')
                }
            }

            const res = await fetch('beneficiarios/', config)
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