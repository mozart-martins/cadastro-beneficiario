import { 
    SET_LOADING,
    GET_AUTH_TOKEN,
    AUTH_TOKEN_ERROR,
    TOKEN_EXITS
 } from "./types"


 export const setLoading = dual => {
     return {
         type: SET_LOADING,
         payload: dual
     }
 }


 export const getAuthToken = (username, password) => {
     return async (dispatch) => {
         try {
             setLoading(true)

            const config = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            }

            const res = await fetch('/api-token-auth/', config)
            const data = await res.json()

            if(data !== undefined) {
                dispatch({
                    type: GET_AUTH_TOKEN,
                    payload: data
                })
    
                localStorage.setItem('token', data.token)
            }
            else {
                dispatch({
                    type: AUTH_TOKEN_ERROR,
                    payload: 'O token está vazio.'
                })
            }

            setLoading(false)
         } catch (error) {
             dispatch({
                 type: AUTH_TOKEN_ERROR,
                 payload: error.response.statusText
             })
         }
     }
 }


 export const verifyTokenExist = () => {
     return async (dispatch) => {
         if(localStorage.getItem('token') !== null && localStorage.getItem('token') !== undefined) {
             dispatch({
                 type: TOKEN_EXITS,
                 payload: localStorage.getItem('token')
             })
    
         }
     }
 }

