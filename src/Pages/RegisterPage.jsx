import React, { useState } from 'react'
import { AuthConnect } from '../AuthConnect';

function RegisterPage() {
    const [ email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    const [phone_number, setPhone_number ] = useState("");
    const [ interest, setInterest ] = useState("");
    const registerNewUser =async (e)=>{
        e.preventDefault();
        try{
        const _data = {
            email: email,
            password,
            Interest:interest,
            phone_number
        };
        const {data} = await AuthConnect.post("user/register",_data);

        if(!data){
            alert("Registration failed");
            throw new Error("Unable to register user");

        };

        console.log({data});
        localStorage.setItem("email", data.data.email);
        localStorage.setItem("user_id",data.data.user_id);

        window.location = "/verify-email";
    } catch (error) {
        let msg_err = error.message;
        if(error.response.data) msg_err = msg_err.concat(", " +error.response.data.message);
            console.log({msg_err});
            alert(msg_err);
       }

    };
  return (
      <div>
        <body class="bg-gray-100">
    <div class="min-h-screen flex items-center justify-center">
        <div class="bg-white p-8 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
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
                    <label class="block text-gray-700 font-bold mb-2" for="username">
                        Phone number
                    </label>
                    <input 
                    onChange={(e)=>setPhone_number(e.target.value)}
                    value={phone_number}
                    class="border rounded-lg px-3 py-2 w-full" type="text" name="phone_number" id="phone_number" placeholder="e.g +1000011101" />
                             
                 </div>
                 <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="interset">
                        Sport Interest
                    </label>
                    <select
                    value={interest}
                    onChange={(e)=>{
                        console.log(e.target.value);
                        setInterest(e.target.value);
                    }}
                      class="border rounded-lg px-3 py-2 w-full" name="interset" id="interset" 
                    >
                         <option value={"FOOTBALL"}>select</option>
                        <option value={"FOOTBALL"}>FOOTBALL</option>
                        <option value={"TENIS"}>TENIS</option>
                        <option value={"BASKETBALL"}>BASKETBALL</option>
                        <option value={"BASEBALL"}>BASEBALL</option>
                    </select>
                             
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
                </div>
                <button class="bg-black text-white rounded-lg px-4 py-2 w-full font-bold" type="click" 
                onClick={registerNewUser}
                >Register</button>
            </form>
        </div>
    </div>
</body>
    </div>
  )
}

export default RegisterPage