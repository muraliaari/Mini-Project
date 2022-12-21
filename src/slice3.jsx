import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'pricecounter',
  initialState: {
    value:[],
    
    
  },
  reducers: {

    finalPrice:(statePrice,price)=>{ //deleting the item from the above list
      console.log("from slice3",price.payload)
      statePrice.value=price
      

    },
  },
})

// Action creators are generated for each case reducer function
export const { finalPrice } = counterSlice.actions

export default counterSlice.reducer