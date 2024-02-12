import Link from 'next/link'
import React from 'react';
import Image from 'next/image'

function homePage(){

    const generateQR = () => {
       
    }

    return(
       <div className=' h-screen bg-black'>
            
            <div className='w-full h-12 bg-purple1 flex-auto rounded-2xl px-5'>

                <div className='flex justify-start'>
                    <div className="flex rounded-lg  ">
                        <Image className='rounded-lg drop-shadow-lg' src="/images/auth.png" width={40} height={30} alt=''/> 
                    </div>
                    <div className='flex justify-center border-2 rounded-2xl  mt-0.5'>
                        <p className='text-4xl text-white font-extrabold px-5'>QR Gen</p>
                    </div>


                    <div className='flex justify-end absolute top-0 right-0'>
                        <div className='px-3'>
                            <button className='bg-purple2 text-white font-bold text-xl rounded-2xl w-1/8 p-1 mt-1'>Login</button>
                        </div>
                        <div className='px-3'>
                            <button className='bg-purple2 text-white font-bold text-xl rounded-2xl w-1/8 p-1 mt-1'>SignUp</button>
                        </div>
                    </div>
                </div>
                
                
            </div>
            
            <div className="flex justify-center my-5">
                <Image className='rounded-lg drop-shadow-lg' src="/images/qr.png" width={400} height={300} alt=''/>
            </div>

            <div className="flex-col">
                
                <div className="flex justify-center">
                    <button className='bg-gradient-to-r from-purple to-purple2 text-white font-extrabold text-2xl rounded-2xl w-1/6 p-2 mt-5' onClick={generateQR}>Download</button>

                </div>
            
            </div>
       </div>

      
    );
}

export default homePage;