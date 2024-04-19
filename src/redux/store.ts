import { configureStore } from '@reduxjs/toolkit'

import api from '../services/api'
import productReducer from './product/slice'

const store = configureStore({
  reducer: {
    product: productReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export default store
export type RootReducer = ReturnType<typeof store.getState>
