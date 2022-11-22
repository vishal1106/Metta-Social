import React from 'react'
import "./Result.css"
const Result = ({newdata,data,way}) => {
  const {origin,dest,departure,returns}= data
 let x=""
  if(origin )
  {
  x=">"
  }
  else{
     x=""
  }
  return (
  <div>
    {
      newdata.length==0 ? <div> <div className={x? "result":""}>
      <div>
      <h3>{
      way ? `${origin} ${x} ${dest} ${x} ${origin}`:`${origin} ${x}  ${dest}`
      }</h3> 
      </div>
      <div>
        <p> {departure ? departure:""}</p>
        <p> {returns && way ? returns:""}</p>
      </div>
      
            </div> 
            <div className='mainflight'>
              <h3>Flight is not Available</h3>
            </div>
            </div> :  <div >
      <div className={x? "result":""}>
<div>
<h3>{
way ? `${origin} ${x} ${dest} ${x} ${origin}`:`${origin} ${x}  ${dest}`
}</h3> 
</div>
<div>
  <p> {departure ? departure:""}</p>
  <p> {returns && way ? returns:""}</p>
</div>

      </div>
     {
      way ?  <div>
      {
newdata && newdata.map((el)=>{
return <div className='mainflight'> 
<h2>RS.{el.price}.00</h2>
<div className='flight'>
 <div>
  <p>{el.departCode}</p>
  <p>{el.codeorigin} {">"} {el.codedest}</p>
  <p>Depart:{el.departureTime}</p>
  <p>Arrive:{el.arrivalTime}</p>
 
 </div> 

 <div>
 <p>{el.arrival}</p>
  <p>{el.codedest}{">"} {el.codeorigin} </p>
  <p>Depart:{el.returndepartureTime}</p>
  <p>Arrive:{el.returnarrivalTime}</p></div> 
 <div>
<img src={el.image}  alt="" />
<br />
<button>BOOK THIS FLIGHT</button>
  
  </div> 
</div>
</div>
})
      }
  </div>:  <div>
          {
 newdata && newdata.map((el)=>{
return <div className='mainflight'> 
  <h2>RS.{el.price}.00</h2>
  <div className='flight'>
     <div>
      <p>{el.departCode}</p>
      <p>{el.codeorigin} {">"} {el.codedest}</p>
      <p>Depart:{el.departureTime}</p>
      <p>Arrive:{el.arrivalTime}</p>
     
     </div> 

  <div>
<img src={el.image}  alt="" />
<br />
<button>BOOK THIS FLIGHT</button>
</div>  
      </div> 
  </div>

 })
          }
      </div>
     }
  </div>
    }
  </div>
  )
}

export default Result