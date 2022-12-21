import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {addItem, addItemDaal, addItemCurd, addItemPaneer, addItemPickle, addItemSweet,deleteItemChapati  } from '../slice'


const Checkout = () => {
    const state = useSelector((state) => state.counter.itemsarray)
    const states = useSelector((states) => states.counters.quantity)
    const dispatch = useDispatch()

    console.log(state)
    console.log(states)
  return (
    
    <div>Checkout</div>
  )
}

export default Checkout