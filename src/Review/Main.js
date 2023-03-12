import React, { useState } from 'react'
import Data from './Data'
import { AiOutlineArrowRight,AiOutlineArrowLeft } from "react-icons/ai";
import './Main.css'

function Main() {
 const [use,setUse]=useState(Data)
 const [num,setNum]=useState(0)

 const Left=()=>{
   if(0>=num-1){
    setNum(Data.length-1)

   }
   else{
    setNum(num-1)
   }
 }
 const Right=()=>{
   if(Data.length-1<=num){
    setNum(0)
   }
   else{
    setNum(num+1)
   }
    
   
 }
 const Random=()=>{
   const Ran=Math.floor(Math.random()*Data.length)
   setNum(Ran)
 }
  return (
    <div className='main'>
      <div className="mains">
        <h1>Our Reviews</h1>
        <div className="p">
        <p className='pp'></p>
        </div>
         <div className="List">
         <div className="list">
           <div className="pic">
            <img src={use[num].pic} alt={use[num].name}  />
           </div>
           <div className="nm">
           <h3>{use[num].name}</h3>
           <h4 style={{fontWeight:"500",color:"rebeccapurple"}}>{use[num].job}</h4>
           </div>
           <div className="info">
           <p>{use[num].info}</p>
           </div>
           <div className="icon">
           <h1><AiOutlineArrowLeft onClick={Left}/></h1><h1><AiOutlineArrowRight onClick={Right}/></h1>
           </div>
           <div className="ran">
           <button onClick={Random}><h4>Random</h4></button>
           </div>
         </div>
         </div>
      </div>
    </div>
  )
}

export default Main
