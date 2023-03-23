import React, { useState } from 'react'
import { Link } from "react-router-dom";

function HomePage() {
  const [email, setEmail ]= useState(localStorage.getItem("email")?localStorage.getItem("email"):null);
  return (
    <div>

  <body style={{height:"100vh"}} class="bg-black text-white">
    <nav class="bg-gray-800 p-4">
      <div class="flex justify-between items-center">
        <a href="#" class="text-2xl font-bold">My App</a>
        <div class="flex items-center">
          <a class="mx-4">
            <Link to={"/profile"}>
            Profile
            </Link>
          </a>
          <a class="mx-4">
            <Link to={"/login"}>
            Login
            </Link>
          </a>
          <a class="mx-4">
            <Link to={"/buddies"}>
            Buddies
            </Link>
          </a>
         
        </div>
      </div>
    </nav>
    <div class="container mx-auto my-8">
      <h1 class="text-3xl font-bold mb-4">User Details</h1>
      <ul class="list-disc list-inside">
        <li><strong>Email:</strong> {email}</li>
        {/* <li><strong>Name:</strong> John Doe</li>
        <li><strong>Sport Interest:</strong> Football</li> */}
        <li><strong>If Email is Verified:</strong>{email?"Yes":"NO"}</li>
      </ul>
    </div>
  </body>

   </div>
  )
}

export default HomePage