import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import './qr-code-generator.css'

const QRCodeGenerator = () => {

    const [qrCode,setQrCode]=useState('');
    const [input,setInput]=useState('');

    const handleGenerateQrCode=()=>{
        setQrCode(input);
        setInput('');
    }
  return (
    <div className='qr-code-container'>
        <h1>QR code generator</h1>
        <div>
            <input onChange={(e)=>setInput(e.target.value)} type="text" name="qr-code" value={input} placeholder='Enter Your Value Here..'/>
            <button className={input && input.trim()!==""?'qr-btn active':'qr-btn inactive'}  disabled={input && input.trim()!=="" ? false:true} onClick={handleGenerateQrCode}>Generate QR</button>
        </div>
        <div>
            <QRCode id="qr-code-id" value={qrCode} size={350} bgColor='#fff'/>
        </div>
    </div>
  )
}

export default QRCodeGenerator
