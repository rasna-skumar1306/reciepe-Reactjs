import React, { useState } from "react";
import Register from "./register";
import Logo from "./logo";

function Login() {
    const [name,setName] = useState(""); 

    return (
        <div>
        <Logo/>
        <div className="content">
            <h1 className="hello">Hello {name} </h1>
            <input class="user top" type="text" placeholder="Enter your name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input class="user bottom" type="password" placeholder="Enter your password" />
            <button class="btn btn-lg btn-success" type="submit" onSubmit={(e)=>{e.preventDefault()}} >Submit</button>
            <Register />
        </div>
        </div>);
}

export default Login;