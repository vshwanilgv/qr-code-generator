import Image from "next/image"
import Link from "next/link"
import { signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, GithubAuthProvider,setPersistence, browserSessionPersistence} from "firebase/auth";
import React from "react";
import {auth} from "../../firebase";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Signin = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");


    

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential ? credential.accessToken : null;
          const user = result.user;
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.customData.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
        }

        const handleGithubSignIn = () => {
            const provider = new GithubAuthProvider();
            signInWithPopup(auth, provider)
            .then((result) => {
              const credential = GithubAuthProvider.credentialFromResult(result);
              
              const user = result.user;
            }).catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              const email = error.customData.email;
              const credential = GithubAuthProvider.credentialFromError(error);
            });
            }
    
    const handleSignInWithEmail = () => {

        if (email === "" || password === "" ) {
            toast.warn("Please fill out all fields!");
            return;

        }

        setPersistence(auth, browserSessionPersistence)
        .then(async () => {
            return signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    if(user.emailVerified == false){
                        toast.error("Email not verified. Please verify your email.");
                        return;
                    }
                   
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if (errorCode === "auth/wrong-password") {
                        toast.warning("Wrong Credentials entered.");
                    } else if (errorCode === "auth/user-not-found") {
                        toast.warning("User not found.");
                    } else if (errorCode === "auth/invalid-email") {
                        toast.warning("Invalid email.");
                    } else {
                        toast.error("Something went wrong! " + errorMessage);
                    }
                });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.warning("An error occurred." + errorCode + " : " + errorMessage);
        });
   
   
}



    return (
       <div className="flex min-h-screen flex-col items-center justify-between p-24"> 
       <div className="w-full h-[600px] bg-black rounded-[50px] flex">
            <div className="flex mx-auto my-auto w-2/5 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
                <Image className="mx-auto rounded-lg drop-shadow-lg" src="/images/auth.png" width={400} height={300} alt=""/>
            </div>

            <div className="h-[400px] w-0.5 bg-white flex mx-auto my-auto rounded-md"></div>

            <div className="flex flex-col w-2/5">
                <div className="flex flex-col mx-20 my-10">
                <p className="text-3xl my-10 text-center">Sign In</p>
                    <label htmlFor="email" className="text-md">Email</label>
                    <input type="email" placeholder="user@hypercube.com" name="email" id="email" className="border-2 border-black rounded-md p-2" onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="password" className="text-md">Password</label>
                    <input type="password" name="password" placeholder="Password" id="password" className="border-2 border-black rounded-md p-2" onChange={(e) => setPassword(e.target.value)}/>
                    <button className="bg-teal text-white rounded-md p-2 mt-5" onClick={handleSignInWithEmail }>Sign In</button>

                    <p className="text-center my-5">Don&quot;t have an account? <Link href="/auth/Signup" className="text-teal">Sign up.</Link></p>
                    <div className="w-[80%] h-0.5 bg-white rounded-3xl mx-auto my-5"></div>
                    <p className="text-center my-2">Or use SSO with</p>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex justify-end mx-5" onClick={() => { handleGoogleSignIn() }}><Image className="rounded-lg drop-shadow-lg" src="/images/google.png" width={50} height={50} alt="" /></div>
                        <div className="flex justify-start mx-5" onClick={() => { handleGithubSignIn() }}><Image className="rounded-lg drop-shadow-lg" src="/images/github-logo.png" width={50} height={50} alt="" /></div>
                    </div>
                </div>
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

export default Signin;