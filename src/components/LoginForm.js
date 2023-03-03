import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import {loggedIn} from "../redux/authSlice";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Container from "@mui/material/Container";

let errorInput = false;
export default function FormPropsTextFields() {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        if ((data.get("loginInput")) !== "admin" || (data.get("passwordInput")) !== "12345") {
            errorInput = true;
            setLogin('');
            setPassword('');
            return
        }
        dispatch(loggedIn({
            login: data.get("loginInput"),
            password: data.get("passwordInput")
        }))
        setLogin('');
        setPassword('');
        navigate('/profile')
    }

    return (
        <Container
            component="form"
            sx={{
                '& .MuiTextField-root': {m: 1, width: '25ch'},

            }}
            style={{  display: "flex",

                // alignItems: "center",

                justifyContent: "center"
            }}
            noValidate
            autoComplete="off"
            onSubmit={event => handleSubmit(event)}
        >
            <div>
                <FormControl>
                    <TextField
                        error={errorInput}
                        required
                        id="loginInput"
                        name="loginInput"
                        label={errorInput ? t("Wrong login or password") : t("Login")}
                        onChange={e => setLogin(e.target.value)}
                        value={login}
                    />
                    <TextField
                        required
                        error={errorInput}
                        id="passwordInput"
                        name="passwordInput"
                        label={errorInput ? t("Wrong login or password") : t("Password")}
                        type="password"
                        autoComplete="current-password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    <Button variant="contained" type='submit'>{t("Log In")}</Button>
                </FormControl>
            </div>

        </Container>
    );
}
