import { combineReducers } from "redux"

import beneficiariosReducer from './beneficiariosReducer'
import authTokenReducer from './tokenReducer'


export default combineReducers({
    beneficiario: beneficiariosReducer,
    token: authTokenReducer
})