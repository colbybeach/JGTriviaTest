import React, { useState } from 'react'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'

export default function AuthPage() {



    const [login, setLogin] = useState(true)


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-49">
        <div className="absolute inset-0 backdrop-filter backdrop-blur-lg"></div>

        <div className="bg-white p-8 shadow-md rounded-md w-96 z-50">

            {login ? 
            
                <Login />

            :
                <Signup />
            }


            <button className='btn btn-link' onClick={() => setLogin(!login)}>{login ? "Sign Up" : "Login"}</button>
            
        </div>


    </div>
  )
}
