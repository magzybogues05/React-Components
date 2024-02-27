import React, { useEffect, useState } from 'react'
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'
import './imageSlider.css';

const ImageSlider = ({url,limit=5,page=1}) => {
    const [images,setImages]=useState([]);
    const [currentSlide,setCurrentSlide]=useState(0);
    const [errorMsg,setErrorMsg]=useState(null);
    const [loading,setLoading]=useState(false);
    
    const handlePrevious=()=>{
        setCurrentSlide((currentSlide+1)%images.length);
    }
    
    const handleNext=()=>{
        setCurrentSlide((currentSlide-1+images.length)%images.length);

    }

    const fetchImages=async(url)=>{

        try{
            setLoading(true);
            const response=await fetch(`${url}?page=${page}&limit=${limit}`);

            const data=await response.json();
            if(data)
            {
                setImages(data);
                setLoading(false);
            }
        }
        catch(e){
            setErrorMsg(e.message);
            console.log(e.message);
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(url!==''){
            fetchImages(url);
        }
    },[url]);

    console.log(images);

    if(loading)
    {
        return <div>Loading data... Please wait!!</div>
    }
    if(errorMsg!==null)
    {
        return <div>Error Occurred</div>
    }
  return (
    <div className="container">
        <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left'/>
        {
            images && images.length ? 
            images.map((imageItem,index)=>{
                return <img 
                key={imageItem.id} 
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={currentSlide===index?'current-image':"current-image hide-current-image"}
                />
            })
            : null
        }
        <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right'/>
        <span className='circle-indicators'>
            {
                images && images.length?
                images.map((_,index)=><button
                key={index}
                className={currentSlide===index?'current-indicator':"current-indicator inactive-indicator"}  
                onClick={()=>setCurrentSlide(index)}
                ></button>)
                :null
            }
        </span>
    </div>
  )
}

export default ImageSlider

