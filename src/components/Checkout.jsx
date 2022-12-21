import React from 'react'
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';

import Paper from '@mui/material/Paper';
import { useSelector,useDispatch } from 'react-redux'
import {addItem, addItemDaal, addItemCurd, addItemPaneer, addItemPickle, addItemSweet,deleteItemChapati  } from '../slice'

const TAX_RATE = 0.07;



function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}






const Checkout = () => {
    const state = useSelector((state) => state.counter.itemsarray)
    const states = useSelector((states) => states.counters.quantity)
    const statePrice = useSelector((statePrice) => statePrice.pricecounter.value)
    const dispatch = useDispatch()

    const sumarray=[]
    for(let i=0;i<statePrice.payload.length;i++){
      sumarray.push(statePrice.payload[i]*states[i])
    }
 
    console.log("sum aray",sumarray)

    const subtotal=sumarray.reduce((acc,ele)=>{
      return acc=acc+ele
    })

    console.log(subtotal)

    const namesarray=[]
    for(let i=0;i<=statePrice.payload.length;i++){
      if(statePrice.payload[i]==15)
      namesarray.push("Chapati")
      if(statePrice.payload[i]==120)
      namesarray.push("Daal Tadka")
      if(statePrice.payload[i]==150)
      namesarray.push('Panner Tikha')
      if(statePrice.payload[i]==25)
      namesarray.push("Sweet")
      if(statePrice.payload[i]==10)
      namesarray.push("Curd")
      if(statePrice.payload[i]==20)
      namesarray.push("pickle")
    }

    //console.log(state)
    //console.log(states)
    console.log(statePrice.payload)
    console.log(namesarray)
  return (
    <div>
    
      
      
      <div>
      

      <TableContainer component={Paper} style={{background:"#cfd8dc", border:"1px solid black"}}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="center">Bill Details</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell align="left">Meal</TableCell>
            <TableCell align="center">Items Qty : {states.length}</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.map((ele,i) => (
            <TableRow key={namesarray[i]}>
              <TableCell>{namesarray[i]}</TableCell>
              <TableCell align="center"><div class="shadow rounded" style={{width:'110px'}}>
                <img src={ele} class="card-img" alt="..." style={{width:"100px",height:"100px", border:"rounded"}}/>
                </div>
                </TableCell>
              <TableCell align="center">{states[i]}</TableCell>
              <TableCell align="right">₹{(statePrice.payload[i])}</TableCell>
              <TableCell align="right">₹{(sumarray[i])}</TableCell>
            </TableRow>
          ))}
            
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">₹{subtotal}</TableCell>
            
          </TableRow>
          <TableRow>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell colSpan={2} style={{fontSize:"larger"}}>₹{subtotal+subtotal*0.07}</TableCell>
        
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    
      </div>
    
    </div>
  )
}

export default Checkout