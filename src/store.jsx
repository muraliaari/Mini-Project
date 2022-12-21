import { configureStore } from '@reduxjs/toolkit'
import counter from './slice'
import counters from './slice2'

export default configureStore({
  reducer: {
    counter: counter, //items list
    counters, //quantity
  },
})