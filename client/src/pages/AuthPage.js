import React, {useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";

export const AuthPage = () => {
    const message = useMessage();
    const {loading, error, request, clearError} = useHttp();
    const [form, setForm] = useState({
        email:'', password:''
    });
    const changeHandler = event => {
        setForm({
            ...form, [event.target.name]: event.target.value
        });
    };

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form});
            console.log('Data', data);
        } catch (e) {}
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form});

        } catch (e) {}
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">

                <h1>Название проекта</h1>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Вход</span>
                        <div>

                            <div className="input-field">
                                <input placeholder="Введите email" id="email" name="email" type="text" onChange={changeHandler}/>
                                <label htmlFor="email" className="yellow-input">Емайл</label>
                            </div>
                            <div className="input-field">
                                <input placeholder="Введите пароль" id="password" name="password" type="password" onChange={changeHandler}/>
                                <label htmlFor="password" className="yellow-input">Пароль</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn yellow darken-4" style={{marginRight: 10}} onClick={loginHandler} disabled={loading}>Войти</button>
                        <button className="btn grey lighten-1 black-text" onClick={registerHandler} disabled={loading}>Регистрация</button>
                    </div>
                </div>

            </div>
        </div>
    );
}