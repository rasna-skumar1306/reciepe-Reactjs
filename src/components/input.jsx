import React from "react";

function Input() {

    
    return (
        <form>
            <input class="user top" type="text" placeholder="Enter your name" />
            <input class="user bottom" type="password" placeholder="Enter your password" />
            <button class="btn btn-lg btn-success" type="submit" >Submit</button>
        </form>);
}

export default Input;