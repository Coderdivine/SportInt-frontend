import React, { useEffect } from 'react'
import { useState } from 'react'
import { AuthConnect } from '../AuthConnect';

function LoginPage() {
    const [ email,setEmail ] = useState("");
    const [ password,setPassword ] = useState("");
    const LoginUser= async (e)=>{
        e.preventDefault();
       try {
        const { data } = await  AuthConnect.post("user/login", { email: email, password});
       console.log({data});
       if(!data) alert("Login failed");
       localStorage.setItem("user_data",JSON.stringify(data.data));
       window.location = "/"
       } catch (error) {
        let msg_err = error.message;
        if(error.response.data) msg_err = msg_err.concat(", " +error.response.data.message);
            console.log({msg_err});
            alert(msg_err);
       }

    }
    
    useEffect(()=>{
        if(localStorage.getItem("login-details")){
            window.location = "/";
        }
    },[]);

  return (
    <div>
        <body class="bg-gray-100">
    <div class="min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
            <form>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="username">
                        Email
                    </label>
                    <input 
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    class="border rounded-lg px-3 py-2 w-full" type="text" name="username" id="username" placeholder="e.g xyz@gmail.com" />
                             
                 </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="password">
                        Password
                    </label>
                    <input 
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    class="border rounded-lg px-3 py-2 w-full" type="password" name="password" id="password" placeholder="Enter your password" />
                </div>
                <div class="flex justify-between items-center mb-4">
                    
                    <div>
                    <a class="text-gray-500 hover:text-gray-700" href="#">Forgot password?</a>

                    </div>
                </div>
                <button class="bg-black text-white rounded-lg px-4 py-2 w-full font-bold" type="click" 
                onClick={LoginUser}
                >Login</button>
            </form>
        </div>
    </div>
</body>
    </div>
  )
}

export default LoginPage