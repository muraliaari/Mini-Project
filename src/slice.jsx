import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    itemsarray: [],
    
  },
  reducers: {
    addItem: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.itemsarray.push("https://media.istockphoto.com/id/516359240/photo/bhendi-masala-or-bhindi-masala-ladies-finger-curry-with-chapati.jpg?s=612x612&w=0&k=20&c=0mGnvNM2lxl-dTTJlhAfVJE5WidxYmmvrvNs1NZUKvs=")
    },
    
    addItemDaal: (state) => {
      state.itemsarray.push("https://www.manjulaskitchen.com/wp-content/uploads/red_lentil_dal_soup.jpg")
    },
    addItemPaneer: (state) => {
      state.itemsarray.push("https://bellydarbar.in/wp-content/uploads/2020/11/Paneer-tikka-masala-3-scaled.jpg")
    },
    addItemCurd: (state) => {
      
      state.itemsarray.push("https://blog-live.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2022/08/08151441/curd1.webp")
    },
    addItemSweet: (state) => {
      state.itemsarray.push("https://www.milkmaid.in/sites/default/files/2022-03/Gulab-Jamun-590x436.jpg")
    },
    addItemPickle: (state) => {
      state.itemsarray.push("https://images.unsplash.com/photo-1589135233689-d56032e9680a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")
    },

    deleteItemChapati:(state,index)=>{ //deleting the item from the above list
      //console.log(index)
      state.itemsarray.splice(index.payload,1)

    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addItem, addItemDaal, addItemCurd, addItemPaneer, addItemPickle, addItemSweet,deleteItemChapati } = counterSlice.actions

export default counterSlice.reducer