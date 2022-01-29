import { combineReducers } from "redux"

import beneficiariosReducer from './beneficiariosReducer'


export default combineReducers({
    beneficiario: beneficiariosReducer
})