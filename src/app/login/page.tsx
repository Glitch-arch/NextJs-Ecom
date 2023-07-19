"use client"

import test from "../api/users/test/route"

export default function Login() {
    
    var user = {
        username: "test",
        email: "test@gmail.com",
        password: "test"
    
    }

    return(
        <div className="text-center">
            <h1>Login</h1>
            <button onClick={()=>{
                test(user)
            }}>
                test
            </button>
        </div>
    )
}