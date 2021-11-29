import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import api from '../../Api';

export default function SignUpMaterial() {
    const [username, setUsername] = useState("");
    const [password, setPsassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function sendForm(event) {
        event.preventDefault();

        if (password !== confirmPassword){
            console.log("Password diferente")
        }else if(password.length < 6 || username.length < 5){
            console.log("Username ou password muito curto")
        }else{
            let response = await api.register(username, password);
            if (response){
                console.log("Usário registrado")
            }else{
                console.log("Usário não registrado")
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
        <Box component="form" onSubmit={sendForm} sx={{display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems: 'center'}} > 
            <TextField 
            id="standard-basic" 
            label="Username" 
            variant="standard" 
            onChange={handleUsername}
            />
            <TextField 
            id="standard-basic" 
            label="Password" 
            variant="standard" 
            type="password" 
            onChange={handlePassword}
            />
            <TextField 
            id="standard-basic" 
            label="Confirm Password" 
            variant="standard" 
            type="password" 
            onChange={handleConfirmPassword}
            />
            <Button variant="primary" type="submit">Register</Button>
        </Box>
    );
}