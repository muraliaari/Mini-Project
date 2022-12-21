import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {addItem, addItemDaal, addItemCurd, addItemPaneer, addItemPickle, addItemSweet,deleteItemChapati  } from '../slice'
import { chapatiQty, daalQty, paneerQty, jamunQty, curdQty, pickleQty,deleteqtyfinal } from '../slice2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {useRef} from 'react';
import { Link } from 'react-router-dom'

let countchapa=0
let countDaal=0
let countPanner=0
let countCurd=0
let countSweet=0
let countpickle = 0;
let dele=0;
let submit=0




function Thali() {
  const state = useSelector((state) => state.counter.itemsarray)
const states = useSelector((states) => states.counters.quantity)
const dispatch = useDispatch()
  const ref = useRef(null);
  const[count,setCount] = useState(false)
const [pricearray,setPrice] = useState([])
   

  
  //console.log(countchapa)
    const handleClickChapati=()=>{
      for(let i=0;i<state.length;i++){  //to ensure that after clicking Add btn twice the item should be displayed only once.
        if(state[i]=="https://media.istockphoto.com/id/516359240/photo/bhendi-masala-or-bhindi-masala-ladies-finger-curry-with-chapati.jpg?s=612x612&w=0&k=20&c=0mGnvNM2lxl-dTTJlhAfVJE5WidxYmmvrvNs1NZUKvs="){
          countchapa = countchapa+1;
        }
      }
      if(countchapa<1){ //even after deletig, hmaking sure that the item is added only once in the array
       dispatch(addItem())
       pricearray.push(15)
       setPrice([...pricearray])
      }  
    }

    const handleClickDaal=()=>{
      for(let i=0;i<state.length;i++){
        if(state[i]=="https://www.manjulaskitchen.com/wp-content/uploads/red_lentil_dal_soup.jpg")
        countDaal=countDaal+1
      }
      if(countDaal<1)
      {
        dispatch(addItemDaal())
        pricearray.push(120)
        setPrice([...pricearray])
      }

    }

    const handleClickPaneer=()=>{
      for(let i=0;i<state.length;i++){
        if(state[i]=="https://bellydarbar.in/wp-content/uploads/2020/11/Paneer-tikka-masala-3-scaled.jpg")
        countPanner = countPanner+1;
      }
      
      if(countPanner<1){
        dispatch(addItemPaneer())
        pricearray.push(150)
        setPrice([...pricearray])
      }
    }

    const handleClickSweet=()=>{
      for(let i=0;i<state.length;i++){
        if(state[i]=="https://www.milkmaid.in/sites/default/files/2022-03/Gulab-Jamun-590x436.jpg"){
          countSweet=countSweet+1
        }
      }
      
      if(countSweet<1){
        dispatch(addItemSweet())
        pricearray.push(25)
        setPrice([...pricearray])
      }
    }

    const handleClickCurd=()=>{
      for(let i=0;i<state.length;i++){
        if(state[i]=="https://blog-live.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2022/08/08151441/curd1.webp"){
          countCurd=countCurd+1
        }
      }
      
      if(countCurd<1){
        dispatch(addItemCurd())
        pricearray.push(10)
        setPrice([...pricearray])
      }
    }

    const handleClickPickle=()=>{
      for(let i=0;i<state.length;i++){
        if(state[i]=="https://images.unsplash.com/photo-1589135233689-d56032e9680a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"){
          countpickle=countpickle+1
        }
      }
    
      if(countpickle<1){
        dispatch(addItemPickle())
        pricearray.push(15)
        setPrice([...pricearray])
      }
    }

    const handleDeleteItems=(index)=>{
      if(dele==1){ //deleting the item in the list
      dispatch(deleteItemChapati(index))
      pricearray.splice(index,1)
      setPrice([...pricearray])
      }
    
      //console.log(index)
      countchapa=0;
      countCurd=0;
      countDaal=0;
      countPanner=0;
      countSweet=0;
      countpickle=0;

    }
    
    const handleChapati=(event)=>{
       //to handle the quantity
        dispatch(chapatiQty(event.target.value))
        //console.log(states)
      }
      
    const handleDaal=(event)=>{
      dispatch(daalQty(event.target.value))
    }

    const handlePaneer=(event)=>{
      dispatch(paneerQty(event.target.value))
    }

    const handleJamun=(event)=>{
      dispatch(jamunQty(event.target.value))
    }

    const handleCurd=(event)=>{
      dispatch(curdQty(event.target.value))
    }

    const handlePickle=(event)=>{
      dispatch(pickleQty(event.target.value))
    }

    const handleDoneYes=()=>{ //asking done with the items
      setCount(true)
      dele=0;
      countchapa=1;
      countCurd=1;
      countDaal=2;
      countPanner=3;
      countSweet=4;
      countpickle=5;
      console.log(states)
      console.log(pricearray)
    }

    const handleDoneNO=()=>{
      setCount(false)
      dele=1;
      countchapa=0;
      countCurd=0;
      countDaal=0;
      countPanner=0;
      countSweet=0;
      countpickle=0;
    }

    const handleFinal=()=>{ //checkout list
      dispatch(deleteqtyfinal(pricearray.length))
      console.log(states)
      console.log(pricearray)
      setCount(false)
      submit=1;
      if(states.length==0){
      alert("Quatity cannot be Empty")
      submit=0
      setCount(true)
      }
      if(count)
      ref.current?.scrollIntoView({behavior: 'smooth'});

    }

    return (
        <div>
          
          {
            state.map((ele,i)=>(
              <li key={i} style={{display:"inline-block", width:"150px",height:"200px",marginLeft:"10px"}}>
                <div class="shadow-lg p-2 mb-1 bg-body rounded">
                  <img src={ele} class="card-img" alt="..."/><br></br>
                  
                  <Button size="small" onClick={()=>handleDeleteItems(i)}>Delete</Button></div>
                  </li> 

            ))
          }<br></br>
          <div style={ state.length>=2&&submit==0 ? { display:"block"} : {display:"none"}}><label>Done ?</label>
          <button onClick={handleDoneYes}>Yes</button> &nbsp; 
          <button onClick={handleDoneNO}>No</button></div>
      
          <div style={ count ? { display:"block"} : {display:"none"}}> 
          <label>Final quantity ac:</label>
           <TextField
        type="number"
          required
          id="outlined-required"
          label="1st Item"
          style={{width:"100px"}}
          onChange={handleChapati}
        />
        <TextField
        type="number"
          required
          id="outlined-required"
          label="2nd Item"
          style={{width:"100px"}}
          onChange={handleDaal}
        />
        <TextField
        type="number"
          required
          id="outlined-required"
          label="3rd Item"
          style={ state.length>=3 ? {width:"100px"} : {display:"none"}}
          onChange={handlePaneer}
        />
        <TextField
        type="number"
          required
          id="outlined-required"
          label="4th item"
          style={ state.length>=4 ? {width:"100px"} : {display:"none"}}
          onChange={handleJamun}
        />
        <TextField
        type="number"
          required
          id="outlined-required"
          label="5th item"
          style={ state.length>=5 ? {width:"100px"} : {display:"none"}}
          onChange={handleCurd}
        />
        <TextField
        type="number"
          required
          id="outlined-required"
          label="6th item"
          style={ state.length>=6 ? {width:"100px"} : {display:"none"}}
          onChange={handlePickle}
        />
        </div>
        <button style={ state.length>=2 ? {} : {display:"none"}} onClick={handleFinal}>Final Submit :</button>
          <h2>Customize your Thali</h2>
            <div class="container overflow-hidden text-center">
  <div class="row gy-10">
    <div class="col-6" style={{width:"300px"}}>
      <div class="p-3 border bg-light" >
      <Card style={{ width: 245}}>
      <CardMedia
        component="img"
        height="200"
        image="https://media.istockphoto.com/id/516359240/photo/bhendi-masala-or-bhindi-masala-ladies-finger-curry-with-chapati.jpg?s=612x612&w=0&k=20&c=0mGnvNM2lxl-dTTJlhAfVJE5WidxYmmvrvNs1NZUKvs="
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Chapati
        </Typography>
        <Typography variant="body2" color="text.secondary">
        ₹ 15/- each
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClickChapati}>Add</Button>
      </CardActions>
    </Card>

      </div>
    </div>
    <div class="col-6" style={{width:"300px"}}>
      <div class="p-3 border bg-light" >
      <Card style={{ width: 245}}>
      <CardMedia
        component="img"
        height="200"
        image="https://www.manjulaskitchen.com/wp-content/uploads/red_lentil_dal_soup.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Daal Tadka
        </Typography>
        <Typography variant="body2" color="text.secondary">
        ₹ 120/-
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClickDaal}>Add</Button>
    
      </CardActions>
    </Card>
      </div>
    </div>
    
    <div class="col-6" style={{width:"300px"}}>
      <div class="p-3 border bg-light">
      <Card style={{ width: 245}}>
      <CardMedia
        component="img"
        height="200"
        image="https://bellydarbar.in/wp-content/uploads/2020/11/Paneer-tikka-masala-3-scaled.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Paneer Tika Masala
        </Typography>
        <Typography variant="body2" color="text.secondary">
        ₹ 150/-
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClickPaneer}>Add</Button>
    
      </CardActions>
    </Card>
      </div>
      
    </div>
  </div>
