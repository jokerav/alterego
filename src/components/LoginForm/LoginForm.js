import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import {loggedIn} from "../../redux/authSlice";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
export default function FormPropsTextFields() {
    const dispatch = useDispatch();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        dispatch(loggedIn({
            login: data.get("loginInput"),
            password: data.get("passwordInput")
        }))
        setLogin('');
        setPassword('');
        navigate('/')

    }

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
            onSubmit={event => handleSubmit(event)}
        >
            <div>
                <FormControl>
                    <TextField
                        required
                        id="loginInput"
                        name="loginInput"
                        label="login"
                        onChange={e => setLogin(e.target.value)}
                        value={login}
                    />
                    <TextField
                        required
                        id="passwordInput"
                        name="passwordInput"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    <Button variant="contained" type='submit'>Log In</Button>
                </FormControl>
            </div>

        </Box>
    );
}
