import Link from 'next/link'
import React from 'react';
import Image from 'next/image'
import Button from '../components/Button'
import { useState } from 'react';


function homePage(){

    const generateQR = () => {
       alert('QR Generated')
    }

    return(
       <div className=' h-screen bg-black'>
            
            <div className='w-full h-16 bg-blue1 flex-auto rounded-b-2xl p-2'>

                <div className='flex justify-start'>
                    <div className="flex rounded-lg ">
                        <Image className='rounded-lg drop-shadow-lg' src="/images/logo.png" width={40} height={30} alt=''/> 
                    </div>
                    <div className='flex justify-center  mt-0.5'>
                        <p className='text-4xl text-white font-extrabold px-5'>QRify</p>
                    </div>


                    <div className='flex justify-end absolute top-0 right-0 p-2'>
                        <div className='px-2' >
                            <button className='border rounded-lg text-white text-xl w-{250} px-8 p-1 mt-1 hover:bg-blue  focus:outline-none focus:ring-2 focus:ring-sky focus:ring-opacity-50'> Login </button>
                        </div>
                        <div className='px-2'>
                            <button className='border rounded-lg text-white text-xl w-{250} px-8 p-1 mt-1 hover:bg-blue  focus:outline-none focus:ring-2 focus:ring-sky focus:ring-opacity-50'>SignUp</button>
                        </div>
                    </div>
                </div>
                
                
            </div>
            
            <div className="flex justify-center  my-10 mt-10 p-5">
                <Image className='rounded-lg drop-shadow-2xl backdrop-filter backdrop-blur-2xl' src="/images/appIcon.png" width={400} height={300} alt=''/>
            </div>

            <div className="flex-col">
                <p className='text-4xl text-center font-extrabold'>Enter your URL :</p>
                <div className="flex justify-center my-5">
                    <input type="url" placeholder='Enter URL' name="url" id="url" className='border-3 border-black w-1/3 rounded-2xl p-2 px-5 focus within-text-gray'  onChange={(e) => setUrl(e.target.value)}/>
                </div>
                <div className="flex justify-center">
                    <Button onClick={generateQR} text='Generate QR' />

                </div>
            
            </div>
       </div>

      
    );
}

export default homePage;