</div><br></br>
<div class="container overflow-hidden text-center">
  <div class="row gy-10">
    <div class="col-6" style={{width:"300px"}}>
      <div class="p-3 border bg-light" >
      <Card style={{ width: 245}}>
      <CardMedia
        component="img"
        height="200"
        image="https://www.milkmaid.in/sites/default/files/2022-03/Gulab-Jamun-590x436.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Gulab jamun (2pcs)
        </Typography>
        <Typography variant="body2" color="text.secondary">
        ₹ 25/-
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClickSweet}>Add</Button>
    
      </CardActions>
    </Card>

      </div>
    </div>
    <div class="col-6" style={{width:"300px"}}>
      <div class="p-3 border bg-light" >
      <Card style={{ width: 245}}>
      <CardMedia
        component="img"
        height="200"
        image="https://blog-live.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2022/08/08151441/curd1.webp"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Curd
        </Typography>
        <Typography variant="body2" color="text.secondary">
        ₹ 10/-
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClickCurd}>Add</Button>
    
      </CardActions>
    </Card>
      </div>
    </div>
    
    <div class="col-6" style={{width:"300px"}}>
      <div class="p-3 border bg-light">
      <Card style={{ width: 245}}>
      <CardMedia
        component="img"
        height="200"
        image="https://images.unsplash.com/photo-1589135233689-d56032e9680a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Pickle
        </Typography>
        <Typography variant="body2" color="text.secondary">
        ₹ 15/-
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClickPickle}>Add</Button>
    
      </CardActions>
    </Card>
      </div>
      
    </div>
  </div>
</div>    
<div ref={ref}><button><Link to="checkout">CheckOut</Link></button></div>
        </div>
    )
}
  export default Thali