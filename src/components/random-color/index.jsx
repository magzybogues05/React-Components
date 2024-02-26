import React, { useEffect, useState } from 'react'
import './style.css'
const RandomNumberUtility=(limit)=>{
    return Math.floor(Math.random()*limit);
}

const RandomColor = () => {

    const [isHex,setIsHex]=useState(true);
    const [color,setColor]= useState('#000000')

    const HandleModeChange= ()=>{
        setIsHex(!isHex);
    }

    const HandleRandomColor=()=>{
        if(isHex)
        {
            // handle random hex color
            const hex=[1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F'];
            let hexColor= "#";
            for(let i=0;i<6;i++)
            {
                const randomIdx= RandomNumberUtility(hex.length);
                hexColor+=hex[randomIdx];
            }
            
            setColor(hexColor);
        }
        else{
            // handle random rgb color
            const r=RandomNumberUtility(256);
            const g=RandomNumberUtility(256);
            const b=RandomNumberUtility(256);

            const rgbColor=`rgb(${r},${g},${b})`;
            console.log(rgbColor);
            setColor(rgbColor);
            

        }
    }
    useEffect(()=>{
        HandleRandomColor();
    },[isHex]);

  return (
    <div style={{height:'100vh',width:'100vw',background:color}}className='container'>
        <button onClick={HandleModeChange}>{(isHex)?"Change to RGB":"Change to HEX"}</button>
        <button onClick={HandleRandomColor}>Generate Random Color</button>
        <div className='colorDetails'>
            <h3>{isHex?"HEX Color":"RGB Color"}</h3>
            <h1>{color}</h1>
        </div>
    </div>
  )
}

export default RandomColor
