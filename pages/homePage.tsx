'use client'

import Link from 'next/link'
import React from 'react';
import Image from 'next/image';
import Button from '../components/Button';
import { useState,useRef } from 'react';
import * as htmlToImage from "html-to-image";
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function homePage(){

    const [url, setUrl] = useState('');
    const [qrIsVisible, setQrIsVisible] = useState(false);
    const [qr, setQr] = useState('');
    const router = useRouter();

    const handleEmptyUrl = (e) => {
        if (e.target.value === "") {
          toast.error("Please enter a URL");
          return
        }
        setUrl(e.target.value);
        }


    const generateQR = () => {
       
        if(url==""){
            toast.error("Please enter a URL");
            return;
        }
        setQrIsVisible(true);

      
    }

    const qrCodeRef = useRef(null);
  const downloadQRCode = () => {
    htmlToImage
      .toPng(qrCodeRef.current)
      .then(function (url) {
        toast.success("QR Code Downloaded!");
        const link = document.createElement("a");
        link.href = url;
        link.download = "qr-code.png";
        link.click();
      })
      .catch(function (error) {
        toast.error("Error Generating QR Code!");
      });
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
                            <button onClick={() => {router.push('/auth/Signin')}} className='border rounded-lg text-white text-xl w-{250} px-8 p-1 mt-1 hover:bg-blue  focus:outline-none focus:ring-2 focus:ring-sky focus:ring-opacity-50'> Login </button>
                        </div>
                        <div className='px-2'>
                            <button onClick={() => {router.push('/auth/Signup')}} className='border rounded-lg text-white text-xl w-{250} px-8 p-1 mt-1 hover:bg-blue  focus:outline-none focus:ring-2 focus:ring-sky focus:ring-opacity-50'>SignUp</button>
                        </div>
                    </div>
                </div>
                
                
            </div>
            
            <div  className="flex justify-center  my-10 mt-10 p-5">
            <div ref={qrCodeRef}>
                <Image className='border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
                ' src={qrIsVisible ? `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}` : '/images/appIcon.png'} width={400} height={300} alt=''/>
            </div>
            </div>

            <div className="flex-col">
                <p className='text-4xl  text-center font-extrabold'>Enter your URL :</p>
                <div className="flex justify-center my-5">
                    <input type="url" placeholder='Enter URL' name="url" id="url" className='text-black border-3 border-black w-1/3 rounded-2xl p-2 px-5 focus within-text-gray'  onChange={(e) => handleEmptyUrl(e)}/>
                </div>
                <div className="flex justify-center">
                    <Button onClick={qrIsVisible ? downloadQRCode : generateQR} text={qrIsVisible ? 'Download QR' : 'Generate QR'} />

                </div>
            
            </div>
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            
        />

        <ToastContainer />
       </div>

      
    );
}

export default homePage;