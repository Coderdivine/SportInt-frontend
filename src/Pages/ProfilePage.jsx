import React from 'react'
import { useState } from 'react'
import { AuthConnect } from '../AuthConnect';

function ProfilePage() {

  const user_data = localStorage.getItem("user_data")?(JSON.parse(localStorage.getItem("user_data"))):[];
  const [ username, setUsername ] = useState(user_data?user_data.username:"");
  const [ email, setEmail ] = useState(user_data?user_data.email:"");
  const [ interest,setInterest ] = useState(user_data?user_data.Interest:"");
  const [ phone_number, setPhone_number ] = useState(user_data?user_data.phone_number:"");
  const user_id = localStorage.getItem("user_id")?localStorage.getItem("user_id"):"";

  const SaveChanges = async (e)=>{
     e.preventDefault();
     try{

      const _data = {
        Interest:interest,
        phone_number,
        email,
        username,
        user_id
      }

      const { data } = await AuthConnect.post("/user/update-profile",_data);
      if(!data){
         alert("Unable to make changes...");
         throw new Error("Unable to make changes...");
      };

      console.log({data:data.data});
      alert("Successfully saved changes to your profile");
    } catch (error) {
      let msg_err = error.message;
      if(error.response.data) msg_err = msg_err.concat(", " +error.response.data.message);
          console.log({msg_err});
          alert(msg_err);
     }
  }

  return (
    <div>
      <body class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-black">Edit User Details</h1>
      <form class="mt-8">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="name">Username</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          type="text" placeholder="Enter your name" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">Email</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          id="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type="email" placeholder="Enter your email address" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="Phone Number">Phone Number</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          value={phone_number}
          onChange={(e)=>setPhone_number(e.target.value)}
          id="Phone Number" type="text" placeholder="Enter your phone Number" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="sport-interest">Sport Interest</label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          value={interest}
          onChange={(e)=>setInterest(e.target.value)}
          id="sport-interest" type="text" placeholder="Enter your sport interest" />
        </div>
        {/* <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="verified-email">Email Verified?</label>
          <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="verified-email">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div> */}
        <div class="flex items-center justify-between">
          <button class="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          onClick={SaveChanges}
          type="click">
  Save Changes
  </button>
  </div>
  </form>
  
    </div>
  </body>
</div>
  )
}


export default ProfilePage;