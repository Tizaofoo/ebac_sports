import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto as ProductType } from '../../App'

type CartType = {
  itemsToBuy: ProductType[]
  favorites: number[] // guarda ids dos produtos
}

const initialState: CartType = {
  itemsToBuy: [],
  favorites: [],
}

const cartSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      console.log('adicionar ao carrinho')
      if (state.itemsToBuy.find((item) => item.id === action.payload.id)) {
        alert('Item já adicionado')
      } else {
        state.itemsToBuy = [...state.itemsToBuy, action.payload]
      }
    },
    setFavorite: (state, action: PayloadAction<number>) => {
      console.log(`favoritar: ${action.payload}`)
      const index = state.favorites.indexOf(action.payload)
      if (state.favorites.includes(action.payload))
        state.favorites = state.favorites.filter((id) => id !== action.payload)
      else state.favorites = [...state.favorites, action.payload]
      console.log(`Lista: ${state.favorites}`)
    },
  },
})

export const { addToCart, setFavorite } = cartSlice.actions
export default cartSlice.reducer
