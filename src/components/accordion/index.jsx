import React, { useState } from 'react'
import data from './data';
import './style.css'

const Accordion = () => {

    const [selected,setSelected]=useState(null);
    const handleSingleSelection=(getCurrentId)=>{
            if(selected===getCurrentId)
            {
                setSelected(null);
            }
            else{
                console.log(getCurrentId);
                setSelected(getCurrentId);
            }
        
    }

  return (
    <div className='wrapper'>

        <div className='accordian'>
            {
                (data && data.length>0) ? 
                data.map(dataItem=><div className='item'>
                    <div onClick={()=>handleSingleSelection(dataItem.id)} className='title'>
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        (selected===dataItem.id)?<div className='content'>{dataItem.answer}</div>:null
                    }
                </div>
                ):(<div>no data found!</div> )
            }
        </div>
      
    </div>
  )
}

export default Accordion
