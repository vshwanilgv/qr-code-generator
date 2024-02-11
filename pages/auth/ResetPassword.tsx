import Image from 'next/image'
import Link from 'next/link'


const ResetPassword = () => {
    return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'> 
       <div className="w-full h-[600px] bg-black rounded-[50px] flex">
            <div className="flex mx-auto my-auto w-2/5 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
                <Image className='mx-auto rounded-lg drop-shadow-lg' src="/images/auth.png" width={400} height={300} alt=''/>
            </div>

            <div className="h-[400px] w-0.5 bg-white flex mx-auto my-auto rounded-md"></div>

            <div className="flex flex-col w-2/5">
                <div className="flex flex-col mx-20 my-20">
                <p className='text-3xl my-10 text-center'>Password Reset</p>
                    <label htmlFor="email" className='text-md'>Email</label>
                    <input type="email" placeholder='user@hypercube.com' name="email" id="email" className='border-2 border-black rounded-md p-2'/>
                    <button className='bg-teal text-white rounded-md p-2 mt-5'>Request Password Reset</button>
                    <p className="text-center my-5">Back to login? <Link href='/auth/Signin' className='text-teal'>Sign In.</Link></p>
                </div>
             </div>    
            
       </div>
    </div>
    );
    }

export default ResetPassword;