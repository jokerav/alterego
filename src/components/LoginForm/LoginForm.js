import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import FormControl from '@mui/material/FormControl';

import Button from '@mui/material/Button';



export default function FormPropsTextFields() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log({
            login: data.get("loginInput"),
            password: data.get("passwordInput")
        })
        }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={event=>handleSubmit(event)}

        >
            <div>
                <FormControl >
                <TextField
                    required
                    id="loginInput"
                    name="loginInput"
                    label="login"
                />
                <TextField
                    required
                    id="passwordInput"
                    name="passwordInput"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                    <Button variant="contained" type='submit'>Log In</Button>
                </FormControl>
            </div>

        </Box>
    );
}
