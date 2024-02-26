import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa';
import './style.css';

const StarRating = ({noOfStars}) => {

    const [rating,setRating]= useState(0);
    const [hover,setHover]=useState(0);

    const handleClick= (index)=>{
        setRating(index);
    }
    const handleMouseEnter=(index)=>{
        setHover(index);
    }
    const handleMouseLeave=()=>{
        setHover(rating);
    }

  return (
    <div className='star-rating'>

        <h2>Rate Us!</h2>

        <div className='star-container'>
        {[...Array(noOfStars)].map((_,index)=>{
            index+=1;
            return (
                <FaStar key={index}
                 className={index<=(hover||rating)?"active":"inactive"}
                 onClick={()=>handleClick(index)}
                 onMouseMove={()=>handleMouseEnter(index)}
                 onMouseLeave={()=>handleMouseLeave()}
                />
            )
        })}
        </div>
    </div>
  )
}

export default StarRating


