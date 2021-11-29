import React, { useState } from "react";
import "./styles.css";
import api from "../../Api";

function SignUp(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function sendForm(event){
        event.preventDefault();

        if (password !== confirmPassword){
            console.log("Password diferente")
        }else if(password.length < 6 || username.length < 5){
            console.log("Username ou password muito curto")
        }else{
            let response = await api.register(username, password);
            if (response){
                console.log("Usuário registrado")
            }else{
                console.log("Usuário não registrado")
            }
        }
    }

    function handleUsername(event){
        setUsername(event.target.value);
    }

    function handlePassword(event){
        setPassword(event.target.value);
    }

    function handleConfirmPassword(event){
        setConfirmPassword(event.target.value);
    }

    return(
        <div className="container">
            <h1>Sign Up</h1>
            <form className="form-container" onSubmit={sendForm}>
                <input placeholder="username" onChange={handleUsername}/>
                <input type="password" placeholder="password" onChange={handlePassword}/>
                <input type="password" placeholder="repeat password" onChange={handleConfirmPassword}/>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default SignUp;