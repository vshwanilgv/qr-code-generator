import Link from 'next/link'
import React from 'react';
import Image from 'next/image'

function homePage(){

    const generateQR = () => {
       
    }

    return(
       <div className=' h-screen bg-black'>
            
            <div className='w-full h-16 bg-purple1 flex-auto rounded-2xl p-2'>

                <div className='flex justify-start'>
                    <div className="flex rounded-lg ">
                        <Image className='rounded-lg drop-shadow-lg' src="/images/auth.png" width={40} height={30} alt=''/> 
                    </div>
                    <div className='flex justify-center  mt-0.5'>
                        <p className='text-4xl text-white font-extrabold px-5'>QR Gen</p>
                    </div>


                    <div className='flex justify-end absolute top-0 right-0 p-2'>
                        <div className='px-4' >
                            <button className='bg-purple2 text-white font-bold text-xl rounded-xl w-{250} p-1 mt-1 px-3'> Login </button>
                        </div>
                        <div className='px-4'>
                            <button className='bg-purple2 text-white font-bold text-xl rounded-xl w-{250} p-1 mt-1 px-3'>SignUp</button>
                        </div>
                    </div>
                </div>
                
                
            </div>
            
            <div className="flex justify-center  my-10 mt-10 p-5">
                <Image className='rounded-lg drop-shadow-lg' src="/images/qr.png" width={400} height={300} alt=''/>
            </div>

            <div className="flex-col">
                <p className='text-4xl text-center font-extrabold'>Enter your URL :</p>
                <div className="flex justify-center my-5">
                    <input type="url" placeholder='Enter URL' name="url" id="url" className='border-3 border-black w-1/3 rounded-2xl p-2'/>
                </div>
                <div className="flex justify-center">
                    <button className='bg-gradient-to-r from-purple to-purple2 text-white font-extrabold text-2xl rounded-2xl w-1/6 p-2 mt-5' onClick={generateQR}>Generate QR</button>

                </div>
            
            </div>
       </div>

      
    );
}

export default homePage;