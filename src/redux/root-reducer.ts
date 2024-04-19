import { combineReducers } from '@reduxjs/toolkit'

import productReducer from './product/slice'
const rootReducer = combineReducers({ productReducer })

export default rootReducer
