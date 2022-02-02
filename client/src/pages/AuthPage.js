import React, {useState} from "react";
import {useHttp} from "../hooks/http.hook";

export const AuthPage = () => {
    const {loading, error, request} = useHttp();

    const [form, setForm] = useState({
        email:'', password:''
    });
    const changeHandler = event => {
        setForm({
            ...form, [event.target.name]: [event.target.value]
        })
    };

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form});
            console.log('Data', data);
        } catch (e) {

        }
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
                                <input placeholder="Введите email" id="email" type="text"/>
                                <label htmlFor="email" name="email" className="yellow-input" onChange={changeHandler}>Емайл</label>
                            </div>
                            <div className="input-field">
                                <input placeholder="Введите пароль" id="password" type="password"/>
                                <label htmlFor="password" name="password" className="yellow-input" onChange={changeHandler}>Пароль</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn yellow darken-4" style={{marginRight: 10}} disabled={loading}>Войти</button>
                        <button className="btn grey lighten-1 black-text" onClick={registerHandler} disabled={loading}>Регистрация</button>
                    </div>
                </div>

            </div>
        </div>
    );
}