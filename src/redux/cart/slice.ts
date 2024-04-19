import { createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CartType = {
  products: Produto[]
}

const initialState: CartType = {
  products: [],
}

const cartSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, payload) => {
      console.log('adicionar ao carrinho')
    },
    favorite: (state, payload) => {
      console.log(`favoritar: ${payload}`)
    },
  },
})

export const { addToCart, favorite } = cartSlice.actions
export default cartSlice.reducer
