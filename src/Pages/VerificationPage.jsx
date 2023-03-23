import React, { useState } from 'react'
import { AuthConnect } from '../AuthConnect';

function VerificationPage() {
    //Lead to homepage if verification is succesful...
    const user_id = localStorage.getItem("user_id")?localStorage.getItem("user_id"):null;
    const [ otp, setOtp ] = useState("");

    const verifyCode = async(e)=>{
      e.preventDefault();
      try{
        const { data } = await AuthConnect.post("/user/v-registration",{user_id,token:otp});
        console.log({response:data});
        if(!data){
          alert("Verification failed");
          throw new Error("Verification failed");
        }
        if(!data.data.isEmailVerified) alert("Email verification failed");
        alert(data.message);
        window.location = "/";
      }catch (error) {
        let msg_err = error.message;
        if(error.response.data) msg_err = msg_err.concat(", " +error.response.data.message);
            console.log({msg_err});
            alert(msg_err);
       }
       
    }

  return (
    <div>
        <body class="bg-gray-100" style={{height:"100vh"}} >
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-black">Verify Your Email Address</h1>
    <p class="text-gray-500 mt-2">Please enter the 6-digit code sent to your email address.</p>
    <form class="mt-8">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="verification-code">Verification Code</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="verification-code" type="text" 
        value={otp}
        onChange={(e)=>setOtp(e.target.value)}
        placeholder="Enter the code" />
      </div>
      <button class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      onClick={verifyCode}
      type="click">Verify</button>
    </form>
  </div>
</body>

    </div>
  )
}

export default VerificationPage;