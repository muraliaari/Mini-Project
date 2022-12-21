import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter1',
  initialState: {
    quantity:[],
  },
  reducers: {
    chapatiQty: (chapatistate,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
      chapatistate.quantity[0]=Number(action.payload)
      //console.log(states.quantity)
      //console.log(action.payload)
    },
    daalQty: (daalstate,action) => {
        daalstate.quantity[1]=Number(action.payload)
        //console.log(daalstate.quantity)
 
  },
  paneerQty: (paneerstate,action) => {  
    paneerstate.quantity[2]=Number(action.payload)
    //console.log(daalstate.quantity)

},
jamunQty: (jamunstate,action) => {    
  jamunstate.quantity[3]=Number(action.payload)
  //console.log(daalstate.quantity)

},
curdQty: (curdstate,action) => {     
  curdstate.quantity[4]=Number(action.payload)
  //console.log(daalstate.quantity)

},
pickleQty: (picklestate,action) => {    
  picklestate.quantity[5]=Number(action.payload)
  //console.log(daalstate.quantity)

},

deleteqtyfinal:(states,index)=>{
  states.quantity.splice(index.payload,1)
}

}
})

// Action creators are generated for each case reducer function
export const { chapatiQty, daalQty, paneerQty, jamunQty, curdQty, pickleQty, deleteqtyfinal } = counterSlice.actions

export default counterSlice.reducer