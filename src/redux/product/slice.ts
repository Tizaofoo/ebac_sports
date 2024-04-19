import { createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type ProductType = {
  products: Produto[]
}

const initialState: ProductType = {
  products: [],
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
})

export const {} = productSlice.actions
export default productSlice.reducer
