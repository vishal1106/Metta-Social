import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
import "./Search.css"
import Result from './Result'
const Search = () => {
  const [newdata,setNewdata]=useState([])
  const [filterData,setFilterData]=useState([])
  const [way,setWay]=useState(true)
const [data,setData]=useState({
    origin:"",
    dest:"",
    departure:"",
    returns:"",
    passenger:"",
})



const getdata=()=>{
    axios.get("https://gentle-scrubland-49275.herokuapp.com/flightData").then((res)=>{
        setNewdata(res.data)
        setFilterData(res.data)
    }).catch((err)=>{
        console.log(err)
    })
}
useEffect(()=>{
    getdata()
},[])
    const Onchangehandler=(e)=>{
        const {value,name}=e.target

        setData({
            ...data,
            [name]:value
        })
      
    }


    const Searchhnamdle=(e)=>{
    e.preventDefault();

const {origin,dest,departure,returns}= data
 
if(departure && returns)
{
    let filter=filterData.filter((el)=>{
        return  el.originCity===origin && el.destinationCity==dest && el.depart===departure && el.return==returns
       })
       setNewdata(filter)
}
else{
    let filter=filterData.filter((el)=>{
        return  el.originCity===origin && el.destinationCity==dest && el.depart===departure 
       })
       setNewdata(filter)
}
     
    }
  
    return (
    <div>
  


        <div className='main'>
        <div className='div1'>
  <div className='btn'>
  <button  disabled={way ? "":"disabled"} onClick={()=>setWay(false)}>One Way</button>
  <button disabled={way ? "disabled":""} onClick={()=>setWay(true)}>Return </button>
  </div>
      {
        way ?  
         <div>
        <form  onSubmit={Searchhnamdle} >
             <input type="text" name='origin' placeholder='Enter the Original City' onChange={Onchangehandler} />
             <br />
             <input type="text" name='dest' placeholder='Enter the Destination City' onChange={Onchangehandler}/>
             <br />
             Departure :-
             
          
             <input type="date" name="departure"  placeholder='Enter the Departure date' onChange={Onchangehandler}/>
             <br />
             Return :-
             <input type="date"  name="returns" placeholder='Enter the Return  Date' onChange={Onchangehandler}/>
             <br />
             <input type="number"  name='passenger' placeholder='Passenger' onChange={Onchangehandler}/>
             <br />
             <input type="submit"  value="Search"/>
         </form>
         </div> 
        : 
        <div>
       <form  onSubmit={Searchhnamdle} >
      
            <input type="text" name='origin' placeholder='Enter the Original City' onChange={Onchangehandler} />
            <br />
            <input type="text" name='dest' placeholder='Enter the Destination City' onChange={Onchangehandler}/>
            <br />
            Departure :-
            <input type="date" name="departure"  placeholder='Enter the Departure date' onChange={Onchangehandler}/>
            <br />
           
            <input type="number"  name='passenger' placeholder='Passenger' onChange={Onchangehandler}/>
            <br />
            <input type="submit"  value="Search"/>
        </form>
       </div>
      }
      </div> 
       <div className='div2'>
       
         <Result newdata={newdata} data={data} way={way}/>
      
       </div>
    </div>
    </div>
  )
}

export default Search