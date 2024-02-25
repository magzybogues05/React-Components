import React, { useState } from 'react'
import data from './data';
import './style.css'

const Accordion = () => {

    const [selected,setSelected]=useState(null);
    const [enableMultiSelection,setEnableMultiSelection]=useState(false);
    const [multiSelected,setMultiSelected]=useState([]);

    const handleSingleSelection=(getCurrentId)=>{
            if(selected===getCurrentId)
            {
                setSelected(null);
            }
            else{
                setSelected(getCurrentId);
            }
        
    }

    const handleMultiSelection=(getCurrentId)=>{
        let copyMultiSelected=[...multiSelected];
        let idx=copyMultiSelected.indexOf(getCurrentId);
        if(idx==-1)
        {
            copyMultiSelected.push(getCurrentId);
        }
        else{
            copyMultiSelected.splice(idx,1);
        }
        setMultiSelected(copyMultiSelected);
    }

    const handleMultipleSelection=()=>{
        setSelected(null);
        setMultiSelected([]);
        setEnableMultiSelection(!enableMultiSelection);
    }

  return (
    <div className='wrapper'>
        <button onClick={handleMultipleSelection}> {(enableMultiSelection? "Disable Multi Selection":"Enable Multi Selection")}</button>
        <div className='accordian'>
            {
                (data && data.length>0) ? 
                data.map(dataItem=><div className='item'>
                    <div onClick={()=>(enableMultiSelection)?handleMultiSelection(dataItem.id):handleSingleSelection(dataItem.id)} className='title'>
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        (enableMultiSelection?((multiSelected.indexOf(dataItem.id)!==-1) && <div className='content'>{dataItem.answer}</div>) : 
                        ((selected===dataItem.id)&& <div className='content'>{dataItem.answer}</div>))
                    }
                </div>
                ):(<div>no data found!</div> )
            }
        </div>
      
    </div>
  )
}

export default Accordion
